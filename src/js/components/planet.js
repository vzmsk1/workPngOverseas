import * as THREE from 'three';
import ThreeGlobe from 'three-globe';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
// import dotsData from './js/utils/planet_data.js';
const dotsData = [
	{
		lat: 52.374,
		lng: 4.88969,
	},
	{
		lat: 37.9838,
		lng: 23.7278,
	},
	{
		lat: 1.29,
		lng: 103.85,
	},
	{
		lat: 39.03,
		lng: 125.75,
	},
	{
		lat: 56.95,
		lng: 24.11,
	},
	{
		lat: 37.57,
		lng: 126.98,
	},
	{
		lat: 35.69,
		lng: 139.69,
	},
	{
		lat: 21.02,
		lng: 105.84,
	},
	{
		lat: 29.69,
		lng: 47.98,
	},
];
Object.assign(THREE, { TrackballControls, CSS2DRenderer });

let mouseX = 0;
let mouseY = 0;
// let windowHalfX = window.innerWidth / 2;
// let windowHalfY = window.innerHeight / 2;

const wrapper = document.querySelector('.main-banner__planet');
// const wrapperWidth = wrapper.offsetWidth;
// const wrapperHeight = wrapper.offsetHeight;
const wrapperWidth = 930;
const wrapperHeight = 770;
let windowHalfX = wrapperWidth / 2;
let windowHalfY = wrapperHeight / 2;

// Gen random data
const N = dotsData.length;
const gData = [...Array(N).keys()].map((el, ind) => ({
	lat: dotsData[ind].lat + 0.5,
	lng: dotsData[ind].lng + 0.5,
	// maxR: Math.random() * 20 + 3,
	maxR: 3,
	// propagationSpeed: (Math.random() - 0.5) * 20 + 1,
	propagationSpeed: 5,
	// repeatPeriod: Math.random() * 2000 + 200
	repeatPeriod: 200,
}));
const gHexData = [...Array(N).keys()].map((el, ind) => ({
	lat: dotsData[ind].lat,
	lng: dotsData[ind].lng,
}));
const gLabelData = [...Array(N).keys()].map((el, ind) => ({
	lat: dotsData[ind].lat,
	lng: dotsData[ind].lng,
	size: 7 + Math.random() * 30,
	color: 'rgba(173,255,0,1)',
}));

const highlitedCountries = ['Afghanistan', 'Belarus', 'Czechia', 'Austria', 'China'];
// const highlitedCountries = [];

const colorInterpolator = (t) => `rgba(173,255,0,${1 - t + 0.5})`;

fetch(
	'//unpkg.com/three-globe/example/country-polygons/ne_110m_admin_0_countries.geojson',
)
	.then((res) => res.json())
	.then((countries) => {
		const Globe = new ThreeGlobe({
			waitForGlobeReady: true,
			animateIn: true,
		})
			.showAtmosphere(true)
			.polygonsData(
				countries.features.filter((d) => d.properties.ISO_A2 !== 'AQ'),
			)
			// .polygonCapColor(() => 'rgba(22, 22, 139, 0.7)')
			.polygonCapColor((e) => {
				return highlitedCountries.includes(e.properties.BRK_NAME)
					? 'rgba(186, 119, 253, 0.6)'
					: 'rgba(22, 22, 139, 0.7)';
			})
			.polygonSideColor(() => 'rgba(163, 0, 255, 0.1)')
			.polygonStrokeColor(() => '#50b0ff')
			.globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
			.bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
			// hexs
			// .hexBinPointsData(gHexData)
			// .hexBinPointWeight(13)
			// .hexBinResolution(2)
			// .hexMargin(0.2)
			// .hexTopColor(() => 'rgba(0,255,0,0.1)')
			// .hexSideColor(() => 'rgba(0,255,0,0.4)')
			// .hexBinMerge(true)
			// rings
			.ringsData(gData)
			.ringColor(() => colorInterpolator)
			.ringMaxRadius('maxR')
			.ringPropagationSpeed('propagationSpeed')
			.ringAltitude(0.004)
			.polygonAltitude(0.0035)
			.ringRepeatPeriod('repeatPeriod');

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
