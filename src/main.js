import $ from "jquery";

$(function(){
    $("li:odd").css("backgroundColor","red");
})


// webpack src/main.js -o dist/bundle.js --mode development
// https://blog.csdn.net/hqbootstrap1/article/details/81034435