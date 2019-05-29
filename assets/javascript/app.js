$(document).ready(function () {

    // When the user scrolls the page, execute myFunction 
    window.onscroll = function() {myFunction()};

    // Get the header
    var header = $("#stickyNav");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } 
        
        else {
            header.classList.remove("sticky");
        }
    }


    $(window).resize(function () {
        if (window.innerWidth < 426) {
            $("#introImage").hide();

        }
    });

    $(window).resize(function () {
        if (window.innerWidth > 426) {
            $("#introImage").show();

        }
    });














































});