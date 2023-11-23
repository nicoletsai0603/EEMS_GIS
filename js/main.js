//漢堡線選單
function mobile_menu() {
    //漢堡線
    $(".hamburger").click(function() {
        $(".submenu").toggleClass("on");
    });


}
//關閉
function close() {
    //漢堡線
    $(".close_btn").click(function() {
        $(this).parents(".FuZuo").css("display", "none");
    });

}
//alt
function alt_js() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
}
//tab切換
function tab_change() {
    $(".tabRoot .tabArea").hide();
    $(".tabRoot").each(function() {
        $(this).find('.tabArea:eq(0)').show();
        $(this).find(".tabButton:eq(0)").addClass("section");
        var _root = $(this);
        $(this).find(".tabButton").each(function(index) {
            $(this).on('focusin', function() {
                $(_root).find('.tabArea').hide();
                $(_root).find(".tabArea:eq(" + index + ")").stop().fadeIn();
                $(_root).find('.tabButton').removeClass("section");
                $(_root).find(".tabButton:eq(" + index + ")").addClass("section");
            });
        });
    });
}
$(function() {
    mobile_menu(); //選單
    alt_js(); //alt
    close(); //關閉
    tab_change() //tab切換
});

$(".hamburger").on('click', function() {
    $(".submenu").stop().toggle("on");
})
$(".a1").click(function() {
    $(".submenu li a").removeClass("active");
    $(this).addClass("active");
    $("#a1").css("display", "block");
    $("#a1").siblings(".FuZuo").css("display", "none");
})
$(".a2").click(function() {
    $(".submenu li a").removeClass("active");
    $(this).addClass("active");
    $("#a2").css("display", "block");
    $("#a2").siblings(".FuZuo").css("display", "none");
})
$(".a3").click(function() {
    $(".submenu li a").removeClass("active");
    $(this).addClass("active");
    $("#a3").css("display", "block");
    $("#a3").siblings(".FuZuo").css("display", "none");
})
$(".a4").click(function() {
    $(".submenu li a").removeClass("active");
    $(this).addClass("active");
    $("#a4").css("display", "block");
    $("#a4").siblings(".FuZuo").css("display", "none");
})
$(".a5").click(function() {
    $(".submenu li a").removeClass("active");
    $(this).addClass("active");
    $("#a5").css("display", "block");
    $("#a5").siblings(".FuZuo").css("display", "none");
})

$(".pro_detail_title").on('click', function() {
    $(this).toggleClass('active');
    $(this).next().stop().slideToggle();

});

$(".Environmental").on('click', function() {
    $("#FuZuo2").css("display", "block");

});