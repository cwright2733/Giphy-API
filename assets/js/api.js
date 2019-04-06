
// global variabls
var apikey = "OcfpN14mDVfsF15lh0jZGcYhLXQKl1Rz";
var inputVal = input.val().trim();

var queryURL = "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=OcfpN14mDVfsF15lh0jZGcYhLXQKl1Rz&limit=5";
var queryURL1 ='https://api.giphy.com/v1/gifs/search?q=' + inputVal + '&api_key' + apikey + '&limit=5';
var imgBody = $('.img-body');

// request api
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
// get inputs
$(document).ready(function (){
//
var input = $('#input');
var submit = $('#submit');

// on submit request api 
submit.on('click', function(event){
    event.preventDefault();
    imgBody.empty();
     inputVal = input.val().trim();
    getGiphys(inputVal);
    input.val(' ');

});

    function getGiphys() {
        $.ajax({
            url: queryURL1,
            method: "GET"
          }).then(function(response) {
              for( i = 0; i<5; i++){
                console.log(response.data[0].images.downsized.url);
                createBox();
            }
          });
        


    };

function createBox(gifImg) {
    var newimg = $('<img>');
    newimg.attr('src', gifImg);
    newimg.addClass('img-box');
 
    imgBody.append(newimg);
}


}); //End of code