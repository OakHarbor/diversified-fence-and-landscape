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
