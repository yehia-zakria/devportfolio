$(window).scroll( () => {
    let aboutoffset = $('#about').offset().top;
    let scrollTop = $(window).scrollTop() ;
    if(scrollTop < aboutoffset - 200){
        $('#navbar').css('backgroundColor','transparent');
        $('#scrollup').fadeOut(1000);
    }
    else{
        $('#navbar').css('backgroundColor','rgba(0,0,0,0.6)');
        $('#scrollup').fadeIn(1000);
    }
})

$('#scrollup').click( () => {
    $('html,body').animate({scrollTop:0},1000);
})

// sections

$('a').click( (e) => {
    let aHref = $(e.target).attr('href');
    let sectionOffset = $(aHref).offset().top;
    $('html,body').animate({ scrollTop:sectionOffset}, 1000);
});
// sidebar
$('#sideBar').css('left','-191.001px');
//console.log($('#sideBar').css('left'));
$('#sidebarCog').click( () => {
    let colorBoxWidth = $('#colorBox').innerWidth();
    if($('#sideBar').css('left') == '0px') {
        $('#sideBar').animate({left:`-${colorBoxWidth}`},1000);
        //console.log(colorBoxWidth)
    }
    else {
        $('#sideBar').animate({left:0},1000);
    }
})
colorTarget = $('.colors-span') ;
colorTarget.eq(0).css('backgroundColor','black');
colorTarget.eq(1).css('backgroundColor','green');
colorTarget.eq(2).css('backgroundColor','orange');
colorTarget.eq(3).css('backgroundColor','lightgreen');
colorTarget.eq(4).css('backgroundColor','#09c');

colorTarget.click( (e) => {
    let myColor = $(e.target).css('backgroundColor');
    $('.changeColor').css('color', myColor);
})
// loading sc
$(document).ready( () => {
    $('#loadingScreen').fadeOut(1000 , () => {
        $('body').css('overflow','auto');
    });
        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
        particlesJS.load('particles-js', 'particles.js-master/demo/particles.json', function() {
            console.log('callback - particles.js config loaded');
        });
});
