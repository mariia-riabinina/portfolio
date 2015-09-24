function switchMenu() {
    var nav = $("#nav");
    var status = nav.css("display");
    if (status == "block") {
        nav.css("display", "none");
    } else {
        nav.css("display", "block");
    }
}