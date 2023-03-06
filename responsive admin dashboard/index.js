$("#menu-btn").on("click",function (){
    $("aside").css("display","block");
})
$("#close-btn").on("click",function (){
    $("aside").css("display","none");
})

$(".theme-toggler").on("click",function (){
    $("body").toggleClass("dark-theme-variables");

    $(".theme-toggler span").toggleClass("active");
})