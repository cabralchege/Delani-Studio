$(Document).ready(function(){
    $(".design_image").click(function() {
        $("#designs_p").show();
        $(".design_image").hide();
        console.log("display paragraph")
    });
    $("#designs_p").click(function(){
        $(".design_image").show();
        $("#designs_p").hide();
    });   
    $(".dev_img").click(function() {
        $("#dev_p").show();
        $(".dev_img").hide();
        console.log("display paragraph")
    });
    $("#dev_p").click(function(){
        $(".dev_img").show();
        $("#dev_p").hide();
    });  
    $(".prod_img").click(function() {
        $("#prod_p").show();
        $(".prod_img").hide();
        console.log("display paragraph")
    });
    $("#prod_p").click(function(){
        $(".prod_img").show();
        $("#prod_p").hide();
    });
    function submitForm(){
        var name = document.getElementById("name").value;
        var email =document.getElementById("email").value;
        var message =document.getElementById("message".value)
    }
    

    
});
