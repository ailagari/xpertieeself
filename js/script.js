function resize(){

}

$(document).ready(function(){
	resize();
});
$(document).ready(function(){
    $('.slick_spot').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
    });
  });


  function down() {
    console.log('Hey there clicker!');
    $('#nav div.content div.right div.respmenu').slideDown("slow", function () {
        $('#menu-icon').hide();
        $('#close').show();
    });
}
function up() {
    console.log('Hey there clicker!');
    $('#nav div.content div.right div.respmenu').slideUp("slow", function () {
        $('#menu-icon').show();
        $('#close').hide();
    });
}