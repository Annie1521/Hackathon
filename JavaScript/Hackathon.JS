
///ONLOAD FUNCTION
showGrades()

function showGrades(){

    var TitleDiv = document.createElement("div");
    TitleDiv.id = "TitleDiv";
    document.body.appendChild(TitleDiv)
    var title = document.createElement("header");
    title.id = "title"
    var titleTxt = document.createTextNode("B.O.S.S.")
    title.appendChild(titleTxt)
    TitleDiv.appendChild(title)
    var subtitle = document.createElement("header");
    subtitle.id = "subtitle"
    var subtitleTxt = document.createTextNode("The Brilliant Ontario Study System.")
    subtitle.appendChild(subtitleTxt)
    TitleDiv.appendChild(subtitle)
    var GradeDiv = document.createElement("div")
    GradeDiv.id = "GradeDiv";
    document.body.appendChild(GradeDiv);

    for(i=9; i<13; i++){

var gradeBtn= document.createElement('button')
var gradeTxt = document.createTextNode('Grade ' + i)
gradeBtn.id = ('Grade' + i)//ID
gradeBtn.appendChild(gradeTxt)
document.body.appendChild(gradeBtn)
    }//end of loop
document.getElementById('Grade9').addEventListener('click', function(){
    grade = 9
    showTopics()
})
document.getElementById('Grade10').addEventListener('click', function(){
    grade = 10
    showTopics()
})
document.getElementById('Grade11').addEventListener('click', function(){
    grade = 11
    showTopics()
})
document.getElementById('Grade12').addEventListener('click', function(){
    grade = 12
    showTopics()
})

}//end of showGrades


function hideGrades(){
    document.body.removeChild(Grade9)
    document.body.removeChild(Grade10)
    document.body.removeChild(Grade11)
    document.body.removeChild(Grade12)
}


//vvvv=======SHOW TOPICS======vvvvvv
function showTopics() {
    hideGrades()
    var backTogrades = document.createElement('button')
    var backTogradesTxt = document.createTextNode('Back To Grades')
    backTogrades.id = 'backToGrades'//ID
    backTogrades.appendChild(backTogradesTxt)
    document.body.appendChild(backTogrades)

    backTogrades.addEventListener('click', function () {
        hideTopics()
        showGrades()
    })
var topics = ['English', 'STEM', 'Art', 'Languages', 'Socal Studies'] 

for (j=0; j<5; j++){
var topicButton = document.createElement('button')
var topicButtonTxt = document.createTextNode(topics[j])
topicButton.id = ('topicButton'+ j)//ID
topicButton.appendChild(topicButtonTxt)
document.body.appendChild(topicButton)
}//end of loop


document.getElementById('topicButton0').addEventListener('click', function(){
    topic = 'English'  
    hideTopics(); showClasses()
})
document.getElementById('topicButton1').addEventListener('click', function(){
   topic = 'STEM'
    hideTopics(); showClasses()
})
document.getElementById('topicButton2').addEventListener('click', function(){
    topic = 'Art'
    hideTopics(); showClasses()
})
document.getElementById('topicButton3').addEventListener('click', function(){
    topic = 'Languages'
    hideTopics(); showClasses()
})
document.getElementById('topicButton4').addEventListener('click', function(){
    topic = 'Socal Studies'
    hideTopics(); showClasses()
})
}//end of showTopics

//^^^^^^=======SHOW TOPICS=====^^^^^^

function hideTopics() {
    document.body.removeChild(topicButton0)
    document.body.removeChild(topicButton1)
    document.body.removeChild(topicButton2)
    document.body.removeChild(topicButton3)
    document.body.removeChild(topicButton4)
    document.body.removeChild(backToGrades)
}

function hideGrades() {
    document.body.removeChild(Grade9)
    document.body.removeChild(Grade10)
    document.body.removeChild(Grade11)
    document.body.removeChild(Grade12)
    document.body.removeChild(TitleDiv)
}


function showClasses(){  
obj = courseInfoObj
if (grade==9){
    info = obj.grade9
}else if (grade==10){
    info = obj.grade10
}else if(grade==11){
    info = obj.grade11
}else if (grade = 12){
    info = obj.grade12
}


if(topic=='English'){
var snippet = info.English
}else if(topic=='STEM'){
var snippet = info.STEM 
}else if(topic=='Art'){
var snippet = info.Arts
}else if(topic=='Languages'){
var snippet = info.Languages
}else if(topic=='Socal Studies'){
var snippet = info.SocialStudies
}

classNum = (Object.keys(snippet).length)




}