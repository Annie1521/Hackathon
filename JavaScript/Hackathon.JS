function showGrades(){

    for(i=9; i<13; i++){

var gradeBtn= document.createElement('button')
var gradeTxt = document.createTextNode('Grade' + i)
gradeBtn.id = ('Grade ' + i)
gradeBtn.appendChild(gradeTxt)
document.body.appendChild(gradeBtn)
    }//end of loop
}//end of showGrades

showGrades()