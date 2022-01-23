function showVideoAPI(){

    document.getElementById('player0').style.display = 'block'
    document.getElementById('player1').style.display = 'block'
    document.getElementById('player2').style.display = 'block'
    
    var base = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCGis1a76ZOCV6zRl6SEmTVpt7AzfF0Z8Y&type=video&q='
    var vidtopic1 = 'grade-' + grade
    var vidTopic2 = unit.replace(' ', '-')
    var vidtopic3 = vidtopic1 +'-' + vidTopic2
    var vidTopic = vidtopic3.replace(' ', '-')
    
    console.log(vidTopic)
    
    fetch(base + vidTopic).then(function(data){
    return data.json()
    }).then(function(result){
    var raw = result
    
    var ids = []
    
    for (i=0; i<3; i++){
    var video = raw.items[i]
    var name = video.snippet.title
    ids.push(video.id.videoId)
    }
    
    for(j=0;j<3;j++){
    player = ('player'+j)
    console.log(player)
    document.getElementById(player).src = ('http://www.youtube.com/embed/' + ids[j])
    console.log('http://www.youtube.com/embed/' + ids)
    }
    
    })
    
    }