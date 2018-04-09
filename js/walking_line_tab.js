/*
 * Author: Donny R
 * Repo: https://github.com/odonplay/walking-line-tab
 */
(function( $ ) {
  $.fn.tabLine = function(options) {

  var plugin = $(this);

  plugin.addClass("td_tab__nav_container");
  plugin.children("ul").addClass("td_tab__nav_wrapper");
  
  var params = $.extend({
    speed: 500,
    easing: "linear",
  }, options);
     
  var tabContent = ".td_tab__content";
  var $tabContentFirst = $(tabContent + ":first");
  var $navTarget = plugin.children(".td_tab__nav_wrapper").children("li");
  var tabActiveContent = "td_tab__active_content";
  var tabActive = 'td_tab__active';
  var line = 'td_tab__line';
  var lineEl = '<div class='+line+'></>';
  var arrWidth  = [];
  var sum;
  var btnWidth;
  var elMargin;

  if(plugin.find('.'+line).length === 0)
    plugin.append(lineEl);

  plugin.init = function() {
  
    $tabContentFirst.addClass(tabActiveContent);
    $navTarget.first().addClass(tabActive);
    btnWidth = $navTarget.first().innerWidth();
    
    if($navTarget.first()) {
      $('.'+line).css('width',btnWidth);
    }
  }

  plugin.getLinePosition = function() {
    arrWidth  = [];
    $navTarget.each(function () {
      var value = $(this).outerWidth();
      arrWidth.push(value);
    });
  }

  plugin.setTabLine = function(element) {
    btnWidth = $(element).innerWidth();
    var myIndex = $navTarget.index(element);
    
    elMargin = parseInt($(element).css('margin-right'));
    sum = 0;
    sum+=(elMargin * myIndex);
    
    for (var i = 0 ; i < myIndex; i++) {
      sum+= arrWidth[i];
    }
  
    var prefix = $(element).attr("id");
    if($(element).hasClass("td_tab__nav")){
      $(tabContent).removeClass(tabActiveContent);
      $('#'+ prefix + '_content').addClass(tabActiveContent);
    }
  }

  plugin.onClickEvent = function() {
    $navTarget.on('click', function () {
      var isActive = $(this).hasClass(tabActive);
      if(!isActive) {
        $(this).addClass(tabActive).siblings().removeClass(tabActive);
        plugin.setTabLine($(this));
      
        $("."+line).animate({
          left: sum + "px",
          width: btnWidth + 'px'
        },params.speed, params.easing);
      }
    }); 
  }

  plugin.init();
  plugin.getLinePosition();
  plugin.onClickEvent();

  function afterResize(){
    plugin.getLinePosition();
    var activeTarget = plugin.children(".td_tab__nav_wrapper").children("li." + tabActive);
    plugin.setTabLine($(activeTarget));
    $("."+line).css({
      left: sum + "px",
      width: btnWidth + 'px',
      transition: 'all 0.1s ease-in'
    });

    setTimeout(function(e) {
      $("."+line).css({
        transition: ''
      });
    }, 200);
  }

  var resizeId;
  $(window).on("resize", function(){
    clearTimeout(resizeId);
    resizeId = setTimeout(afterResize, 200);
  });
}
}( jQuery ));
