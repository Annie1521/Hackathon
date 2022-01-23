function showVideoAPI(){


    var base = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCGis1a76ZOCV6zRl6SEmTVpt7AzfF0Z8Y&type=video&q='
    var vidTopic = unit.replace(' ', '-');

fetch(base + vidTopic).then(function(data){
return data.json()
}).then(function(result){
var raw = result

for (i=0; i<4; i++){
var video = raw.items[i]
var name = video.snippet.title
var id = video.id.videoId

}})}