$(function () {
    // focus on search input with '/' key.
    $("body").on("keyup", function (e) {
        e.stopPropagation();
        var slashKeys = [47, 111, 191];
        if (slashKeys.some(function (value) { return e.keyCode == value })) {
            $("#search").focus();
        }
    });

    // add `target="_blank"` into all outer links.
    var host = document.location.host;
    $("a[href]").each(function() {
        var re = new RegExp(host, "g");
        if ($(this).attr("href").match(/\/\//) && !$(this).attr("href").match(re)) {
            $(this).attr("target", "_blank");
        }
    });

    // center and linkable all images.
    var $images = $("article img:not(.emoji, .eye-catch)");
    $images.closest("p").css("text-align", "center");
    $images.each(function () {
        var imgUrl = $(this).attr("src");
        var $a = $("<a>").attr("href", imgUrl).attr("target", "_blank");
        $(this).wrap($a);
    });

    // stick aside.
    var topSpacing = $(".site-aside").css("padding-top").replace(/px/, "");
    $(".site-aside .sticky").sticky({
        topSpacing: parseInt(topSpacing)
    });

    // social buttons.
    $(".share-buttons").each(function () {
        $(this).easySocialButtons({
            url: $(this).data("url"),
            pageTitle: $(this).data("title"),
            orders: ["twitter", "hatebu", "facebook", "googleplus"],
            waitCounter: '<span>Wait...</span>'
        });
    });
  
    (function(d,id) {
       if (d.getElementById(id)) return;
       var s = d.createElement('script');
       var c = d.getElementsByTagName('script')[0];
       s.type = 'text/javascript';
       s.async = true;
       s.src = 'https://widgets.hopwork.com/1.0.0/js/sdk.wgt.min.js';
       c.parentNode.insertBefore(s, c);
    })(document,'hopwork-sdkjs-wgt');
  
});
