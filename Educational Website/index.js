// changing navbar styles on scroll

$(window).on("scroll", function () {
    $("nav").toggleClass("window-scroll", window.scrollY > 0);

});





//show/hide faq answer

$(".faq").on("click", function () {

    $(this).toggleClass("open");





    //change  icon
    if( $(this).find("i").hasClass("fa-plus")){
        $(this).find("i").removeClass("fa-plus");
        $(this).find("i").addClass("fa-minus");
    }
    else{
        $(this).find("i").removeClass("fa-minus");
        $(this).find("i").addClass("fa-plus");
    }
       
}
)


  $("#open-menu-btn").on("click",function (){
    $(".nav__menu").css("display","flex");
    $("#close-menu-btn").css("display","inline-block");
    $("#open-menu-btn").css("display","none");
})

$("#close-menu-btn").on("click",function (){
    $(".nav__menu").css("display","none");
    $("#close-menu-btn").css("display","none");
    $("#open-menu-btn").css("display","inline-block");
})


 

