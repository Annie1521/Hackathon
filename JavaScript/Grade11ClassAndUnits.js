
var course = ""
var topic = ""
var nospace = ""
var unit = ""
///ONLOAD FUNCTION

//vvvv=======SHOW CLASSES======vvvvvv

function showClassesEleven() {
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
        hideClassesEleven()
        showTopics()
    })


    var classesDiv11 = document.createElement("div");
    classesDiv11.id = "classesDiv11";
    document.body.appendChild(classesDiv11);


    backToTopics.addEventListener('click', function () {
        hideClassesEleven()
        showTopics()
    })

    if (topic == "English" && grade == "11") {
        var EnglishClasses = Object.keys(courseInfoObj.grade11.English)
        for (e = 0; e < EnglishClasses.length; e++) {
            var EnglishButton11 = document.createElement('button')
            var EnglishButtonTxt11 = document.createTextNode(EnglishClasses[e])
            EnglishButton11.id = ('EnglishButton11' + e)//ID
            EnglishButton11.appendChild(EnglishButtonTxt11)
            classesDiv11.appendChild(EnglishButton11)
        }//end of loop
    }

    if (topic == "STEM" && grade == "11") {
        var STEMClasses = Object.keys(courseInfoObj.grade11.STEM)
        for (s = 0; s < STEMClasses.length; s++) {
            var STEMButton11 = document.createElement('button')
            var STEMButtonTxt11 = document.createTextNode(STEMClasses[s])
            STEMButton11.id = ('STEMButton11' + s)//ID
            STEMButton11.appendChild(STEMButtonTxt11)
            classesDiv11.appendChild(STEMButton11)
        }//end of loop
    }


    if (topic == "Art" && grade == "11") {
        var ArtClasses = Object.keys(courseInfoObj.grade11.Art)
        for (a = 0; a < ArtClasses.length; a++) {
            var ArtButton11 = document.createElement('button')
            var ArtButtonTxt11 = document.createTextNode(ArtClasses[a])
            ArtButton11.id = ('ArtButton11' + a)//ID
            ArtButton11.appendChild(ArtButtonTxt11)
            classesDiv11.appendChild(ArtButton11)
        }//end of loop
    }


    if (topic == "Languages" && grade == "11") {
        var LanguagesClasses = Object.keys(courseInfoObj.grade11.Languages)
        for (l = 0; l < LanguagesClasses.length; l++) {
            var LanguagesButton11 = document.createElement('button')
            var LanguagesButtonTxt11 = document.createTextNode(LanguagesClasses[l])
            LanguagesButton11.id = ('LanguagesButton11' + l)//ID
            LanguagesButton11.appendChild(LanguagesButtonTxt11)
            classesDiv11.appendChild(LanguagesButton11)
        }//end of loop
    }


    if (topic == "Social Studies" && grade == "11") {
        var SocialStudiesClasses = Object.keys(courseInfoObj.grade11.SocialStudies)
        for (u = 0; u < SocialStudiesClasses.length; u++) {
            var SocialStudiesButton11 = document.createElement('button')
            var SocialStudiesButtonTxt11 = document.createTextNode(SocialStudiesClasses[u])
            SocialStudiesButton11.id = ('SocialStudiesButton11' + u)//ID
            SocialStudiesButton11.appendChild(SocialStudiesButtonTxt11)
            classesDiv11.appendChild(SocialStudiesButton11)
        }//end of loop
    }


    document.getElementById('classesDiv11').addEventListener('click', function (e) {
        button = e.target.id
        num = button.slice(-1)
        nospace = topic.replace(/\s/g, ''); //removes the spaces from 'Social Studies'
        course = Object.keys(courseInfoObj.grade11[nospace])[num]
        hideClassesEleven()
        showUnitsEleven()
    })


    function hideClassesEleven() {
        var Child = document.getElementById("classesDiv11")
        Child.parentNode.removeChild(Child)
        document.body.removeChild(backDiv2)
        document.body.removeChild(TitleDiv2)
    }
}//end of showClasses

//vvvv=======SHOW UNITS======vvvvvv

function showUnitsEleven() {
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
    var titleTxt3 = document.createTextNode("Grade 11 " + courseInfoObj.grade11[nospace][course].simpleName + " (" + course + ")")
    title3.appendChild(titleTxt3)
    TitleDiv3.appendChild(title3)

    backToClasses.addEventListener('click', function () {
        hideUnitsEleven()
        showClassesEleven()
    })

    var unitDiv11 = document.createElement("div");
    unitDiv11.id = "unitDiv11";
    document.body.appendChild(unitDiv11);

    if (course == "ENG3U" && grade == "11") {
        var ENG3Uunits = Object.values(courseInfoObj.grade11.English.ENG3U.sections)
        for (un1 = 0; un1 < ENG3Uunits.length; un1++) {
            var EngUn1Button11 = document.createElement('button')
            var EngUn1ButtonTxt11 = document.createTextNode(ENG3Uunits[un1])
            EngUn1Button11.id = ('EngUn1ButtonTxt11' + un1)//ID
            EngUn1Button11.appendChild(EngUn1ButtonTxt11)
            unitDiv11.appendChild(EngUn1Button11)
        }//end of loop
    }
    if (course == "MCR3U" && grade == "11") {
        var MCR3Uunits = Object.values(courseInfoObj.grade11.STEM.MCR3U.sections)
        for (un2 = 0; un2 < MCR3Uunits.length; un2++) {
            var STEMUn1Button11 = document.createElement('button')
            var STEMUn1ButtonTxt11 = document.createTextNode(MCR3Uunits[un2])
            STEMUn1Button11.id = ('STEMUn1ButtonTxt11' + un2)//ID
            STEMUn1Button11.appendChild(STEMUn1ButtonTxt11)
            unitDiv11.appendChild(STEMUn1Button11)
        }//end of loop
    }
    if (course == "TGJ3M" && grade == "11") {
        var TGJ3Munits = Object.values(courseInfoObj.grade11.STEM.TGJ3M.sections)
        for (un21 = 0; un21 < TGJ3Munits.length; un21++) {
            var STEMUn2Button11 = document.createElement('button')
            var STEMUn2ButtonTxt11 = document.createTextNode(TGJ3Munits[un21])
            STEMUn2Button11.id = ('STEMUn2ButtonTxt11' + un21)//ID
            STEMUn2Button11.appendChild(STEMUn2ButtonTxt11)
            unitDiv11.appendChild(STEMUn2Button11)
        }//end of loop
    }
    if (course == "SBI3U" && grade == "11") {
        var SBI3Uunits = Object.values(courseInfoObj.grade11.STEM.SBI3U.sections)
        for (un23 = 0; un23 < SBI3Uunits.length; un23++) {
            var STEMUn4Button11 = document.createElement('button')
            var STEMUn4ButtonTxt11 = document.createTextNode(SBI3Uunits[un23])
            STEMUn4Button11.id = ('STEMUn4ButtonTxt11' + un23)//ID
            STEMUn4Button11.appendChild(STEMUn4ButtonTxt11)
            unitDiv11.appendChild(STEMUn4Button11)
        }//end of loop
    }
    if (course == "SCH3U" && grade == "11") {
        var SCH3Uunits = Object.values(courseInfoObj.grade11.STEM.SCH3U.sections)
        for (un24 = 0; un24 < SCH3Uunits.length; un24++) {
            var STEMUn5Button11 = document.createElement('button')
            var STEMUn5ButtonTxt11 = document.createTextNode(SCH3Uunits[un24])
            STEMUn5Button11.id = ('STEMUn5ButtonTxt11' + un24)//ID
            STEMUn5Button11.appendChild(STEMUn5ButtonTxt11)
            unitDiv11.appendChild(STEMUn5Button11)
        }//end of loop
    }
    if (course == "SPH3U" && grade == "11") {
        var SPH3Uunits = Object.values(courseInfoObj.grade11.STEM.SPH3U.sections)
        for (un25 = 0; un25 < SPH3Uunits.length; un25++) {
            var STEMUn6Button11 = document.createElement('button')
            var STEMUn6ButtonTxt11 = document.createTextNode(SPH3Uunits[un25])
            STEMUn6Button11.id = ('STEMUn6ButtonTxt11' + un25)//ID
            STEMUn6Button11.appendChild(STEMUn6ButtonTxt11)
            unitDiv11.appendChild(STEMUn6Button11)
        }//end of loop
    }
    if (course == "TDJ3M" && grade == "11") {
        var TDJ3Munits = Object.values(courseInfoObj.grade11.STEM.TDJ3M.sections)
        for (un26 = 0; un26 < TDJ3Munits.length; un26++) {
            var STEMUn7Button11 = document.createElement('button')
            var STEMUn7ButtonTxt11 = document.createTextNode(TDJ3Munits[un26])
            STEMUn7Button11.id = ('STEMUn7ButtonTxt11' + un26)//ID
            STEMUn7Button11.appendChild(STEMUn7ButtonTxt11)
            unitDiv11.appendChild(STEMUn7Button11)
        }//end of loop
    }
    if (course == "ICS3U" && grade == "11") {
        var ICS3Uunits = Object.values(courseInfoObj.grade11.STEM.ICS3U.sections)
        for (un27 = 0; un27 < ICS3Uunits.length; un27++) {
            var STEMUn8Button11 = document.createElement('button')
            var STEMUn8ButtonTxt11 = document.createTextNode(ICS3Uunits[un27])
            STEMUn8Button11.id = ('STEMUn8ButtonTxt11' + un27)//ID
            STEMUn8Button11.appendChild(STEMUn8ButtonTxt11)
            unitDiv11.appendChild(STEMUn8Button11)
        }//end of loop
    }
    if (course == "ADA3M" && grade == "11") {
        var ADA3Munits = Object.values(courseInfoObj.grade11.Art.ADA3M.sections)
        for (un3 = 0; un3 < ADA3Munits.length; un3++) {
            var ArtUn1Button11 = document.createElement('button')
            var ArtUn1ButtonTxt11 = document.createTextNode(ADA3Munits[un3])
            ArtUn1Button11.id = ('ArtUn1ButtonTxt11' + un3)//ID
            ArtUn1Button11.appendChild(ArtUn1ButtonTxt11)
            unitDiv11.appendChild(ArtUn1Button11)
        }//end of loop
    }
    if (course == "AVI3M" && grade == "11") {
        var AVI3Munits = Object.values(courseInfoObj.grade11.Art.AVI3M.sections)
        for (un31 = 0; un31 < AVI3Munits.length; un31++) {
            var ArtUn2Button11 = document.createElement('button')
            var ArtUn2ButtonTxt11 = document.createTextNode(AVI3Munits[un31])
            ArtUn2Button11.id = ('ArtUn2ButtonTxt11' + un31)//ID
            ArtUn2Button11.appendChild(ArtUn2ButtonTxt11)
            unitDiv11.appendChild(ArtUn2Button11)
        }//end of loop
    }
    if (course == "AMS3U" && grade == "11") {
        var AMS3Uunits = Object.values(courseInfoObj.grade11.Art.AMS3U.sections)
        for (un32 = 0; un32 < AMS3Uunits.length; un32++) {
            var ArtUn3Button11 = document.createElement('button')
            var ArtUn3ButtonTxt11 = document.createTextNode(AMS3Uunits[un32])
            ArtUn3Button11.id = ('ArtUn3ButtonTxt11' + un32)//ID
            ArtUn3Button11.appendChild(ArtUn3ButtonTxt11)
            unitDiv11.appendChild(ArtUn3Button11)
        }//end of loop
    }
    if (course == "AWQ3M" && grade == "11") {
        var AWQ3Munits = Object.values(courseInfoObj.grade11.Art.AWQ3M.sections)
        for (un33 = 0; un33 < AWQ3Munits.length; un33++) {
            var ArtUn4Button11 = document.createElement('button')
            var ArtUn4ButtonTxt11 = document.createTextNode(AWQ3Munits[un33])
            ArtUn4Button11.id = ('ArtUn4ButtonTxt11' + un33)//ID
            ArtUn4Button11.appendChild(ArtUn4ButtonTxt11)
            unitDiv11.appendChild(ArtUn4Button11)
        }//end of loop
    }
    if (course == "FSF3U" && grade == "11") {
        var FSF3Uunits = Object.values(courseInfoObj.grade11.Languages.FSF3U.sections)
        for (un4 = 0; un4 < FSF3Uunits.length; un4++) {
            var LanguagesUn1Button11 = document.createElement('button')
            var LanguagesUn1ButtonTxt11 = document.createTextNode(FSF3Uunits[un4])
            LanguagesUn1Button11.id = ('LanguagesUn1ButtonTxt11' + un4)//ID
            LanguagesUn1Button11.appendChild(LanguagesUn1ButtonTxt11)
            unitDiv11.appendChild(LanguagesUn1Button11)
        }//end of loop
    }
    if (course == "LWSDU" && grade == "11") {
        var LWSDUunits = Object.values(courseInfoObj.grade11.Languages.LWSDU.sections)
        for (un52 = 0; un52 < LWSDUunits.length; un52++) {
            var SocialStudiesUn3Button11 = document.createElement('button')
            var SocialStudiesUn3ButtonTxt11 = document.createTextNode(LWSDUunits[un52])
            SocialStudiesUn3Button11.id = ('SocialStudiesUn3ButtonTxt11' + un52)//ID
            SocialStudiesUn3Button11.appendChild(SocialStudiesUn3ButtonTxt11)
            unitDiv11.appendChild(SocialStudiesUn3Button11)
        }//end of loop
    }
    if (course == "HSP3U" && grade == "11") {
        var HSP3Uunits = Object.values(courseInfoObj.grade11.SocialStudies.HSP3U.sections)
        for (un5 = 0; un5 < HSP3Uunits.length; un5++) {
            var SocialStudiesUn1Button11 = document.createElement('button')
            var SocialStudiesUn1ButtonTxt11 = document.createTextNode(HSP3Uunits[un5])
            SocialStudiesUn1Button11.id = ('SocialStudiesUn1ButtonTxt11' + un5)//ID
            SocialStudiesUn1Button11.appendChild(SocialStudiesUn1ButtonTxt11)
            unitDiv11.appendChild(SocialStudiesUn1Button11)
        }//end of loop
    }
    if (course == "HZB3U" && grade == "11") {
        var HZB3Uunits = Object.values(courseInfoObj.grade11.SocialStudies.HZB3U.sections)
        for (un51 = 0; un51 < HZB3Uunits.length; un51++) {
            var SocialStudiesUn2Button11 = document.createElement('button')
            var SocialStudiesUn2ButtonTxt11 = document.createTextNode(HZB3Uunits[un51])
            SocialStudiesUn2Button11.id = ('SocialStudiesUn2ButtonTxt11' + un51)//ID
            SocialStudiesUn2Button11.appendChild(SocialStudiesUn2ButtonTxt11)
            unitDiv11.appendChild(SocialStudiesUn2Button11)
        }//end of loop
    }
    document.getElementById('unitDiv11').addEventListener('click', function (f) {
        button1 = f.target.id
        console.log(button1)
        num1 = button1.slice(-1)
        unit = Object.values(courseInfoObj.grade11[nospace][course]['sections'])[num1];
        hideUnitsEleven()
        showVideosEleven()
    })
}//end of showUnits

function hideUnitsEleven() {
    document.body.removeChild(TitleDiv3)
    document.body.removeChild(backDiv3)
    document.body.removeChild(unitDiv11)
}

//vvvv=======SHOW RESOURCES======vvvvvv

function showVideosEleven() {
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

    backToUnits.addEventListener('click', function () {
        hideVideosEleven()
        showUnitsEleven()
    })
}

function hideVideosEleven() {
    document.body.removeChild(TitleDiv4)
    document.body.removeChild(backDiv4)
    //document.body.removeChild(unitDiv)
}

//button text becomes search word