var deviceWidth
setHtmlFontSize()

if (window.addEventListener) {
  window.addEventListener('resize', function () {
      setHtmlFontSize()
  }, false)
}
function setHtmlFontSize () {
  // 1366是设计稿的宽度，当大于1366时采用1366宽度，比例也是除以13.66
    deviceWidth = document.documentElement.clientWidth > 1366 ? 1366 : document.documentElement.clientWidth
    document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + deviceWidth / 13.66 + 'px !important'
}
(function () {
  new WOW().init();
	$('.dropdown-toggle').dropdown();
})();
$("#scorllTop").click(function(){
  $("html,body").animate({
      scrollTop: 0
  }, 500);
})
function goToLink(){
		window.location.href="./index.html"
}
$(".imgText li").mouseover(function(event){
	$(this).find(".imgText-text").addClass("fadeInDown").css({ "opacity": 1,"-webkit-transform": "translate3d(0, 0, 0)","transform":"translate3d(0,0, 0)" })

})
$(".imgText li").mouseout(function(event){
	$(this).find(".imgText-text").removeClass("fadeInDown").css({ "opacity": 0,"-webkit-transform": "translate3d(0, -100%, 0)","transform":"translate3d(0,-100%, 0)" })

})