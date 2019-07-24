// Highlight search Query
var url = window.location.href;
if (url.lastIndexOf("?q=") > 0) {
    // get the index of the parameter, add three (to account for length)
    var stringloc = url.lastIndexOf("?q=") + 3;
    // get the substring (query) and decode
    var searchquery = decodeURIComponent(url.substr(stringloc));
    // regex matches at beginning of line, end of line or word boundary, useful for poetry
    var regex = new RegExp("(?:^|\\b)(" + searchquery + ")(?:$|\\b)", "gim");
    // get, add mark and then set content
    var content = document.getElementById("main").innerHTML;
    document.getElementById("main").innerHTML = content.replace(regex, "<mark>$1</mark>");
}

// Toggle sidebar
(function(document) {
    var toggle = document.querySelector('.sidebar-toggle');
    var sidebar = document.querySelector('#sidebar');
    var checkbox = document.querySelector('#sidebar-checkbox');

    document.addEventListener('click', function(e) {
        var target = e.target;

        if(!checkbox.checked ||
            !sidebar.contains(target) ||
            (target === checkbox || target === toggle)) return;

        checkbox.checked = false;
    }, false);
})(document);

