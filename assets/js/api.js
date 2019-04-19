$(document).ready(function () {

  //global variables

  var animeArr = [];

  function popButtons(arrayToUse, ClassToAdd, areaToAppend) {
    $(areaToAppend).empty();
    for (let i = 0; i < arrayToUse.length; i++) {
      console.log(arrayToUse[i]);
      var b = $('<button>');
      b.addClass(ClassToAdd);
      b.attr('data-type', arrayToUse[i]);
      b.text(arrayToUse[i]);
      $(areaToAppend).append(b);

    }
  }

  // empty out out div, add new class name
    $(document).on('click', '.b10', function(){
      
      $('.results').empty();
      $('.b10').removeClass('active');
      $(this).addClass('active');

      var type = $(this).attr('data-type')
    
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            // console.log(response.data);
          
            var results = response.data;
            for (let i = 0; i < results.length; i++) {
              var resultDiv = $('<div class = \'item\'>');
              var rating = results[i].rating;
              // console.log(rating);          
              var p = $('<p>').text('Rating:' + rating);
              // console.log(results[i]);
              var animated = results[i].images.fixed_height.url;
              var still = results[i].images.fixed_height_still.url;
            
              var image = $('<img>');
              image.attr('src',still);
              image.attr('data-still', still);
              image.attr('data-animate', animated);
              image.attr('data-state', 'still');

              image.addClass('imgC');

              resultDiv.append(p);
              resultDiv.append(image);
              $('.results').append(resultDiv);
              
              
            }




          });
          

            $(document).on('click','.imgC', function(){
              var state = $(this).attr('data-state')
              console.log(this);
              
            if (state === 'still'){
              $(this).attr('src', $(this).attr('data-animate'))
              $(this).attr('data-state','animated')
            } else {
                $(this).attr('src', $(this).attr('data-still'))
                $(this).attr('data-state','still')

            }

            });


          // fixed_height
          // fixed_height_still


    })


  $('#submit').on('click', function (event) {
    event.preventDefault();

    var inputS = $('#input').val().trim();

    animeArr.push(inputS);
    popButtons(animeArr, 'b10', '#barea');


  })

  // popButtons(animeArr, 'b10', '#barea');




// var apikey = "OcfpN14mDVfsF15lh0jZGcYhLXQKl1Rz";
// $('#input').val().trim();

// var queryURL = "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=OcfpN14mDVfsF15lh0jZGcYhLXQKl1Rz&limit=5";
// var queryURL1 ='https://api.giphy.com/v1/gifs/search?q=' + inputVal + '&api_key' + apikey + '&limit=5';
// var imgBody = $('.img-body');

// request api








// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//   });
// // get inputs

// //
// var input = $('#input');
// var submit = $('#submit');

// // on submit request api 
// submit.on('click', function(event){
//     event.preventDefault();
//     imgBody.empty();
//      inputVal = input.val().trim();
//     getGiphys(inputVal);
//     input.val(' ');

// });

//     function getGiphys() {
//         $.ajax({
//             url: queryURL1,
//             method: "GET"
//           }).then(function(response) {
//               for( i = 0; i<5; i++){
//                 console.log(response.data[0].images.downsized.url);
//                 createBox();
//             }
//           });
        


//     };

// function createBox(gifImg) {
//     var newimg = $('<img>');
//     newimg.attr('src', gifImg);
//     newimg.addClass('img-box');
 
//     imgBody.append(newimg);
// }


}); //End of code