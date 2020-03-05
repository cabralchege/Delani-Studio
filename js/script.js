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


    $(".four").hover(function () {
        $("#overlay4").show();
      })
      $(".four").mouseleave(function () {
        $("#overlay4").hide();
      })
    
      $(".three").hover(function () {
        $("#overlay3").show();
      })
      $(".three").mouseleave(function () {
        $("#overlay3").hide();
      })
    
    
      $(".two").hover(function () {
        $("#overlay2").show();
      })
      $(".two").mouseleave(function () {
        $("#overlay2").hide();
      })
    
      $(".one").hover(function () {
        $("#overlay1").show();
      })
      $(".one").mouseleave(function () {
        $("#overlay1").hide();
      })
    
      $(".five").hover(function () {
        $("#overlay5").show();
      })
      $(".five").mouseleave(function () {
        $("#overlay5").hide();
      })
    
      $(".six").hover(function () {
        $("#overlay6").show();
      })
      $(".six").mouseleave(function () {
        $("#overlay6").hide();
      })
    
      $(".seven").hover(function () {
        $("#overlay7").show();
      })
      $(".seven").mouseleave(function () {
        $("#overlay7").hide();
      })
    
      $(".eight").hover(function () {
        $("#overlay8").show();
      })
      $(".eight").mouseleave(function () {
        $("#overlay8").hide();
      })
      
      event.preventDefault();
    
    });  
    $(document).ready(function () {
        $('.overlay').mouseover(function () {
            $('#text').show();
        }).mouseout(function () {
            $('#text').hide();
        });
    });
        
    $(document).ready(function () {
        $('#submit').click(function () {
            var Name = $('#Name').val();
            var Email = $('#Email').val();
            var Message = $('#Message');
            var key ='1ad0f8cbb2c752fb6253acf04';
            if (Name == '' || Email == '' || Message == '') {
                alert('Please make sure you have filled in the form correctly!');
            } else {
                alert(' Hi ' + Name + ' We have received your message. Thank you for contacting us.');
            }
    
        });
    });