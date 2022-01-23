var resourceDiv = document.createElement('div')
resourceDiv.id = "resourceDiv"
document.body.appendChild(resourceDiv)
//base function use for each course
function CourseName(description, Rlink) {

    var nameDiv = document.createElement('div')
    nameDiv.id = 'nameDiv'
    resourceDiv.appendChild(nameDiv)

    var a = document.createElement('a')
    a.id = 'a'
    nameDiv.appendChild(a)

    var link = document.createTextNode(description)
    a.appendChild(link)
    a.href = Rlink;



}

var ENG4U = {
    IntrotoENG4U: ['How to read academic writing', 'https://libguides.usc.edu/evaluate/scholarlyarticles'],
    LiteraryCriticism: null,
    Poetry: ['Poetry guide', 'http://www.teachenglishtoday.org/wp-content/uploads/2018/07/Notes-on-Grade-12-HL-poems-2.pdf'],
    EssayAnalysis: ['Tips for analysis Essays', 'https://sites.google.com/site/fungeng4u/tips-for-writing-a-literary-analysis-essay '],
    NovelStudy: ['How to read Shakespeare', 'https://www.bardweb.net/content/ac/shakesreader.html'],
    ISU: ['ISU book ideas', 'http://iss.scdsb.on.ca/Documents/Library%20Documents/Senior-ISU-Book-ListWEB.pdf '],
}
function ENG4U() {

    var ENG4UDiv = document.createElement('div')
    ENG4UDiv.id = 'ENG4UDiv'
    resourceDiv.appendChild(ENG4UDiv)

    var a = document.createElement('a')
    a.id = 'a'
    ENG4UDiv.appendChild(a)
 
    var link=document.createTextNode("Tips for analysis Essays")
    a.appendChild(link)
    a.href = "https://sites.google.com/site/fungeng4u/tips-for-writing-a-literary-analysis-essay";
 
    var ENG4UDiv=document.createElement('div')
    ENG4UDiv.id='ENG4UDiv'
    resourceDiv.appendChild(ENG4UDiv)

    var a = document.createElement('a')
    a.id = 'a'
    ENG4UDiv.appendChild(a)
 
    var link=document.createTextNode("Poetry guide")
    a.appendChild(link)
    a.href = "http://www.teachenglishtoday.org/wp-content/uploads/2018/07/Notes-on-Grade-12-HL-poems-2.pdf";
 
    var ENG4UDiv=document.createElement('div')
    ENG4UDiv.id='ENG4UDiv'
    resourceDiv.appendChild(ENG4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    ENG4UDiv.appendChild(a)
 
    var link=document.createTextNode("How to read Shakespeare")
    a.appendChild(link)
    a.href = "https://www.bardweb.net/content/ac/shakesreader.html";

    var ENG4UDiv=document.createElement('div')
    ENG4UDiv.id='ENG4UDiv'
    resourceDiv.appendChild(ENG4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    ENG4UDiv.appendChild(a)
 
    var link=document.createTextNode("How to read academic writing")
    a.appendChild(link)
    a.href = "https://libguides.usc.edu/evaluate/scholarlyarticles ";

    var ENG4UDiv=document.createElement('div')
    ENG4UDiv.id='ENG4UDiv'
    resourceDiv.appendChild(ENG4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    ENG4UDiv.appendChild(a)
 
    var link=document.createTextNode("ISU book ideas")
    a.appendChild(link)
    a.href = "http://iss.scdsb.on.ca/Documents/Library%20Documents/Senior-ISU-Book-ListWEB.pdf ";
}

function ETS4U(){
 
    var ETS4UDiv=document.createElement('div')
    ETS4UDiv.id='ETS4UDiv'
    resourceDiv.appendChild(ETS4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    ETS4UDiv.appendChild(a)
 
    var link=document.createTextNode("Bible overview")
    a.appendChild(link)
    a.href = "https://overviewbible.com/books-of-the-bible/ ";
 
    var ETS4UDiv=document.createElement('div')
    ETS4UDiv.id='ETS4UDiv'
    resourceDiv.appendChild(ETS4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    ETS4UDiv.appendChild(a)
 
    var link=document.createTextNode("Guide to post-apocalyptic fiction")
    a.appendChild(link)
    a.href = "https://www.masterclass.com/articles/what-is-apocalyptic-and-post-apocalyptic-fiction ";

    var ETS4UDiv=document.createElement('div')
    ETS4UDiv.id='ETS4UDiv'
    resourceDiv.appendChild(ETS4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    ETS4UDiv.appendChild(a)
 
    var link=document.createTextNode("Guide to reading sci-fi")
    a.appendChild(link)
    a.href = "https://www.nypl.org/blog/2019/01/02/beginners-guide-science-fiction";
 
    var ETS4UDiv=document.createElement('div')
    ETS4UDiv.id='ETS4UDiv'
    resourceDiv.appendChild(ETS4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    ETS4UDiv.appendChild(a)
 
    var link=document.createTextNode("Guide to speculative fiction")
    a.appendChild(link)
    a.href = "https://www.masterclass.com/articles/what-is-speculative-fiction-defining-and-understanding-the-different-genres-of-speculative-fiction ";
 
    var ETS4UDiv=document.createElement('div')
    ETS4UDiv.id='ETS4UDiv'
    resourceDiv.appendChild(ETS4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    ETS4UDiv.appendChild(a)
 
    var link=document.createTextNode("Guide to reading Utopia")
    a.appendChild(link)
    a.href = "https://www.masterclass.com/articles/what-is-utopian-literature";
 
    var ETS4UDiv=document.createElement('div')
    ETS4UDiv.id='ETS4UDiv'
    resourceDiv.appendChild(ETS4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    ETS4UDiv.appendChild(a)
 
    var link=document.createTextNode("ISU book ideas")
    a.appendChild(link)
    a.href = "http://iss.scdsb.on.ca/Documents/Library%20Documents/Senior-ISU-Book-ListWEB.pdf ";
 
 
}

function EWC4U(){
 
    var EWC4UDiv=document.createElement('div')
    EWC4UDiv.id='EWC4UDiv'
    resourceDiv.appendChild(EWC4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    EWC4UDiv.appendChild(a)
 
    var link=document.createTextNode("Writing tools overview")
    a.appendChild(link)
    a.href = "https://dcripe.files.wordpress.com/2014/06/50-writing-tools.pdf ";
 
    var EWC4UDiv=document.createElement('div')
    EWC4UDiv.id='EWC4UDiv'
    resourceDiv.appendChild(EWC4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    EWC4UDiv.appendChild(a)
 
    var link=document.createTextNode("Guide to narrative writing")
    a.appendChild(link)
    a.href = "https://www.3plearning.com/blog/narrativewriting/";

    var EWC4UDiv=document.createElement('div')
    EWC4UDiv.id='EWC4UDiv'
    resourceDiv.appendChild(EWC4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    EWC4UDiv.appendChild(a)
 
    var link=document.createTextNode("Informal vs formal writing")
    a.appendChild(link)
    a.href = "https://www.uopeople.edu/blog/formal-vs-informal-writing/";
 
    var EWC4UDiv=document.createElement('div')
    EWC4UDiv.id='EWC4UDiv'
    resourceDiv.appendChild(EWC4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    EWC4UDiv.appendChild(a)
 
    var link=document.createTextNode("Poetry guide")
    a.appendChild(link)
    a.href = "http://www.teachenglishtoday.org/wp-content/uploads/2018/07/Notes-on-Grade-12-HL-poems-2.pdf";
 
}

function MCV4U(){
 
    var MCV4UDiv=document.createElement('div')
    MCV4UDiv.id='MCV4UDiv'
    resourceDiv.appendChild(MCV4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    MCV4UDiv.appendChild(a)
 
    var link=document.createTextNode("Intro to Dervivatives")
    a.appendChild(link)
    a.href = "https://www.mathsisfun.com/calculus/derivatives-introduction.html";
 
    var MCV4UDiv=document.createElement('div')
    MCV4UDiv.id='MCV4UDiv'
    resourceDiv.appendChild(MCV4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    MCV4UDiv.appendChild(a)
 
    var link=document.createTextNode("Intro to Vectors")
    a.appendChild(link)
    a.href = "http://www1.maths.leeds.ac.uk/~smt/TEACHING/MATH2620/revision.pdf";

    var MCV4UDiv=document.createElement('div')
    MCV4UDiv.id='MCV4UDiv'
    resourceDiv.appendChild(MCV4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    MCV4UDiv.appendChild(a)
 
    var link=document.createTextNode("Intro to planes")
    a.appendChild(link)
    a.href = "https://tutorial.math.lamar.edu/classes/calciii/eqnsofplanes.aspx";
 
    var MCV4UDiv=document.createElement('div')
    MCV4UDiv.id='MCV4UDiv'
    resourceDiv.appendChild(MCV4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    MCV4UDiv.appendChild(a)
 
    var link=document.createTextNode("Intro to exponential functions")
    a.appendChild(link)
    a.href = "https://opentextbc.ca/calculusv1openstax/chapter/exponential-and-logarithmic-functions/";
 
}

function MHF4U(){
 
    var MHF4UDiv=document.createElement('div')
    MHF4UDiv.id='MHF4UDiv'
    resourceDiv.appendChild(MHF4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    MHF4UDiv.appendChild(a)
 
    var link=document.createTextNode("Basic Skills overview")
    a.appendChild(link)
    a.href = "https://prezi.com/p/l-huif72ldmg/mhf4u-basic-skills-review/";
 
    var MHF4UDiv=document.createElement('div')
    MHF4UDiv.id='MHF4UDiv'
    resourceDiv.appendChild(MHF4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    MHF4UDiv.appendChild(a)
 
    var link=document.createTextNode("Basics of polynomial functions")
    a.appendChild(link)
    a.href = "https://www.mathcentre.ac.uk/resources/uploaded/mc-ty-polynomial-2009-1.pdf";

    var MHF4UDiv=document.createElement('div')
    MHF4UDiv.id='MHF4UDiv'
    resourceDiv.appendChild(MHF4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    MHF4UDiv.appendChild(a)
 
    var link=document.createTextNode("Basics of inequalities")
    a.appendChild(link)
    a.href = "https://brilliant.org/wiki/polynomial-inequalities/#:~:text=A%20polynomial%20inequality%20is%20an,satisfied%20if%20and%20only%20if&text=These%20inequalities%20can%20give%20insight%20into%20the%20behavior%20of%20polynomials";
 
    var MHF4UDiv=document.createElement('div')
    MHF4UDiv.id='MHF4UDiv'
    resourceDiv.appendChild(MHF4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    MHF4UDiv.appendChild(a)
 
    var link=document.createTextNode("Trig overview")
    a.appendChild(link)
    a.href = "http://math2.org/math/algebra/functions/trig/index.htm";

    var MHF4UDiv=document.createElement('div')
    MHF4UDiv.id='MHF4UDiv'
    resourceDiv.appendChild(MHF4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    MHF4UDiv.appendChild(a)
 
    var link=document.createTextNode("Exponential and Logarithmic functions overview")
    a.appendChild(link)
    a.href = "https://nool.ontariotechu.ca/mathematics/exponential-logarithmic-functions/basics/index.php";
 
    var MHF4UDiv=document.createElement('div')
    MHF4UDiv.id='MHF4UDiv'
    resourceDiv.appendChild(MHF4UDiv)
 
    var a=document.createElement('a')
    a.id='a'
    MHF4UDiv.appendChild(a)
 
    var link=document.createTextNode("Combining functions overview")
    a.appendChild(link)
    a.href = "https://people.richland.edu/james/lecture/m116/functions/combinations.html ";
 
}
MHF4U()























// var Links={
//  ENG4U: {
//     IntrotoENG4U:['How to read academic writing','https://libguides.usc.edu/evaluate/scholarlyarticles'],
//     LiteraryCriticism: null
//     ,Poetry:['Poetry guide','http://www.teachenglishtoday.org/wp-content/uploads/2018/07/Notes-on-Grade-12-HL-poems-2.pdf'],
//     EssayAnalysis:['Tips for analysis Essays','https://sites.google.com/site/fungeng4u/tips-for-writing-a-literary-analysis-essay '],
//     NovelStudy:['How to read Shakespeare','https://www.bardweb.net/content/ac/shakesreader.html'],
//     ISU:['ISU book ideas','http://iss.scdsb.on.ca/Documents/Library%20Documents/Senior-ISU-Book-ListWEB.pdf '],


// },


// ETS4U:{
//     IntrotoETS4U:['How to read academic writing','https://libguides.usc.edu/evaluate/scholarlyarticles'],
//     ApocalypseBiblicalBeginnings:['Bible overview','https://overviewbible.com/books-of-the-bible/ '],
//     PostApocalypse:['Guide to post-apocalyptic fiction','https://www.masterclass.com/articles/what-is-apocalyptic-and-post-apocalyptic-fiction'],
//     SciFiDystopia:['Guide to reading sci-fi','https://www.nypl.org/blog/2019/01/02/beginners-guide-science-fiction'],
//     Utopia:['Guide to reading Utopia','https://www.masterclass.com/articles/what-is-utopian-literature'],
//     SpeculativeFiction:['Guide to speculative fiction','https://www.masterclass.com/articles/what-is-speculative-fiction-defining-and-understanding-the-different-genres-of-speculative-fiction'],
//     ISU:['ISU book ideas','http://iss.scdsb.on.ca/Documents/Library%20Documents/Senior-ISU-Book-ListWEB.pdf '],
// },

// EWC4U:{
//     IntrotoEWC4U:['How to read academic writing','https://libguides.usc.edu/evaluate/scholarlyarticles'],
//     ToolsofWriting:['Writing tools overview','https://dcripe.files.wordpress.com/2014/06/50-writing-tools.pdf'],
//     NarrativeWriting:['Guide to narrative writing','https://www.3plearning.com/blog/narrativewriting/'],
//     Poetry:['Poetry guide','http://www.teachenglishtoday.org/wp-content/uploads/2018/07/Notes-on-Grade-12-HL-poems-2.pdf'],
//     InformalWriting:['Informal vs formal writing','https://www.uopeople.edu/blog/formal-vs-informal-writing/'],
//     Summative: null,
// },

// MCV4U:{
//     IntrotoMCV4U: null,
//     Derivatives: null
// }


// }
// console.log(Object.values(Links.ENG4U.NovelStudy)))


