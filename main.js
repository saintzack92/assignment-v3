!function(e){e.fn.imageSlider=function(t){let i=e.extend({interval:2e3,slide:"auto"},t);"auto"===i.slide?intervals=window.setInterval(a,i.interval):clearInterval(a,i.interval);let n=0;function a(){e("img").eq(n).hide().removeClass("active"),n=(n+1)%e("img").length,e("img").eq(n).fadeIn().addClass("active")}e("img").hide(),e("img").eq(n).show(),e(".right-button").on("click",function(){a(),window.clearInterval(intervals),"auto"===i.slide&&(intervals=window.setInterval(a,i.interval))}),e(".left-button").on("click",function(){e("img").eq(n).hide().removeClass("active"),n=(n-1)%e("img").length,e("img").eq(n).fadeIn().addClass("active"),window.clearInterval(intervals),"auto"===i.slide&&(intervals=window.setInterval(a,i.interval))})}}(jQuery);