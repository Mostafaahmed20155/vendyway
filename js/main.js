function openNav() {
  $('#mySidenav > *').hide(0);
  $('#mySidenav').removeClass('in-active');
  document.getElementById("mySidenav").style.width = "34.5rem";
  // $('#mySidenav').animate({width: '34.5rem'}, 500);
  setTimeout(function () {
    // console.log("show");
    $('#mySidenav > *').show(0);
  }, 500)
}

function closeNav() {
  // document.getElementById("mySidenav").style.width = "0";
  $('#mySidenav > *').hide(0, function () {
    document.getElementById("mySidenav").style.width = "0";
  });
}

$(".button").on("click", function () {

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

//Caresoul in premium theme

// TweenLite.defaultEase = Linear.easeNone;

// var picker = document.querySelector(".picker");
// var cells = document.querySelectorAll(".cell");
// var proxy = document.createElement("div");

// var cellWidth = 450;
// //var rotationX = 90;

// var numCells = cells.length;
// var cellStep = 1 / numCells;
// var wrapWidth = cellWidth * numCells;

// var baseTl = new TimelineMax({ paused: true });

// TweenLite.set(picker, {
//   //perspective: 1100,
//   width: wrapWidth - cellWidth
// });

// for (var i = 0; i < cells.length; i++) {  
//   initCell(cells[i], i);
// }

// var animation = new TimelineMax({ repeat: -1, paused: true })
//   .add(baseTl.tweenFromTo(1, 2))

// var draggable = new Draggable(proxy, {  
//   // allowContextMenu: true,  
//   type: "x",
//   trigger: picker,
//   throwProps: true,
//   onDrag: updateProgress,
//   onThrowUpdate: updateProgress,
//   snap: { 
//     x: snapX
//   },
//   onThrowComplete: function(){
//     console.log("onThrowComplete");
//     //TODO: animation that inject selected card title
//   }
// });

// function snapX(x) {
//   return Math.round(x / cellWidth) * cellWidth;
// }

// function updateProgress() {  
//   animation.progress(this.x / wrapWidth);
// }

// function initCell(element, index) {
  
//   TweenLite.set(element, {
//     width: cellWidth,
//     scale: 0.6,
//     //rotationX: rotationX,
//     x: -cellWidth
//   });
  
//   var tl = new TimelineMax({ repeat: 1 })
//     .to(element, 1, { x: "+=" + wrapWidth/*, rotationX: -rotationX*/ }, 0)
//     .to(element, cellStep, { color: "#009688", scale: 1, repeat: 1, yoyo: true }, 0.5 - cellStep)
  
//   baseTl.add(tl, i * -cellStep);
// }


// submitForms = function(){
//   document.getElementById("instructions-form").submit();
//   document.getElementById("qty-form").submit();
// }

submitForms = function () {
  document.getElementById("instructions-form").submit();

  setTimeOut(function () {
    document.getElementById("qty-form").submit()
  }, 5000);
}


$(document).ready(function () {
  $(".product-size-options .single-option").click(function () {
    $(".product-size-options .single-option").removeClass("selected-custom");
    $(this).addClass("selected-custom");
  });
  $(".product-size .product-size-options .single-option").click(function () {
    $(".product-size .product-size-options .single-option").removeClass("premium-selected-custom");
    $(this).addClass("premium-selected-custom");
  });
  $(".style-custom-options .single-option").click(function () {
    $(".style-custom-options .single-option").removeClass("selected-custom");
    $(this).addClass("selected-custom");
  });
  
  $(".product-detials .product-summary .colors-selection .premium-color").click(function () {
    $(".product-detials .product-summary .colors-selection .premium-color").removeClass("premium-color-selected");
    $(this).addClass("premium-color-selected");
  });
  $(".custom-product-option").click(function () {
    $(this).toggleClass("selected-custom");
  });
  $(".custom-product-label").click(function () {
    $(this).parent(".custom-product-container").toggleClass("selected-list", 1000);
  });
  $(".single-option").click(function () {
    $(this).find("input").prop("checked", true);
    // $("input[name=size]").val($(this).find("input").attr("value"))
    // $("input[name=size]").removeAttr("checked")
    // $(this).find("input").attr("checked","checked");
    // console.log($(this).find("input").attr("value"))
  });
  $('.custom-product-option').click(function() {
    $(this).find("input").prop("checked", !$(this).find("input").prop("checked") );
  })
});


$(document).ready(function(){
  $('#addtocart').on('click',function(){
    
    var button = $(this);
    var cart = $('#cart');
    var cartTotal = cart.attr('data-totalitems');
    var newCartTotal = parseInt(cartTotal) + 1;
    
    button.addClass('sendtocart');
    setTimeout(function(){
      button.removeClass('sendtocart');
      cart.addClass('shake').attr('data-totalitems', newCartTotal);
      setTimeout(function(){
        cart.removeClass('shake');
      },500)
    },1000)
  })
})