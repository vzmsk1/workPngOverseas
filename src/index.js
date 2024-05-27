import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "./index.scss";

// COMPONENTS
import "./js/components/burger";
import "./js/components/header";
import "./js/components/form";
import "./js/components/modal";

// UTILS
import "./js/utils/jquery.mask";
import "./js/utils/jquery.twentytwenty";
import "./js/utils/simplebar";

// PAGES
import "./js/pages/home-page";
import "./js/pages/news";
import "./js/pages/drilling-page";
import "./js/pages/well_cementing";
import "./js/pages/mpd";
import "./js/pages/about_us";
import "./js/pages/career";

//planet
import "./js/planet";

if (document.querySelectorAll("[data-showmore-btn]").length) {
  document.querySelectorAll("[data-showmore-btn]").forEach((btn) => {
    btn.addEventListener("click", function () {
      btn.classList.toggle("_is-active");
      btn
        .closest("[data-showmore-parent]")
        .querySelector("[data-showmore-content]")
        .classList.toggle("_is-active");
    });
  });
}

if (document.querySelector(".packages__swiper")) {
  new Swiper(".packages__swiper", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 40,
    speed: 400,
    navigation: {
      nextEl: ".packages .slider-btn-next",
      prevEl: ".packages .slider-btn-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
    },
  });
}

if (document.querySelector(".for-investors-trust__swiper")) {
  new Swiper(".for-investors-trust__swiper", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 40,
    speed: 400,
    navigation: {
      nextEl: ".for-investors-trust .slider-btn-next",
      prevEl: ".for-investors-trust .slider-btn-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
    },
  });
}

if (
  document.querySelector(".plan_for-investors .plan__graphs") &&
  window.innerWidth <= 768
) {
  new Swiper(".plan_for-investors .plan__graphs", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 40,
    speed: 400,
    navigation: {
      nextEl: ".plan_for-investors .slider-btn-next",
      prevEl: ".plan_for-investors .slider-btn-prev",
    },
  });
}

export const dataMediaQueries = (array, dataSetValue) => {
  // get objects with media queries
  const media = Array.from(array).filter(function (item, index, self) {
    if (item.dataset[dataSetValue]) {
      return item.dataset[dataSetValue].split(",")[0];
    }
  });
  // objects with media queries initialization
  if (media.length) {
    const breakpointsArray = [];
    media.forEach((item) => {
      const params = item.dataset[dataSetValue];
      const breakpoint = {};
      const paramsArray = params.split(",");
      breakpoint.value = paramsArray[0];
      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
      breakpoint.item = item;
      breakpointsArray.push(breakpoint);
    });
    // get unique breakpoints
    let mdQueries = breakpointsArray.map(function (item) {
      return (
        "(" +
        item.type +
        "-width: " +
        item.value +
        "px)," +
        item.value +
        "," +
        item.type
      );
    });
    mdQueries = uniqueArray(mdQueries);
    const mdQueriesArray = [];

    if (mdQueries.length) {
      // work with every breakpoint
      mdQueries.forEach((breakpoint) => {
        const paramsArray = breakpoint.split(",");
        const mediaBreakpoint = paramsArray[1];
        const mediaType = paramsArray[2];
        const matchMedia = window.matchMedia(paramsArray[0]);
        // objects with conditions
        const itemsArray = breakpointsArray.filter(function (item) {
          if (item.value === mediaBreakpoint && item.type === mediaType) {
            return true;
          }
        });
        mdQueriesArray.push({
          itemsArray,
          matchMedia,
        });
      });
      return mdQueriesArray;
    }
  }
};

export const _slideUp = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = showmore ? `${showmore}rem` : `0`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = !showmore ? true : false;
      !showmore ? target.style.removeProperty("height") : null;
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      !showmore ? target.style.removeProperty("overflow") : null;
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
      // create event
      document.dispatchEvent(
        new CustomEvent("slideUpDone", {
          detail: {
            target: target,
          },
        }),
      );
    }, duration);
  }
};

export const _slideDown = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.hidden = target.hidden ? false : null;
    showmore ? target.style.removeProperty("height") : null;
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = showmore ? `${showmore}rem` : `0`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
      // create event
      document.dispatchEvent(
        new CustomEvent("slideDownDone", {
          detail: {
            target: target,
          },
        }),
      );
    }, duration);
  }
};

export const _slideToggle = (target, duration = 500) => {
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};

class Accordion {
  constructor() {
    this.accordionItems = document.querySelectorAll("[data-accordion]");
    this.mdQueriesArray = dataMediaQueries(this.accordionItems, "accordion");
    this.regItems = Array.from(this.accordionItems).filter(
      function (item, index, self) {
        return !item.dataset.accordion.split(",")[0];
      },
    );
    this.attrs = {
      ACCORDION: "data-accordion",
      ITEM: "data-accordion-item",
      SINGLE: "data-accordion-single",
    };
    this.classes = {
      INIT: "_accordion-init",
      ACTIVE: "_is-active",
    };

    // init regular accordion items
    if (this.regItems.length) {
      this.init(this.regItems);
    }
    // init accordion items with media queries
    if (this.mdQueriesArray && this.mdQueriesArray.length) {
      const _this = this;

      this.mdQueriesArray.forEach((mdQueriesItem) => {
        mdQueriesItem.matchMedia.addEventListener("change", function () {
          _this.init(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        });
        this.init(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
      });
    }
  }

  hideBody(accordionGroup) {
    const activeTitle = accordionGroup.querySelector(
      `[${this.attrs.ITEM}].${this.classes.ACTIVE}`,
    );
    const speed = accordionGroup.dataset.accordionSpeed
      ? parseInt(accordionGroup.dataset.accordionSpeed)
      : 500;

    if (activeTitle && !accordionGroup.querySelectorAll("._slide").length) {
      activeTitle.classList.remove(this.classes.ACTIVE);
      _slideUp(activeTitle.nextElementSibling, speed);
    }
  }

  setActions(e) {
    const target = e.target;

    if (target.closest(`[${this.attrs.ITEM}]`)) {
      const title = target.closest(`[${this.attrs.ITEM}]`);
      const group = title.closest(`[${this.attrs.ACCORDION}]`);
      const isSingle = group.hasAttribute(this.attrs.SINGLE);
      const speed = group.dataset.accordionSpeed
        ? parseInt(group.dataset.accordionSpeed)
        : 500;

      if (!group.querySelectorAll("._slide").length) {
        if (isSingle && !title.classList.contains(this.classes.ACTIVE)) {
          this.hideBody(group);
        }
        title.classList.toggle(this.classes.ACTIVE);
        _slideToggle(title.nextElementSibling, speed);
      }
      e.preventDefault();
    }
  }

  initBody(accordionGroup, hideBody = true) {
    let titles = accordionGroup.querySelectorAll(`[${this.attrs.ITEM}]`);

    if (titles.length) {
      titles = Array.from(titles).filter(
        (item) => item.closest(`[${this.attrs.ACCORDION}]`) === accordionGroup,
      );
      titles.forEach((title) => {
        if (hideBody) {
          title.removeAttribute("tabindex");
          if (!title.classList.contains(this.classes.ACTIVE)) {
            title.nextElementSibling.hidden = true;
          }
        } else {
          title.setAttribute("tabindex", "-1");
          title.nextElementSibling.hidden = false;
        }
      });
    }
  }

  init(accordionItems, matchMedia = false) {
    accordionItems.forEach((accordionGroup) => {
      accordionGroup = matchMedia ? accordionGroup.item : accordionGroup;
      if (matchMedia.matches || !matchMedia) {
        accordionGroup.classList.add(this.classes.INIT);
        this.initBody(accordionGroup);
        accordionGroup.addEventListener("click", this.setActions.bind(this));
      } else {
        accordionGroup.classList.remove(this.classes.INIT);
        this.initBody(accordionGroup, false);
        accordionGroup.removeEventListener("click", this.setActions.bind(this));
      }
    });
  }
}
new Accordion();
