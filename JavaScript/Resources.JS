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

    var link = document.createTextNode("Description here")
    a.appendChild(link)
    a.href = "link";

    var ENG4UDiv = document.createElement('div')
    ENG4UDiv.id = 'ENG4UDiv'
    resourceDiv.appendChild(ENG4UDiv)

    var a = document.createElement('a')
    a.id = 'a'
    ENG4UDiv.appendChild(a)

    var link = document.createTextNode("Description here")
    a.appendChild(link)
    a.href = "link";

}





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


