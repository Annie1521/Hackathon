var course = ""
var nospace = ""
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
        GradeDiv.appendChild(gradeBtn)
    }//end of loop
    document.getElementById('Grade9').addEventListener('click', function () {
        grade = 9
        showTopics()
        hideGrades()
    })
    document.getElementById('Grade10').addEventListener('click', function () {
        grade = 10
        showTopics()
        hideGrades()
    })
    document.getElementById('Grade11').addEventListener('click', function () {
        grade = 11
        showTopics()
        hideGrades()
    })
    document.getElementById('Grade12').addEventListener('click', function () {
        grade = 12
        showTopics()
        hideGrades()
    })

}//end of showGrades


function hideGrades() {
    document.body.removeChild(GradeDiv)
    document.body.removeChild(TitleDiv)
}


//vvvv=======SHOW TOPICS======vvvvvv
function showTopics() {
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

    var topics = ['English', 'STEM', 'Art', 'Languages', 'Social Studies']

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
        topic = 'Social Studies'
        hideTopics(); showClasses()
    })
}//end of showTopics


function hideTopics() {
    document.body.removeChild(subjectDiv)
    document.body.removeChild(backDiv)
    document.body.removeChild(TitleDiv1)
}

//vvvv=======SHOW CLASSES======vvvvvv

function showClasses() {
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
        showTopics()
    })

    function hideGrades() {
        document.body.removeChild(Grade9)
        document.body.removeChild(Grade10)
        document.body.removeChild(Grade11)
        document.body.removeChild(Grade12)
        document.body.removeChild(TitleDiv)
    }

    var classesDiv = document.createElement("div");
    classesDiv.id = "classesDiv";
    document.body.appendChild(classesDiv);


    function hideClasses() {
        document.body.removeChild(classesDiv)
        document.body.removeChild(backDiv2)
        document.body.removeChild(TitleDiv2)
    }

    backToTopics.addEventListener('click', function () {
        hideClasses()
        showTopics()
    })

    if (topic == "English" && grade == "12") {
        var EnglishClasses = Object.keys(courseInfoObj.grade12.English)
        for (e = 0; e < EnglishClasses.length; e++) {
            var EnglishButton = document.createElement('button')
            var EnglishButtonTxt = document.createTextNode(EnglishClasses[e])
            EnglishButton.id = ('EnglishButton' + e)//ID
            EnglishButton.appendChild(EnglishButtonTxt)
            classesDiv.appendChild(EnglishButton)
        }//end of loop
    }

    if (topic == "STEM" && grade == "12") {
        var STEMClasses = Object.keys(courseInfoObj.grade12.STEM)
        for (s = 0; s < STEMClasses.length; s++) {
            var STEMButton = document.createElement('button')
            var STEMButtonTxt = document.createTextNode(STEMClasses[s])
            STEMButton.id = ('STEMButton' + s)//ID
            STEMButton.appendChild(STEMButtonTxt)
            classesDiv.appendChild(STEMButton)
        }//end of loop
    }


    if (topic == "Art" && grade == "12") {
        var ArtClasses = Object.keys(courseInfoObj.grade12.Art)
        for (a = 0; a < ArtClasses.length; a++) {
            var ArtButton = document.createElement('button')
            var ArtButtonTxt = document.createTextNode(ArtClasses[a])
            ArtButton.id = ('ArtButton' + a)//ID
            ArtButton.appendChild(ArtButtonTxt)
            classesDiv.appendChild(ArtButton)
        }//end of loop
    }


    if (topic == "Languages" && grade == "12") {
        var LanguagesClasses = Object.keys(courseInfoObj.grade12.Languages)
        for (l = 0; l < LanguagesClasses.length; l++) {
            var LanguagesButton = document.createElement('button')
            var LanguagesButtonTxt = document.createTextNode(LanguagesClasses[l])
            LanguagesButton.id = ('LanguagesButton' + l)//ID
            LanguagesButton.appendChild(LanguagesButtonTxt)
            classesDiv.appendChild(LanguagesButton)
        }//end of loop
    }


    if (topic == "Social Studies" && grade == "12") {
        var SocialStudiesClasses = Object.keys(courseInfoObj.grade12.SocialStudies)
        for (u = 0; u < SocialStudiesClasses.length; u++) {
            var SocialStudiesButton = document.createElement('button')
            var SocialStudiesButtonTxt = document.createTextNode(SocialStudiesClasses[u])
            SocialStudiesButton.id = ('SocialStudiesButton' + u)//ID
            SocialStudiesButton.appendChild(SocialStudiesButtonTxt)
            classesDiv.appendChild(SocialStudiesButton)
        }//end of loop
    }


    for (total = 0; total < 19; total++) {
        document.getElementById('classesDiv').addEventListener('click', function (e) {
            button = e.target.id
            num = button.slice(-1)
            nospace = topic.replace(/\s/g, ''); //removes the spaces from 'Social Studies'
            course = Object.keys(courseInfoObj.grade12[nospace])[num]
            hideClasses()
            showUnits()
        })
    }
}//end of showClasses

function showUnits() {
    var backDiv3 = document.createElement("div3");
    backDiv3.id = "backDiv3";
    document.body.appendChild(backDiv3);

    var backToClasses = document.createElement('button')
    var backToClassesTxt = document.createTextNode('Back')
    backToClasses.id = 'backToClasses'//ID
    backToClasses.appendChild(backToClassesTxt)
    backDiv3.appendChild(backToClasses)

    var TitleDiv3 = document.createElement("div");
    TitleDiv3.id = "TitleDiv3";
    document.body.appendChild(TitleDiv3)

    var title3 = document.createElement("header");
    title3.id = "title3"
    var titleTxt3 = document.createTextNode("Grade 12 " + courseInfoObj.grade12[nospace][course].simpleName + " (" + course + ")")
    title3.appendChild(titleTxt3)
    TitleDiv3.appendChild(title3)

    backToClasses.addEventListener('click', function () {
       hideUnits()
        //showTopics()
        
    })

    var unitDiv = document.createElement("div");
    unitDiv.id = "unitDiv";
    document.body.appendChild(unitDiv);

    if (course == "ENG4U" && grade == "12") {
        var ENG4Uunits = Object.keys(courseInfoObj.grade12.English.ENG4U.sections)
        console.log(ENG4Uunits)
        for (un1 = 0; un1 < ENG4Uunits.length; un1++) {
            var EngUn1Button = document.createElement('button')
            var EngUn1ButtonTxt = document.createTextNode(ENG4Uunits[un1])
            EngUn1Button.id = ('EngUn1ButtonTxt' + un1)//ID
            EngUn1Button.appendChild(EngUn1ButtonTxt)
            unitDiv.appendChild(EngUn1Button)
        }//end of loop
    }

}//end of showUnits


function hideUnits(){
    document.body.removeChild(TitleDiv3)
    document.body.removeChild(backDiv3)
    showClasses()
//===REMOVE UNIT BUTTONS HERE======

}