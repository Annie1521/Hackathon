function makeComment(){
var addResDiv = document.createElement('div');
addResDiv.id = 'addResDiv';
document.body.appendChild(addResDiv);

var addResB = document.createElement('button');
addResB.id = 'addResB';
makeText('Add Resource', addResB);
addResDiv.appendChild(addResB);

var inputDiv = document.createElement('div');
inputDiv.id = 'inputDiv';
addResDiv.appendChild(inputDiv);

var nameInput = document.createElement('input');
nameInput.id = 'nameInput';
nameInput.placeholder = 'Name';
inputDiv.appendChild(nameInput);

var linkInput = document.createElement('input');
linkInput.id = 'linkInput';
linkInput.placeholder = 'Resource Link';
inputDiv.appendChild(linkInput);

var commentInput = document.createElement('input');
commentInput.id = 'commentInput';
commentInput.placeholder = 'Additional Comment';
inputDiv.appendChild(commentInput);

var postB = document.createElement('postB');
postB.id = 'postB';
makeText('Post', postB);
inputDiv.appendChild(postB);

inputDiv.style.display = 'none';
addResB.addEventListener('click', function(){
    inputDiv.style.display = 'block';
    postB.addEventListener('click', function(){
        inputDiv.style.display = 'block';
        var nameV = nameInput.value;
        var linkV = linkInput.value;
        var commentV = commentInput.value;
        var commentDiv = document.createElement('div');
        commentDiv.className = 'commentClass';
        addResDiv.appendChild(commentDiv);

        var nameP = document.createElement('p');
        makeText(nameV, nameP);
        nameP.id = 'nameP';
        commentDiv.appendChild(nameP);

        var linkP = document.createElement('p');
        makeText(linkV, linkP);
        linkP.id = 'linkP';
        commentDiv.appendChild(linkP);

        var commentP = document.createElement('p');
        makeText(commentV, commentP);
        commentP.id = 'commentP';
        commentDiv.appendChild(commentP);

        var replyB = document.createElement('button');
        makeText('Reply', replyB);
        commentDiv.appendChild(replyB);
    })
})
}
