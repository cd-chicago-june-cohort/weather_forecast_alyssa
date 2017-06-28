$(document).ready(function() {
    var weatherUrl;
    $('form').submit(function(event) {
        // your code here (build up your url)
        $('#forecast').html('')
        weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' + $(this).serialize() + '&APPID=1e44b68f7b316dacd3172c5b9dedc70d';
        $.get(weatherUrl, function(res) {
            $('#forecast').append('<h1>' + res.name + '</h1>');
            $('#forecast').append('<h3>Current Temp:&nbsp&nbsp&nbsp' + res.main.temp + '</h3>');
        }, 'json');
        // Clear the search bar
        $('input:text').val('');
        event.preventDefault();
        return false;
    });
});