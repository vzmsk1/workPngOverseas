import * as THREE from 'three';
import ThreeGlobe from 'three-globe';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import { excludedCountries } from './capitals';

document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('globeViz')) {
    createGlobe();
  }
});

const wrapperWidth = 930;
const wrapperHeight = 770;

Object.assign(THREE, { TrackballControls, CSS2DRenderer });

const colorInterpolator = t => `rgba(173,255,0,${1 - t + 0.5})`;

function createGlobe() {
  fetch('./ne_110m_admin_0_countries.geojson')
    .then(res => res.json())
    .then(countries => {
      const Globe = new ThreeGlobe({
        waitForGlobeReady: true,
        animateIn: true,
      })
        .showAtmosphere(true)
        // .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
        // .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')

        // rings
        .ringColor(() => colorInterpolator)
        .ringMaxRadius('maxR')
        .ringPropagationSpeed('propagationSpeed')
        .ringAltitude(0.004)
        .polygonAltitude(0.0035)
        .ringRepeatPeriod('repeatPeriod')

        // polygons
        .polygonsData(
          countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')
        )
        .polygonCapColor(() => '#422f7e')
        .polygonSideColor(() => '#6f6295')
        .polygonStrokeColor(() => '#7f77ce');

      const countriesList = [];

      fetch('./capitals.geojson')
        .then(res => res.json())
        .then(arr => {
          arr.features.forEach(i => {
            if (!excludedCountries.includes(i.properties.country)) {
              countriesList.push({
                country: i.properties.country,
                lat: i.geometry.coordinates[0],
                lng: i.geometry.coordinates[1],
              });
            }
          });

          let countryPoints =
            countriesList.map(country => ({
              ...country,
              maxR: 3,
              propagationSpeed: 3,
              repeatPeriod: 300,
            })) || [];

          Globe.ringsData(countryPoints);
        });

      // Setup renderer
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(wrapperWidth, wrapperHeight);
      document.getElementById('globeViz').appendChild(renderer.domElement);

      // Setup scene
      const scene = new THREE.Scene();
      scene.add(Globe);
      scene.add(new THREE.AmbientLight(0xcccccc, Math.PI));
      scene.add(new THREE.DirectionalLight(0xffffff, 0.6 * Math.PI));

      // Setup camera
      const camera = new THREE.PerspectiveCamera();
      camera.aspect = wrapperWidth / wrapperHeight;
      camera.updateProjectionMatrix();
      camera.position.z = 500;

      // Add camera controls
      const tbControls = new TrackballControls(camera, renderer.domElement);
      tbControls.minDistance = 201;
      tbControls.rotateSpeed = 5;
      tbControls.zoomSpeed = 0.8;

      // Initialize controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dynamicDampingFactor = 0.01;
      controls.enablePan = false;
      controls.minDistance = 275;
      controls.maxDistance = 275;
      controls.rotateSpeed = 0.8;
      controls.zoomSpeed = 1;
      controls.autoRotate = false;

      controls.minPolarAngle = Math.PI / 3.3;
      controls.maxPolarAngle = Math.PI - Math.PI / 1.5;

      // Kick-off renderer
      (function animate() {
        // IIFE
        Globe.rotation.y += 0.008;

        controls.update();
        tbControls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      })();
    });
}
