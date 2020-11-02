function openNav() {
  document.getElementById("mySidenav").style.width = "34.5rem";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
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