$("#toggler").click(function () {
  if ($(window).width() <= 500) {
    mobileSize()
  } else {
    openNav()
  }
})

function openNav() {
  document.getElementById("mySidenav").style.cssText =
    "margin-right : 0 ;"
  document.getElementById("page").style.paddingRight = "300px"
}

function closeNav() {
  document.getElementById("mySidenav").style.cssText =
    "margin-right : -300px ; border-left: none"
  document.getElementById("page").style.paddingRight = "0"
}

function mobileSize() {
  document.getElementById("mySidenav").style.cssText =
    "margin-right : 0 ; width : 100vw"
  document.getElementById("page").style.marginRight = "0"
}

// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 10) {
//       document.getElementById("navbar").classList.add("sticky-navbar")
//     } else {
//       document.getElementById("navbar").classList.remove("sticky-navbar")
//     }
//   })
// })



  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#navbar').addClass('header-scrolled');
    } else {
      $('#navbar').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#navbar').addClass('header-scrolled');
  }






const searchFocus = document.getElementById('search-focus');
const keys = [
{ keyCode: 'AltLeft', isTriggered: false },
{ keyCode: 'ControlLeft', isTriggered: false },
];





function myFunction(x) {
  x.classList.toggle("fas");
}






function currentDiv(n) {
  showDivs(slideIndex = n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("productSlides");
  var dots = document.getElementsByClassName("preview");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("opacity-off", "opacity-on");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " opacity-off";
}






document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });

  inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
    }
  });

  dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
  });

  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });

  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("drop-zone--over");
  });
});
/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

  // First time - remove the prompt
  if (dropZoneElement.querySelector(".drop-zone__prompt")) {
    dropZoneElement.querySelector(".drop-zone__prompt").remove();
  }

  // First time - there is no thumbnail element, so lets create it
  if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    dropZoneElement.appendChild(thumbnailElement);
  }

  thumbnailElement.dataset.label = file.name;

  // Show thumbnail for image files
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}






$(document).ready(function () {
    $(function () {
        $("#my_slider").slider({
            min: 10000,
            max: 90000000,
            values: [10000, 90000000],
            range: true,
            slide: function (event, ui) {
                    $('#display_end').val(ui.values[1] + "LE");
                    $('#display_start').val(ui.values[0] + "LE");
            }
        });
    });

})










  // Initiate the venobox plugin
  $(window).on('load', function() {
    $('.venobox').venobox();
  });
  
  // Initiate venobox lightbox
  $(document).ready(function() {
    $('.venobox').venobox();
  });
