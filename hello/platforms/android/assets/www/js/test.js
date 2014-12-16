
var tool=false;
var pos=false;
var scwidth;
var controlpro;
jQuery(document).ready(function($){
    scwidth=$("#innercontent").width();
    controlpro=scwidth*0.07;
    $('.logo').on( 'touchstart', function ( startEvent ) {
    if(!pos)
    {
        $( "#controlpanel" ).css("left","0");
        $( "#controlpanel" ).transition({ opacity: 0.8},500,'snap');
        $( "#controlcontent" ).transition({ x: controlpro});
        pos=true;
    }
    }
    $ ("#controlpanel").on("touchstart",function(startEvent)
    {
      if(pos)
      {
        $( "#controlcontent" ).transition({ x: -controlpro });
        $( "#controlpanel" ).transition({ opacity: 0},500,'snap',function(){
        $( "#controlpanel" ).css("left","-100%");
        });
        pos=false;
      }
    });
});
function test(){
    var rect = $("#header")[0].getBoundingClientRect();
    alert(rect.width);
    return true;
};
function OrientationChanged()
{
    scwidth=$("#innercontent").width();
    controlpro=scwidth*0.07;
};
window.addEventListener('orientationchange', OrientationChanged);
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}