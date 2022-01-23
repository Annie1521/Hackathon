
///ONLOAD FUNCTION
showGrades()

function showGrades() {

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

    for (i = 9; i < 13; i++) {

        var gradeBtn = document.createElement('button')
        var gradeTxt = document.createTextNode('Grade ' + i)
        gradeBtn.id = ('Grade' + i)//ID
        gradeBtn.appendChild(gradeTxt)
        document.body.appendChild(gradeBtn)
    }//end of loop
    document.getElementById('Grade9').addEventListener('click', function () {
        grade = 9
        showTopics()
    })
    document.getElementById('Grade10').addEventListener('click', function () {
        grade = 10
        showTopics()
    })
    document.getElementById('Grade11').addEventListener('click', function () {
        grade = 11
        showTopics()
    })
    document.getElementById('Grade12').addEventListener('click', function () {
        grade = 12
        showTopics()
    })

}//end of showGrades


function hideGrades() {
    document.body.removeChild(Grade9)
    document.body.removeChild(Grade10)
    document.body.removeChild(Grade11)
    document.body.removeChild(Grade12)
    document.body.removeChild(TitleDiv)
}


//vvvv=======SHOW TOPICS======vvvvvv
function showTopics() {
    hideGrades()
    var backDiv = document.createElement("div");
    backDiv.id = "backDiv";
    document.body.appendChild(backDiv);
    var backTogrades = document.createElement('button')
    var backTogradesTxt = document.createTextNode('Back')
    backTogrades.id = 'backToGrades'//ID
    backTogrades.appendChild(backTogradesTxt)
    document.body.appendChild(backTogrades)
    backDiv.appendChild(backTogrades)
    var TitleDiv1 = document.createElement("div");
    TitleDiv1.id = "TitleDiv1";
    document.body.appendChild(TitleDiv1)
    var title1 = document.createElement("header");
    title1.id = "title1"
    var titleTxt1 = document.createTextNode("Grade " + grade)
    title1.appendChild(titleTxt1)
    TitleDiv1.appendChild(title1)

    backTogrades.addEventListener('click', function () {
        hideTopics()
        showGrades()
    })

    var subjectDiv = document.createElement("div");
    subjectDiv.id = "subjectDiv";
    document.body.appendChild(subjectDiv);

    var topics = ['English', 'STEM', 'Art', 'Languages', 'Socal Studies']

    for (j = 0; j < 5; j++) {
        var topicButton = document.createElement('button')
        var topicButtonTxt = document.createTextNode(topics[j])
        topicButton.id = ('topicButton' + j)//ID
        topicButton.appendChild(topicButtonTxt)
        subjectDiv.appendChild(topicButton)
    }//end of loop

    document.getElementById('topicButton0').addEventListener('click', function () {
        topic = 'English'
        hideTopics(); showClasses()
    })
    document.getElementById('topicButton1').addEventListener('click', function () {
        topic = 'STEM'
        hideTopics(); showClasses()
    })
    document.getElementById('topicButton2').addEventListener('click', function () {
        topic = 'Art'
        hideTopics(); showClasses()
    })
    document.getElementById('topicButton3').addEventListener('click', function () {
        topic = 'Languages'
        hideTopics(); showClasses()
    })
    document.getElementById('topicButton4').addEventListener('click', function () {
        topic = 'Socal Studies'
        hideTopics(); showClasses()
    })
}//end of showTopics


function hideTopics() {
    document.body.removeChild(subjectDiv)
    document.body.removeChild(backDiv)
    document.body.removeChild(TitleDiv1)
}

//vvvv=======SHOW TOPICS======vvvvvv

 function showClasses() {
//     hideTopics()
    var backDiv2 = document.createElement("div");
    backDiv2.id = "backDiv2";
    document.body.appendChild(backDiv2);
    var backToTopics = document.createElement('button')
    var backToTopicsTxt = document.createTextNode('Back')
    backToTopics.id = 'backToTopics'//ID
    backToTopics.appendChild(backToTopicsTxt)
    backDiv2.appendChild(backToTopics)

    var TitleDiv2 = document.createElement("div");
    TitleDiv2.id = "TitleDiv2";
    document.body.appendChild(TitleDiv2)
    var title2 = document.createElement("header");
    title2.id = "title2"
    var titleTxt2 = document.createTextNode(topic)
    title2.appendChild(titleTxt2)
    TitleDiv2.appendChild(title2)

    backToTopics.addEventListener('click', function () {
        hideClasses()
        //showTopics()
    })
   
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

function showClasses(){

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



    var classesDiv = document.createElement("div");
    classesDiv.id = "classesDiv";
    document.body.appendChild(classesDiv);

    //GET LIST OF COURSES FROM OBJECT

    if (topic == "English" && grade == "12") {
        var EnglishClasses = Object.keys(courseInfoObj.grade12.English)
        for (e = 0; e<EnglishClasses.length ; e++) {
            var EnglishButton = document.createElement('button')
            var EnglishButtonTxt = document.createTextNode(EnglishClasses[e])
            EnglishButton.id = ('classButton' + e)//ID
            EnglishButton.appendChild(EnglishButtonTxt)
            classesDiv.appendChild(EnglishButton)
        }//end of loop
    }

    if (topic == "STEM" && grade == "12") {
        var STEMClasses = Object.keys(courseInfoObj.grade12.STEM)
        for (e = 0; e<STEMClasses.length ; e++) {
            var STEMButton = document.createElement('button')
            var STEMButtonTxt = document.createTextNode(STEMClasses[e])
            STEMButton.id = ('classButton' + e)//ID
            STEMButton.appendChild(STEMButtonTxt)
            classesDiv.appendChild(STEMButton)
        }//end of loop
    }


    if (topic == "Art" && grade == "12") {
        var EnglishClasses = Object.keys(courseInfoObj.grade12.English)
        console.log(EnglishClasses)
        console.log(EnglishClasses.length)
        for (e = 0; e<EnglishClasses.length ; e++) {
            var EnglishButton = document.createElement('button')
            var EnglishButtonTxt = document.createTextNode(EnglishClasses[e])
            EnglishButton.id = ('classButton' + e)//ID
            EnglishButton.appendChild(EnglishButtonTxt)
            classesDiv.appendChild(EnglishButton)
        }//end of loop
    }


    if (topic == "Languages" && grade == "12") {
        var EnglishClasses = Object.keys(courseInfoObj.grade12.English)
        console.log(EnglishClasses)
        console.log(EnglishClasses.length)
        for (e = 0; e<EnglishClasses.length ; e++) {
            var EnglishButton = document.createElement('button')
            var EnglishButtonTxt = document.createTextNode(EnglishClasses[e])
            EnglishButton.id = ('classButton' + e)//ID
            EnglishButton.appendChild(EnglishButtonTxt)
            classesDiv.appendChild(EnglishButton)
        }//end of loop
    }


    if (topic == "Social Studies" && grade == "12") {
        var EnglishClasses = Object.keys(courseInfoObj.grade12.English)
        console.log(EnglishClasses)
        console.log(EnglishClasses.length)
        for (e = 0; e<EnglishClasses.length ; e++) {
            var EnglishButton = document.createElement('button')
            var EnglishButtonTxt = document.createTextNode(EnglishClasses[e])
            EnglishButton.id = ('classButton' + e)//ID
            EnglishButton.appendChild(EnglishButtonTxt)
            classesDiv.appendChild(EnglishButton)
        }//end of loop
    }


//     // document.getElementById('topicButton0').addEventListener('click', function () {
//     //     topic = 'English'
//     //     hideTopics(); showClasses()
//     // })
//     // document.getElementById('topicButton1').addEventListener('click', function () {
//     //     topic = 'STEM'
//     //     hideTopics(); showClasses()
//     // })
//     // document.getElementById('topicButton2').addEventListener('click', function () {
//     //     topic = 'Art'
//     //     hideTopics(); showClasses()
//     // })
//     // document.getElementById('topicButton3').addEventListener('click', function () {
//     //     topic = 'Languages'
//     //     hideTopics(); showClasses()
//     // })
//     // document.getElementById('topicButton4').addEventListener('click', function () {
//     //     topic = 'Socal Studies'
//     //     hideTopics(); showClasses()
//     // })
 }//end of showTopics


function hideClasses() {
    //remove classes
}
}