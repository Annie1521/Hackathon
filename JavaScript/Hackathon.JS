function showGrades() {
    var GradeDiv = document.createElement("div")
    GradeDiv.id = "GradeDiv";
    document.body.appendChild(GradeDiv);

    for (i = 9; i < 13; i++) {

        var gradeBtn = document.createElement('button')
        GradeDiv.appendChild(gradeBtn)
        var gradeTxt = document.createTextNode('Grade ' + i)
        gradeBtn.id = ('Grade' + i)
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

showGrades()

function showTopics() {

var backTogrades = document.createElement('button')
var backTogradesTxt = document.createTextNode('Back To Grades')
backTogrades.id  = 'backToGrades'//ID
backTogrades.appendChild(backTogradesTxt)
document.body.appendChild(backTogrades)


var topics = ['English', 'STEM', 'Art', 'Languages', 'Socal Studies'] 

for (j=0; j<4; j++){
var topicButton = document.createElement('button')
var topicButtonTxt = document.createTextNode(topics[j])
topicButton.id = 'topicButton'//ID
topicButton.appendChild(topicButtonTxt)
document.body.appendChild(topicButton)
}//end of loop

}//end of showTopics


