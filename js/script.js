/* global $ */

console.log('hi');

$('button').click(function(){
    fetch("<https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY>")
.then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log
      });

    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});