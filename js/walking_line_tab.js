/*
 * Author: Donny R
 * Repo: https://github.com/odonplay/walking-line-tab
 */
(function ($) {
  $.fn.tabLine = function (options) {
    var params = $.extend(
      {
        speed: 500,
        easing: "linear",
      },
      options
    );

    var tabContent = ".td_tab__content";
    var $tabContentFirst = $(tabContent + ":first");
    var $navTarget = $(".td_tab__nav_wrapper li");
    var tabActiveContent = "td_tab__active_content";
    var tabActive = "td_tab__active";
    var line = '<div class="td_tab__line"></>';
    var arrWidth = [];
    var sum;
    var btnWidth;
    var elMargin;

    $tabContentFirst.addClass(tabActiveContent);
    $navTarget.first().addClass(tabActive);
    btnWidth = $navTarget.first().innerWidth();
    $(".td_tab__nav_container").append(line);

    if ($navTarget.first()) {
      $(".td_tab__line").css("width", btnWidth);
    }

    $navTarget.each(function () {
      var value = $(this).outerWidth();
      arrWidth.push(value);
    });

    $navTarget.on("click", function () {
      btnWidth = $(this).innerWidth();
      $(this).addClass(tabActive).siblings().removeClass(tabActive);
      var myIndex = $navTarget.index(this);

      elMargin = parseInt($(this).css("margin-right"));
      sum = 0;
      sum += elMargin * myIndex;

      for (var i = 0; i < myIndex; i++) {
        sum += arrWidth[i];
      }

      var prefix = $(this).attr("id");
      if ($(this).hasClass("td_tab__nav")) {
        $(tabContent).removeClass(tabActiveContent);
        $("#" + prefix + "_content").addClass(tabActiveContent);
      }

      if (myIndex) {
        $(".td_tab__line").animate(
          {
            left: sum + "px",
            width: btnWidth + "px",
          },
          params.speed,
          params.easing
        );
      } else {
        $(".td_tab__line").animate(
          {
            left: sum + "px",
            width: btnWidth + "px",
          },
          params.speed,
          params.easing
        );
      }
    });
  };
})(jQuery);
