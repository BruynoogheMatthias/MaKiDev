/**
 * Created by Matthias Bruynooghe on 14/11/2016.
 */



var init = function () {
    $('.dropdown-submenu>ul').hide();
    $('.dropdown-submenu>a').on("mouseenter", dropdown);
    $('.dropdown-submenu').on("mouseleave", dropup);
    $('.dropdown').on("mouseleave", calldropup);
  //  $('.dropdown-submenu>a').unbind('mouseenter mouseleave').hover(dropdown)
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