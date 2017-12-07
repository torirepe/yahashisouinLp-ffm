$(window).load(function(){
  is();
  fa();
  cc();
});

function is(){
  $("#heroSlider ul").bxSlider({
    auto: true,
    mode: "fade"
  })
};


function fa(){
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


var ccs;
function cc(){
  $('[data-cct]').on('click', function(){
    ccs = $(this).closest('[data-ccs]');
    $(this).removeClass('active');
    
    $(this).addClass('active');
    if( ccs.attr('data-ccs') == '1' ) {
      ccs.attr('data-ccs', '2');
    } else {
      ccs.attr('data-ccs', '1');
    }
  });
}