function openNav() {
  $('#mySidenav > *').hide(0);
  $('#mySidenav').removeClass('in-active'); 
  document.getElementById("mySidenav").style.width = "34.5rem";
  // $('#mySidenav').animate({width: '34.5rem'}, 500);
  setTimeout(function(){
    // console.log("show");
    $('#mySidenav > *').show(0);
  }, 500)

}

function closeNav() {
  // document.getElementById("mySidenav").style.width = "0";
  $('#mySidenav > *').hide(0, function(){
    document.getElementById("mySidenav").style.width = "0";
});
}

$(".button").on("click", function() {

  var $button = $(this);
  var oldValue = $button.parent().find("input").val();

  if ($button.text() == "+") {
	  var newVal = parseFloat(oldValue) + 1;
	} else {
   // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }

  $button.parent().find("input").val(newVal);

});

// submitForms = function(){
//   document.getElementById("instructions-form").submit();
//   document.getElementById("qty-form").submit();
// }

submitForms = function(){
  document.getElementById("instructions-form").submit();
  
  setTimeOut(function() {
    document.getElementById("qty-form").submit()
  }, 5000);
}


$(document).ready(function(){
  $(".product-size-options .single-option").click(function(){
	  $(".product-size-options .single-option").removeClass("selected-custom");
    $(this).addClass("selected-custom");
  });
  $(".style-custom-options .single-option").click(function(){
	  $(".style-custom-options .single-option").removeClass("selected-custom");
    $(this).addClass("selected-custom");
  });
  $(".color-options .single-option").click(function(){
	  $(".color-options .single-option").removeClass("selected");
    $(this).addClass("selected");
  });
  $(".custom-product-option").click(function(){
    $(this).toggleClass("selected-custom");
  });
  $(".custom-product-label").click(function(){
    $(this).parent(".custom-product-container").toggleClass("selected-list",1000);
    });
});