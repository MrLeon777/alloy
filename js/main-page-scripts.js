// Слайдер на главном экране
var swiperFirstScreen = new Swiper(".alloy-main-slider", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".alloy-main-slider__next",
    prevEl: ".alloy-main-slider__prev",
  },
});

// Слайдер на странице "Нам Доверяют"
const swiperTrustPage = new Swiper(".alloy-trust-slider", {
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  width: 690,
  draggable: true,
  navigation: {
    nextEl: ".alloy-trust-slider__next",
    prevEl: ".alloy-trust-slider__prev",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      width: 292,
      height: 212,
      slidesPerView: 1,
      spaceBetween: 100,
    },
    375: {
      width: 342,
      height: 266,
      slidesPerView: 1,
    },
    425: {
      width: 392,
      height: 316,
    },
    768: {
      // width: 732,
      // height: 616,
      pagination: {
        el: ".swiper-pagination",
      },
    },
    1024: {
      // width: 690,
      // height: 584,
    },
  },
});

//Слайдеры на странице "Продукты"
const swiperProductCard = new Swiper(".alloy-products__slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".alloy-products__block-characteristic",
    prevEl: ".alloy-advantage-slider__prev",
  },
});

const swiperProductAdvantage = new Swiper(".alloy-advantage__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  draggable: true,
  navigation: {
    nextEl: ".alloy-advantage-slider__next",
    prevEl: ".alloy-advantage-slider__prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const swiperProductWelding = new Swiper(".alloy-welding__slider", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".alloy-product-slider-welding__next",
    prevEl: ".alloy-product-slider-welding__prev",
  },
});
const swiperProductParts = new Swiper(".alloy-parts__slider", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".alloy-product-slider-parts__next",
    prevEl: ".alloy-product-slider-parts__prev",
  },
});
const swiperProductProduction = new Swiper(".alloy-production__slider", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".alloy-product-slider-parts__next",
    prevEl: ".alloy-product-slider-parts__prev",
  },
  draggable: true,
});
const swiperProductTrust = new Swiper(".alloy-trust__slider", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".alloy-product-slider-trust__next",
    prevEl: ".alloy-product-slider-trust__prev",
  },
  draggable: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
  },
});

// Табы в разделе "Каталог"

const tab = document.querySelectorAll(".tab");
const onClickTabNavLink = () => {
  Array.prototype.forEach.call(tab, (e) => {
    const tabNavLinks = e.querySelectorAll(".tab-nav-link");

    Array.prototype.forEach.call(tabNavLinks, (e, tabIndex) => {
      e.addEventListener(
        "click",
        (event) => {
          const tabPanes = e
            .closest(".tab")
            .querySelector(".tab-body").children;
          const tabNavItems = e
            .closest(".tab")
            .querySelector(".tab-nav")
            .querySelectorAll(".tab-nav-item");

          event.preventDefault();

          Array.prototype.forEach.call(tabNavItems, (e, indexNav) => {
            if (indexNav === tabIndex) {
              e.classList.add("active");
            } else {
              e.classList.remove("active");
            }
          });

          Array.prototype.forEach.call(tabPanes, (e, indexPane) => {
            if (indexPane === tabIndex) {
              e.classList.add("active");
            } else {
              e.classList.remove("active");
            }
          });
        },
        false
      );
    });
  });
};

// Init
const init = () => {
  // Tabs Init
  onClickTabNavLink();
};

document.addEventListener("DOMContentLoaded", init);
