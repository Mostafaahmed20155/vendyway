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

const singleOption1 = document.getElementById('single-option-1');
const singleOption2 = document.getElementById('single-option-2');
const singleOption3 = document.getElementById('single-option-3');
const singleOption4 = document.getElementById('single-option-4');

const styleOption1 = document.getElementById('style-1');
const styleOption2 = document.getElementById('style-2');
const styleOption3 = document.getElementById('style-3');
const styleOption4 = document.getElementById('style-4');

singleOption1.addEventListener('click', () => {
  singleOption1.classList.toggle('selected-custom');
})
singleOption2.addEventListener('click', () => {
  singleOption2.classList.toggle('selected-custom');
})
singleOption3.addEventListener('click', () => {
  singleOption3.classList.toggle('selected-custom');
})
singleOption4.addEventListener('click', () => {
  singleOption4.classList.toggle('selected-custom');
})

styleOption1.addEventListener('click', () => {
  styleOption1.classList.toggle('selected-custom');
})
styleOption2.addEventListener('click', () => {
  styleOption2.classList.toggle('selected-custom');
})
styleOption3.addEventListener('click', () => {
  styleOption3.classList.toggle('selected-custom');
})
styleOption4.addEventListener('click', () => {
  singleOption4.classList.toggle('selected-custom');
})