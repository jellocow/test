var venueObj={};

function search(){
$.getJSON('https://api.foursquare.com/v2/venues/search?ll=44.3,37.2&near='+$('#locationTxt').val()+'&oauth_token=QLG3JFV1VK2JGZ2E0S3YUAXFLSCOFW0VYT43SHSB5EGBWOKD&v=20170219', function(data) {
  venueObj=data;
  console.log(venueObj)
});
}