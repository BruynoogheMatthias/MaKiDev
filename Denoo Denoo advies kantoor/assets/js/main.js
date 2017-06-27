/**
 * Created by Matthias Bruynooghe on 14/11/2016.
 */



var init = function () {
    $('.dropdown-submenu>ul').hide();
    $('.dropdown-submenu>a').on("mouseenter", dropdown);
    $('.dropdown-submenu').on("mouseleave", dropup);
    $('.dropdown').on("mouseleave", calldropup);
    $('a').on("click", contentTonen);
  //  $('.dropdown-submenu>a').unbind('mouseenter mouseleave').hover(dropdown)
};

var contentTonen = function(){
    var name = $(this).attr("class");
    if (name != "dropdown-toggle" && name!= "drop"){
        $("section").addClass("hide");

        $("body").find("#" + name).removeClass("hide");
    }


};

var dropdown = function (e) {

    $('.dropdown-submenu>ul').hide();
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();


};

var dropup = function (e) {

    $('.dropdown-submenu>ul').hide();
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();


};

var calldropup = function (e) {
    fulldropup(event)

};

var fulldropup = function (e) {
    $('.dropdown-submenu>ul').hide();
    $(".dropdown.open").removeClass('open');
    e.stopPropagation();
    e.preventDefault();


};


$(document).ready(init);