/* global $ */

console.log('hi');

$('button').click(function(){
    var input = $("input").val()
    fetch("https://api.giphy.com/v1/gifs/search?q=" + input +"&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY")
.then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data)
        console.log(data.data[0].images.original.url)
        $('body').append('<img src=' + data.data[0].images.original.url + '>');
    
      });
   

    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});