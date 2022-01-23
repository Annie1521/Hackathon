var resourceDiv=document.createElement('div')
resourceDiv.id="resourceDiv"
document.body.appendChild(resourceDiv)
//base function use for each course
function CourseName(){

    var nameDiv=document.createElement('div')
    nameDiv.id='nameDiv'
    resourceDiv.appendChild(nameDiv)

    //add one of this for each link
    var a=document.createElement('a')
    a.id='a'
    nameDiv.appendChild(a)

    var link=document.createTextNode("Description here")
    a.appendChild(link)
    a.href = "link"; 

    var a=document.createElement('a')
    a.id='a'
    nameDiv.appendChild(a)

    var link=document.createTextNode("Description here")
    a.appendChild(link)
    a.href = "link"; 

}
CourseName()