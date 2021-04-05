/*
    Author: Caner ONCEL
    https://isinuzmani.com
    https://egonomik.com
*/
$(document).ready(function(){

    // Options
    toptions = {
        duration  : (toastioptions.duration) ? (toastioptions.duration) : (5000),
        animation : (toastioptions.animation) ? (toastioptions.animation) : ("fade"),
        position : {
            vertical : (toastioptions.position.vertical) ? (toastioptions.position.vertical) : ("top"),
            horizontal : (toastioptions.position.horizontal) ? (toastioptions.position.horizontal) : ("right"),
        }
    }

    // Close
    $(document).on("click", ".toasti-close", function(e){

        e.preventDefault();

        var parent = $(this).parent(".toasti-item");

        if(toptions.animation === "undefined" || toptions.animation === "slide") {
            parent.slideUp(function() {
                toastiAfterClose();
            });
        }

        if(toptions.animation === "fade") {
            parent.fadeOut(function() {
                toastiAfterClose();
            });
        }

        function toastiAfterClose() {
            parent.remove();
            checkToastiContainer();
        }

    });

}); //doc ready end

/* Function: toasti */
function toasti(type="info", title="Info", message, timer = 0) {

    var icon    = "",
        toastid = "toasti-" + Math.floor(Math.random()*90000) + 10000;

    // Info
    if(type === "info") {
        type = "info";
        icon = '<svg version="1.1" class="toasti-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"><g><g id="info"><g><path  d="M10,16c1.105,0,2,0.895,2,2v8c0,1.105-0.895,2-2,2H8v4h16v-4h-1.992c-1.102,0-2-0.895-2-2L20,12H8 v4H10z"></path><circle cx="16" cy="4" r="4"></circle></g></g></g></svg>';
    }

    // Success
    if(type === "success") {
        icon = '<svg version="1.1" class="toasti-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0 c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7 C514.5,101.703,514.499,85.494,504.502,75.496z"></path></g></g></svg>';
    }

    // Warning
    if(type === "warning") {
        icon = '<svg version="1.1" class="toasti-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 301.691 301.691" style="enable-background:new 0 0 301.691 301.691;" xml:space="preserve"><g><polygon points="119.151,0 129.6,218.406 172.06,218.406 182.54,0"></polygon><rect x="130.563" y="261.168" width="40.525" height="40.523"></rect></g></svg>';
    }

    // Error
    if(type === "error") {
        icon = '<svg class="toasti-svg" viewBox="0 0 365.71733 365" xmlns="http://www.w3.org/2000/svg"><g fill="#FFFFFF"><path d="m356.339844 296.347656-286.613282-286.613281c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503906-12.5 32.769532 0 45.25l286.613281 286.613282c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082032c12.523438-12.480468 12.523438-32.75.019532-45.25zm0 0"/><path d="m295.988281 9.734375-286.613281 286.613281c-12.5 12.5-12.5 32.769532 0 45.25l15.082031 15.082032c12.503907 12.5 32.769531 12.5 45.25 0l286.632813-286.59375c12.503906-12.5 12.503906-32.765626 0-45.246094l-15.082032-15.082032c-12.5-12.523437-32.765624-12.523437-45.269531-.023437zm0 0"/></g></svg>';
    }

    var tpl = '<div class="toasti-item toasti-' + type + '" id="' + toastid + '">';

    if(typeof timer !== "undefined" && timer !== 0) {
        tpl += '<div class="toasti-timer"><div class="tosti-bar"></div></div>';
    }

    tpl += '<div class="toasti-icon">' + icon + '</div>' +
        '<div class="toasti-content">' +
        '<div class="toasti-title">' + title + '</div>' +
        '<div class="toasti-message">' + message + '</div>' +
        '</div>' +
        '<div class="toasti-close">' +
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.642 15.642" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 15.642 15.642"><path fill-rule="evenodd" d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061 l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z"></path></svg>' +
        '</div>' +
        '</div>';

    // Check
    if($("#toasti").length < 1) {
        $("body").append('<div id="toasti" class="toasti-' + toptions.position.vertical + '-' + toptions.position.horizontal + '"><div class="toasti-container"></div></div>');
    }

    $("#toasti .toasti-container").append(tpl);

    var elem = $("#" + toastid);

    if(toptions.animation === "undefined" || toptions.animation === "slide") {
        elem.slideDown(function () {
            toastiAfterShow();
        });
    }

    if(toptions.animation === "fade") {
        elem.fadeIn(function () {
            toastiAfterShow();
        });
    }

    // After Showing Toasti
    function toastiAfterShow() {

        // Timer
        if(typeof timer !== "undefined" && timer !== 0) {

            elem.find(".toasti-timer .tosti-bar").animate({
                width: "0%"
            }, timer, function() {

                // Animation complete.
                elem.fadeOut(function() {
                    elem.remove();
                    checkToastiContainer();
                });
            });

        }

    }

    return true;

}

/* Check Parent Container */
function checkToastiContainer() {
    if ($("#toasti .toasti-container").is(':empty')){
        $("#toasti").remove();
    }
}