var course = "" //example: ENG4U
var topic = "" //example: Social Studies
var nospace = "" //example: SocialStudies
var unit = "" //example: Poetry
var UnitNoSpace = "" //example: IntrotoENG4U
///ONLOAD FUNCTION
showGrades()

var resourceDiv=document.createElement('div')
resourceDiv.id="resourceDiv"
document.body.appendChild(resourceDiv)
//base function use for each course
function CourseName(description,Rlink){

    var nameDiv=document.createElement('div')
    nameDiv.id='nameDiv'
    resourceDiv.appendChild(nameDiv)

    var a=document.createElement('a')
    a.id='a'
    nameDiv.appendChild(a)

    var link=document.createTextNode(description)
    a.appendChild(link)
    a.href = Rlink; 

    

}
var ENG4U= {
    IntrotoENG4U:['How to read academic writing','https://libguides.usc.edu/evaluate/scholarlyarticles'],
    LiteraryCriticism: null
    ,Poetry:['Poetry guide','http://www.teachenglishtoday.org/wp-content/uploads/2018/07/Notes-on-Grade-12-HL-poems-2.pdf'],
    EssayAnalysis:['Tips for analysis Essays','https://sites.google.com/site/fungeng4u/tips-for-writing-a-literary-analysis-essay '],
    NovelStudy:['How to read Shakespeare','https://www.bardweb.net/content/ac/shakesreader.html'],
    ISU:['ISU book ideas','http://iss.scdsb.on.ca/Documents/Library%20Documents/Senior-ISU-Book-ListWEB.pdf '],


}

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
        hideTopics();
        if (grade == 12) {
            showClasses()
        }
        if (grade == 11) {
            showClassesEleven()
        }
    })
    document.getElementById('topicButton1').addEventListener('click', function () {
        topic = 'STEM'
        hideTopics();
        if (grade == 12) {
            showClasses()
        }
        if (grade == 11) {
            showClassesEleven()
        }
    })
    document.getElementById('topicButton2').addEventListener('click', function () {
        topic = 'Art'
        hideTopics();
        if (grade == 12) {
            showClasses()
        }
        if (grade == 11) {
            showClassesEleven()
        }
    })
    document.getElementById('topicButton3').addEventListener('click', function () {
        topic = 'Languages'
        hideTopics();
        if (grade == 12) {
            showClasses()
        }
        if (grade == 11) {
            showClassesEleven()
        }
    })
    document.getElementById('topicButton4').addEventListener('click', function () {
        topic = 'Social Studies'
        hideTopics();
        if (grade == 12) {
            showClasses()
        }
        if (grade == 11) {
            showClassesEleven()
        }
    })
}


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


    document.getElementById('classesDiv').addEventListener('click', function (e) {
        button = e.target.id
        num = button.slice(-1)
        nospace = topic.replace(/\s/g, ''); //removes the spaces from 'Social Studies'
        course = Object.keys(courseInfoObj.grade12[nospace])[num]
        hideClasses()
        showUnits()
    })


    function hideClasses() {
        var Child = document.getElementById("classesDiv")
        Child.parentNode.removeChild(Child)
        document.body.removeChild(backDiv2)
        document.body.removeChild(TitleDiv2)
    }
}//end of showClasses

//vvvv=======SHOW UNITS======vvvvvv
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
        showClasses()
    })

    var unitDiv = document.createElement("div");
    unitDiv.id = "unitDiv";
    document.body.appendChild(unitDiv);

    if (course == "ENG4U" && grade == "12") {
        var ENG4Uunits = Object.values(courseInfoObj.grade12.English.ENG4U.sections)
        for (un1 = 0; un1 < ENG4Uunits.length; un1++) {
            var EngUn1Button = document.createElement('button')
            var EngUn1ButtonTxt = document.createTextNode(ENG4Uunits[un1])
            EngUn1Button.id = ('EngUn1ButtonTxt' + un1)//ID
            EngUn1Button.appendChild(EngUn1ButtonTxt)
            unitDiv.appendChild(EngUn1Button)
        }//end of loop
    }
    if (course == "ETS4U" && grade == "12") {
        var ETS4Uunits = Object.values(courseInfoObj.grade12.English.ETS4U.sections)
        for (un11 = 0; un11 < ETS4Uunits.length; un11++) {
            var EngUn2Button = document.createElement('button')
            var EngUn2ButtonTxt = document.createTextNode(ETS4Uunits[un11])
            EngUn2Button.id = ('EngUn2ButtonTxt' + un11)//ID
            EngUn2Button.appendChild(EngUn2ButtonTxt)
            unitDiv.appendChild(EngUn2Button)
        }//end of loop
    }
    if (course == "EWC4U" && grade == "12") {
        var EWC4Uunits = Object.values(courseInfoObj.grade12.English.EWC4U.sections)
        for (un12 = 0; un12 < EWC4Uunits.length; un12++) {
            var EngUn3Button = document.createElement('button')
            var EngUn3ButtonTxt = document.createTextNode(EWC4Uunits[un12])
            EngUn3Button.id = ('EngUn3ButtonTxt' + un12)//ID
            EngUn3Button.appendChild(EngUn3ButtonTxt)
            unitDiv.appendChild(EngUn3Button)
        }//end of loop
    }
    if (course == "MCV4U" && grade == "12") {
        var MCV4Uunits = Object.values(courseInfoObj.grade12.STEM.MCV4U.sections)
        for (un2 = 0; un2 < MCV4Uunits.length; un2++) {
            var STEMUn1Button = document.createElement('button')
            var STEMUn1ButtonTxt = document.createTextNode(MCV4Uunits[un2])
            STEMUn1Button.id = ('STEMUn1ButtonTxt' + un2)//ID
            STEMUn1Button.appendChild(STEMUn1ButtonTxt)
            unitDiv.appendChild(STEMUn1Button)
        }//end of loop
    }
    if (course == "MHF4U" && grade == "12") {
        var MHF4Uunits = Object.values(courseInfoObj.grade12.STEM.MHF4U.sections)
        for (un21 = 0; un21 < MHF4Uunits.length; un21++) {
            var STEMUn2Button = document.createElement('button')
            var STEMUn2ButtonTxt = document.createTextNode(MHF4Uunits[un21])
            STEMUn2Button.id = ('STEMUn2ButtonTxt' + un21)//ID
            STEMUn2Button.appendChild(STEMUn2ButtonTxt)
            unitDiv.appendChild(STEMUn2Button)
        }//end of loop
    }
    if (course == "MDM4U" && grade == "12") {
        var MDM4Uunits = Object.values(courseInfoObj.grade12.STEM.MDM4U.sections)
        for (un22 = 0; un22 < MDM4Uunits.length; un22++) {
            var STEMUn3Button = document.createElement('button')
            var STEMUn3ButtonTxt = document.createTextNode(MDM4Uunits[un22])
            STEMUn3Button.id = ('STEMUn3ButtonTxt' + un22)//ID
            STEMUn3Button.appendChild(STEMUn3ButtonTxt)
            unitDiv.appendChild(STEMUn3Button)
        }//end of loop
    }
    if (course == "SBI4U" && grade == "12") {
        var SBI4Uunits = Object.values(courseInfoObj.grade12.STEM.SBI4U.sections)
        for (un23 = 0; un23 < SBI4Uunits.length; un23++) {
            var STEMUn4Button = document.createElement('button')
            var STEMUn4ButtonTxt = document.createTextNode(SBI4Uunits[un23])
            STEMUn4Button.id = ('STEMUn4ButtonTxt' + un23)//ID
            STEMUn4Button.appendChild(STEMUn4ButtonTxt)
            unitDiv.appendChild(STEMUn4Button)
        }//end of loop
    }
    if (course == "SCH4U" && grade == "12") {
        var SCH4Uunits = Object.values(courseInfoObj.grade12.STEM.SCH4U.sections)
        for (un24 = 0; un24 < SCH4Uunits.length; un24++) {
            var STEMUn5Button = document.createElement('button')
            var STEMUn5ButtonTxt = document.createTextNode(SCH4Uunits[un24])
            STEMUn5Button.id = ('STEMUn5ButtonTxt' + un24)//ID
            STEMUn5Button.appendChild(STEMUn5ButtonTxt)
            unitDiv.appendChild(STEMUn5Button)
        }//end of loop
    }
    if (course == "SPH4U" && grade == "12") {
        var SPH4Uunits = Object.values(courseInfoObj.grade12.STEM.SPH4U.sections)
        for (un25 = 0; un25 < SPH4Uunits.length; un25++) {
            var STEMUn6Button = document.createElement('button')
            var STEMUn6ButtonTxt = document.createTextNode(SPH4Uunits[un25])
            STEMUn6Button.id = ('STEMUn6ButtonTxt' + un25)//ID
            STEMUn6Button.appendChild(STEMUn6ButtonTxt)
            unitDiv.appendChild(STEMUn6Button)
        }//end of loop
    }
    if (course == "TGJ4M" && grade == "12") {
        var TGJ4Munits = Object.values(courseInfoObj.grade12.STEM.TGJ4M.sections)
        for (un26 = 0; un26 < TGJ4Munits.length; un26++) {
            var STEMUn7Button = document.createElement('button')
            var STEMUn7ButtonTxt = document.createTextNode(TGJ4Munits[un26])
            STEMUn7Button.id = ('STEMUn7ButtonTxt' + un26)//ID
            STEMUn7Button.appendChild(STEMUn7ButtonTxt)
            unitDiv.appendChild(STEMUn7Button)
        }//end of loop
    }
    if (course == "ICS4U" && grade == "12") {
        var ICS4Uunits = Object.values(courseInfoObj.grade12.STEM.ICS4U.sections)
        for (un27 = 0; un27 < ICS4Uunits.length; un27++) {
            var STEMUn8Button = document.createElement('button')
            var STEMUn8ButtonTxt = document.createTextNode(ICS4Uunits[un27])
            STEMUn8Button.id = ('STEMUn8ButtonTxt' + un27)//ID
            STEMUn8Button.appendChild(STEMUn8ButtonTxt)
            unitDiv.appendChild(STEMUn8Button)
        }//end of loop
    }
    if (course == "ADA4M" && grade == "12") {
        var ADA4Munits = Object.values(courseInfoObj.grade12.Art.ADA4M.sections)
        for (un3 = 0; un3 < ADA4Munits.length; un3++) {
            var ArtUn1Button = document.createElement('button')
            var ArtUn1ButtonTxt = document.createTextNode(ADA4Munits[un3])
            ArtUn1Button.id = ('ArtUn1ButtonTxt' + un3)//ID
            ArtUn1Button.appendChild(ArtUn1ButtonTxt)
            unitDiv.appendChild(ArtUn1Button)
        }//end of loop
    }
    if (course == "AVI4M" && grade == "12") {
        var AVI4Munits = Object.values(courseInfoObj.grade12.Art.AVI4M.sections)
        for (un31 = 0; un31 < AVI4Munits.length; un31++) {
            var ArtUn2Button = document.createElement('button')
            var ArtUn2ButtonTxt = document.createTextNode(AVI4Munits[un31])
            ArtUn2Button.id = ('ArtUn2ButtonTxt' + un31)//ID
            ArtUn2Button.appendChild(ArtUn2ButtonTxt)
            unitDiv.appendChild(ArtUn2Button)
        }//end of loop
    }
    if (course == "AMS4U" && grade == "12") {
        var AMS4Uunits = Object.values(courseInfoObj.grade12.Art.AMS4U.sections)
        for (un32 = 0; un32 < AMS4Uunits.length; un32++) {
            var ArtUn3Button = document.createElement('button')
            var ArtUn3ButtonTxt = document.createTextNode(AMS4Uunits[un32])
            ArtUn3Button.id = ('ArtUn3ButtonTxt' + un32)//ID
            ArtUn3Button.appendChild(ArtUn3ButtonTxt)
            unitDiv.appendChild(ArtUn3Button)
        }//end of loop
    }
    if (course == "AWQ4M" && grade == "12") {
        var AWQ4Munits = Object.values(courseInfoObj.grade12.Art.AWQ4M.sections)
        for (un33 = 0; un33 < AWQ4Munits.length; un33++) {
            var ArtUn4Button = document.createElement('button')
            var ArtUn4ButtonTxt = document.createTextNode(AWQ4Munits[un33])
            ArtUn4Button.id = ('ArtUn4ButtonTxt' + un33)//ID
            ArtUn4Button.appendChild(ArtUn4ButtonTxt)
            unitDiv.appendChild(ArtUn4Button)
        }//end of loop
    }
    if (course == "FSF4U" && grade == "12") {
        var FSF4Uunits = Object.values(courseInfoObj.grade12.Languages.FSF4U.sections)
        for (un4 = 0; un4 < FSF4Uunits.length; un4++) {
            var LanguagesUn1Button = document.createElement('button')
            var LanguagesUn1ButtonTxt = document.createTextNode(FSF4Uunits[un4])
            LanguagesUn1Button.id = ('LanguagesUn1ButtonTxt' + un4)//ID
            LanguagesUn1Button.appendChild(LanguagesUn1ButtonTxt)
            unitDiv.appendChild(LanguagesUn1Button)
        }//end of loop
    }
    if (course == "HSB4U" && grade == "12") {
        var HSB4Uunits = Object.values(courseInfoObj.grade12.SocialStudies.HSB4U.sections)
        for (un5 = 0; un5 < HSB4Uunits.length; un5++) {
            var SocialStudiesUn1Button = document.createElement('button')
            var SocialStudiesUn1ButtonTxt = document.createTextNode(HSB4Uunits[un5])
            SocialStudiesUn1Button.id = ('SocialStudiesUn1ButtonTxt' + un5)//ID
            SocialStudiesUn1Button.appendChild(SocialStudiesUn1ButtonTxt)
            unitDiv.appendChild(SocialStudiesUn1Button)
        }//end of loop
    }
    if (course == "HZT4U" && grade == "12") {
        var HZT4Uunits = Object.values(courseInfoObj.grade12.SocialStudies.HZT4U.sections)
        for (un51 = 0; un51 < HZT4Uunits.length; un51++) {
            var SocialStudiesUn2Button = document.createElement('button')
            var SocialStudiesUn2ButtonTxt = document.createTextNode(HZT4Uunits[un51])
            SocialStudiesUn2Button.id = ('SocialStudiesUn2ButtonTxt' + un51)//ID
            SocialStudiesUn2Button.appendChild(SocialStudiesUn2ButtonTxt)
            unitDiv.appendChild(SocialStudiesUn2Button)
        }//end of loop
    }
    if (course == "CHY4U" && grade == "12") {
        var CHY4Uunits = Object.values(courseInfoObj.grade12.SocialStudies.CHY4U.sections)
        for (un52 = 0; un52 < CHY4Uunits.length; un52++) {
            var SocialStudiesUn3Button = document.createElement('button')
            var SocialStudiesUn3ButtonTxt = document.createTextNode(CHY4Uunits[un52])
            //annie doing something
            search(CHY4Uunits[un52])
            SocialStudiesUn3Button.id = ('SocialStudiesUn3ButtonTxt' + un52)//ID
            SocialStudiesUn3Button.appendChild(SocialStudiesUn3ButtonTxt)
            unitDiv.appendChild(SocialStudiesUn3Button)
        }//end of loop
    }
    document.getElementById('unitDiv').addEventListener('click', function (f) {
        button1 = f.target.id
        console.log(button1)
        num1 = button1.slice(-1)
        unit = Object.values(courseInfoObj.grade12[nospace][course]['sections'])[num1];
        UnitNoSpace = unit.replace(/\s/g, ''); //removes the spaces from the unit names
        hideUnits()
        showVideos()
    })
}//end of showUnits

function hideUnits() {
    document.body.removeChild(TitleDiv3)
    document.body.removeChild(backDiv3)
    document.body.removeChild(unitDiv)
}

//vvvv=======SHOW RESOURCES======vvvvvv
function showVideos() {
    var backDiv4 = document.createElement("div4");
    backDiv4.id = "backDiv4";
    document.body.appendChild(backDiv4);

    var backToUnits = document.createElement('button')
    var backToUnitsTxt = document.createTextNode('Back')
    backToUnits.id = 'backToUnits'//ID
    backToUnits.appendChild(backToUnitsTxt)
    backDiv4.appendChild(backToUnits)

    var TitleDiv4 = document.createElement("div");
    TitleDiv4.id = "TitleDiv4";
    document.body.appendChild(TitleDiv4)

    var title4 = document.createElement("header");
    title4.id = "title4"
    var titleTxt4 = document.createTextNode("Grade 12 " + courseInfoObj.grade12[nospace][course].simpleName + ": " + unit)
    title4.appendChild(titleTxt4)
    TitleDiv4.appendChild(title4)

    alert(course)
    //var resource = Object.values([course][UnitNoSpace])
    //console.log(resource)



    backToUnits.addEventListener('click', function () {
        hideVideos()
        showUnits()
    })
    
    makeComment();
}


function hideVideos() {
    document.body.removeChild(TitleDiv4)
    document.body.removeChild(backDiv4)
    //document.body.removeChild(unitDiv)
document.getElementById('player0').style.display = 'none'
document.getElementById('player1').style.display = 'none'
document.getElementById('player2').style.display = 'none'
document.getElementById('player0').src = ''
document.getElementById('player1').src = ''
document.getElementById('player2').src = ''
}

//button text becomes search criteria for youtube API