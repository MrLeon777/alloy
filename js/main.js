// Открытие / скрытие мобильного меню

$(document).ready(function () {
  $(".alloy-header__toggler").on("click", function () {
    let toggle = false;

    $(".alloy-header__nav").toggleClass("alloy-header__nav-active");

    $(".alloy-header__nav").hasClass("alloy-header__nav-active")
      ? (toggle = true)
      : (toggle = false);

    if (toggle) {
      $(".alloy-open").removeClass("alloy-active");
      $(".alloy-close").addClass("alloy-active");
    } else {
      $(".alloy-open").addClass("alloy-active");
      $(".alloy-close").removeClass("alloy-active");
    }
  });
});

// Раскрытие поиска

$(document).ready(function () {
  $(".alloy-header__search a").on("click", function () {
    $(".alloy-header__search-block").toggleClass(
      "alloy-header__search-block_active"
    );
  });

  $(".alloy-header__search-block svg").on("click", function () {
    $(this)
      .parents(".alloy-header__search-block")
      .attr("class", "alloy-header__search-block");
  });
});

// Раскрытие панели смены языков

$(document).ready(function () {
  $(".alloy-header__lang").on("click", function () {
    $(".alloy-header__lang-block").toggleClass(
      "alloy-header__lang-block_active"
    );
  });

  $(".alloy-header__lang-block span").each(function () {
    $(this).on("click", function () {
      $(".alloy-header__lang-main").text($(this).text());
      setTimeout(() => {
        $(".alloy-header__lang-block").removeClass(
          "alloy-header__lang-block_active"
        );
      }, 500);
    });
  });
});

// Переключение блоков описание и характеристики
const alloyProductsBlocks = document.querySelectorAll(".alloy-products__block");
alloyProductsBlocks.forEach((block) => {
  const alloyProductsBlockBtns = block.querySelectorAll(
    ".alloy-products__block-btn"
  );
  const alloyProductsBlockItems = block.querySelectorAll(
    ".alloy-products__block-item"
  );
  alloyProductsBlockBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      alloyProductsBlockItems.forEach((item) => {
        item.classList.toggle("active");
      });
    });
  });
});