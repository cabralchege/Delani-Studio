$(document).ready(function () {
    $("#design").click(function () {
        $("p").hide();
        $(".designs").show();
    });

    $('.designs').click(function () {
        $("p").hide();
        $('#design').show();
    });

    $("#devLogo").click(function () {
        $(this).hide();
        $(".dev").show()
    });

    $('.dev').click(function () {
        $(this).hide();
        $('#devLogo').show()
    });

    $("#productLogo").click(function () {
        $(this).hide();
        $('.pro').show();
    });

    $('.pro').click(function () {
        $(this).hide();
        $('#productLogo').show();
    });

    $('.first').hover(function () {
        $('#1').toggle();
    });


    $('.second').hover(function () {
        $('#2').toggle();
    });

    $('.third').hover(function () {
        $('#3').toggle();
    });

    $('.fourth').hover(function () {
        $('#4').toggle();
    });


    $('.fifth').hover(function () {
        $('#5').toggle();
    });

    $('.sixth').hover(function () {
        $('#6').toggle();
    });

    $('.seventh').hover(function () {
        $('#7').toggle();
    });

    $('.eighth').hover(function () {
        $('#8').toggle();
    });

    $(".button").click(function(){
        var name = document.getElementById('mce-EMAIL').value ;
        alert('Hello '+ name +", Thak you for reaching out to us.We will get back to you as soon as possible.")
    });

});