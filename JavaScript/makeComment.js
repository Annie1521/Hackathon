function makeComment(){
addResDiv = document.createElement('div');
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

var postB = document.createElement('button');
postB.id = 'postB';
makeText('Post', postB);
inputDiv.appendChild(postB);

inputDiv.style.display = 'none';
addResB.addEventListener('click', function(){
    inputDiv.style.display = 'block';
    postB.addEventListener('click', function(){
        inputDiv.style.display = 'none';
        var nameV = nameInput.value;
        var linkV = linkInput.value;
        var commentV = commentInput.value;
        var commentDiv = document.createElement('div');
        commentDiv.className = 'commentClass';
        addResDiv.appendChild(commentDiv);

        var nameP = document.createElement('p');
        makeText(nameV, nameP);
        nameP.className = 'namePClass';
        commentDiv.appendChild(nameP);

        var linkP = document.createElement('p');
        makeText(linkV, linkP);
        linkP.className = 'linkPClass';
        commentDiv.appendChild(linkP);

        var commentP = document.createElement('p');
        makeText(commentV, commentP);
        commentP.className = 'commentPClass';
        commentDiv.appendChild(commentP);

        var replyB = document.createElement('button');
        makeText('Reply', replyB);
        replyB.id = 'replyB';
        replyB.className = 'replyBClass'
        commentDiv.appendChild(replyB);
        replyB.addEventListener('click', function(){
            var replyDiv = document.createElement('div');
            replyDiv.className = 'relplyDivClass';
            commentDiv.appendChild(replyDiv);

            var repNameInput = document.createElement('input');
            repNameInput.placeholder = 'Name';
            repNameInput.id = 'repNameInput';
            replyDiv.appendChild(repNameInput);

            var repCommentInput = document.createElement('input');
            repCommentInput.placeholder = 'Comment';
            repCommentInput.id = 'repCommentInput';
            replyDiv.appendChild(repCommentInput);

            var repPostB = document.createElement('button');
            makeText('Post', repPostB);
            repPostB.id = 'repPostB';
            replyDiv.appendChild(repPostB);

            repPostB.addEventListener('click', function(){
                replyDiv.style.display = 'none';
                var repNameV = repNameInput.value;
                var repCommentV = repCommentInput.value;

                var repNameP = document.createElement('p');
                makeText(repNameV, repNameP);
                repNameP.className = 'repNamePClass';
                commentDiv.appendChild(repNameP);

                var repCommentP = document.createElement('p');
                makeText(repCommentV, repCommentP);
                repCommentP.className = 'repCommentPClass';
                commentDiv.appendChild(repCommentP);

                document.getElementById("addResDiv").scrollIntoView();
            })
        })
    })
})
}
