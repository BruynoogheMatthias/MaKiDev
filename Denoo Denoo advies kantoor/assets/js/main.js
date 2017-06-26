/**
 * Created by Matthias Bruynooghe on 14/11/2016.
 */



var init = function () {
    $('.dropdown-submenu a.drop').on("click", dropdown)
};

var dropdown = function (e) {

        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();


};

$(document).ready(init);