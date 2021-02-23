const $contact = $("#contact");
const $dark = $(".dark");
const $servicesButton = $(".services-button");
const $goBack = $(".go-back");
const $submit = $("#contact-submit");
const $button = $(".portfolio");
const $portfolio = $("#portfolio");
const $close = $(".close");


$servicesButton.on("click", function (e) {
    $contact.addClass("clicked");
    $dark.addClass("clicked");
    console.log("test");
});

$goBack.on("click", function (e) {
    $contact.removeClass("clicked");
    $dark.removeClass("clicked");
});

$submit.on("click", function (e) {
    $contact.removeClass("clicked");
    $dark.removeClass("clicked");
});



$close.on("click", function (e) {
    $portfolio.removeClass("clicked");
    $dark.removeClass("clicked");
});

$button.on("click", function (e) {
    $portfolio.addClass("clicked");
    $dark.addClass("clicked");
    console.log("test");
});

/* jQuery for the navigation animation */

var $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
});

/* Code for the toggling of the navbar */

let toggleNavStatus = false;

let toggleNav = function () {
    var $html = $("html");
    var $container = $(".container");
    var $SidebarLi = $(".side-nav ul li");
    let getSidebar = document.querySelector(".navbar-menu");
    let getSidebarUL = document.querySelector(".side-nav ul");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");
    let getSidebarVisibility = document.querySelector(".side-nav");

    if (toggleNavStatus === false) {
        $SidebarLi.addClass("open");
    }

    else if (toggleNavStatus === true) {
        $SidebarLi.removeClass("open");
    }

    if (toggleNavStatus === false) {

        getSidebarVisibility.style.visibility = "visible";

        getSidebarLinks.forEach(function (item, index) {
            item.style.opacity = "1";
            item.style.visibility = "visible";
        });

        getSidebar.style.width = "60%";
        $html.addClass("clicked");
        $container.addClass("clicked");
        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {

        getSidebarLinks.forEach(function (item, index) {
            item.style.opacity = "0";
            item.style.transitionDelay = "0s";
            item.style.visibility = "hidden";
        });
        getSidebar.style.width = "0";
        $html.removeClass("clicked");
        $container.removeClass("clicked");
        toggleNavStatus = false;
    }
}