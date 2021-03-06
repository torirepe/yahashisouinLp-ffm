$(window).load(function(){
  indexSlider();
  fullpageAnimation();
});

function indexSlider(){
  $("#heroSlider ul").bxSlider({
    auto: true,
    mode: "fade"
  })
};


function fullpageAnimation(){
  $('[data-container]').fullpage({
    sectionSelector: '[data-section]',
    easingcss3: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    scrollingSpeed: 600,
    scrollOverflow: 'true',
    paddingTop: '70px',
    anchors: ['intro', 'BASKET_baller', 'SOCCER_baller', 'VOLLEY_baller', 'BEACH_baller'],
    //afterResize: function () {},
    //onLeave: function (index, nextIndex, direction) {},
    //afterLoad: function (anchorLink, index) {},
  });
};
