var originalFooterPaddingTop = parseInt($('#footer').css('padding-top').substr(0, $('#footer').css('padding-top').length - 2));
var originalFooterPaddingBottom = parseInt($('#footer').css('padding-bottom').substr(0, $('#footer').css('padding-bottom').length - 2));
function resizeFooter(){
    
    if($('#footer').position().top + $('#footer').height() + originalFooterPaddingBottom + originalFooterPaddingTop < $(window).height()){
        $('#footer').css('padding-bottom', ($(window).height()-$('#footer').position().top-$('#footer').height()-originalFooterPaddingTop)+'px');
    }else{
        $('#footer').css('padding-bottom', originalFooterPaddingBottom+'px');
    }
}
resizeFooter();
$(window).resize(function(){
    resizeFooter()
});