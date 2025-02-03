$(document).ready(function () {

  //menu toggle
  $("#menu-btn").click(function () {
    //show menu and overlay
    $("#menu").toggle();
    $("#overlay").toggle();
    //icon bars to x
    $("#menu-btn .fa-bars").toggle();
    $("#menu-btn .fa-xmark").toggle();
    //btn default/active
    $("#menu-btn").toggleClass("btn-active");
  });

  // Hide menu and overlay when a link inside #menu is clicked
  $("#menu a").click(function () {
    $("#menu").hide();
    $("#overlay").hide();
    // Reset icon bars to default state
    $("#menu-btn .fa-bars").show();
    $("#menu-btn .fa-xmark").hide();
    // Remove active class from button
    $("#menu-btn").removeClass("btn-active");
  });

  //smooth scroll anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  //accordion
  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  //remove focus on .btns after click on mobile
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
      button.addEventListener("click", function () {
        this.blur(); // Remove focus state
      });
    });
  });

});