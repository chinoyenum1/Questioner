window.onload = function() {console.log("hello");
    addQuestion();

    let moveup = document.querySelectorAll(".up");
    for (let i = 0; i < moveup.length; i++) {
        moveUp(moveup[i]);
    }

    let movedown = document.querySelectorAll(".down");
    for (let i = 0; i < movedown.length; i++) {
        moveDown(movedown[i]);
    }

    let postcomment = document.querySelectorAll(".post");
    //for (let i = 0; i < postcomment.length; i++) {
    addComment(postcomment);
    //  }
}
//Funtion to upvote a question
function moveUp(elem) {
    elem.addEventListener("click", function() {
        let move = this.parentElement.parentElement;
        if (move.previousElementSibling) {
            move.parentNode.insertBefore(move, move.previousElementSibling);
        }
    });
}

//Funtion to downvote a question
function moveDown(dwn) {
    dwn.addEventListener("click", function() {
        let move = this.parentElement.parentElement;
        if (move.nextElementSibling) {
            move.parentNode.insertBefore(move.nextElementSibling, move);
        }
    })
}

//function to add question to the meetup group
function addQuestion() {
    let submit = document.getElementById("submit");
    submit.onclick = function() {
        let value = document.getElementById("input-question").value;
        if (value !== "") {
            let maindiv = document.createElement("figure");

            //Creating the image element and adding it to the figure
            let img = document.createElement("img");
            img.src = "images/admin.png";
            img.alt = "Image here";
            maindiv.appendChild(img);

            //Creating the figcaption element and adding it to the figure
            let figcap = document.createElement("figcaption");
            figcap.innerHTML = "John Doe";
            maindiv.appendChild(figcap);

            //Creating the question
            let question = document.createElement("h4");
            question.innerHTML = value;
            maindiv.appendChild(question);

            let br1 = document.createElement("br");
            maindiv.appendChild(br1);


            //Creating the div voting buttons
            let voteDiv = document.createElement("div");
            voteDiv.className = "vote-button";
            //Creating the up  Buttons
            let btnup = document.createElement("button");
            btnup.innerHTML = "&#128077;";
            btnup.className = "up";
            btnup.addEventListener("click", moveUp(btnup));
            voteDiv.appendChild(btnup);
            //Creating the Down button
            let btndown = document.createElement("button");
            btndown.innerHTML = "&#128078;";
            btndown.className = "down";
            //btndown.addEventListener("click", moveDown(btndown));
            voteDiv.appendChild(btndown);
            maindiv.appendChild(voteDiv);   //Appending the div button wrapper

            let clr1 = document.createElement("div");
            clr1.className = "clr";
            maindiv.appendChild(clr1);

            //Creating the comment wrapper div
            let commentdiv = document.createElement("div");
            commentdiv.className = "comment";
            //creating the textarea
            let txt = document.createElement("textarea");
            commentdiv.appendChild(txt);
            let br2 = document.createElement("br");
            commentdiv.appendChild(br2);
            //Creating post buttons
            let btnpost = document.createElement("button");
            btnpost.innerHTML = "Post Comment";
            btnpost.className = "btn-post";
            //btnpost.addEventListener("click", addComment2(btnpost));
            commentdiv.appendChild(btnpost);
            maindiv.appendChild(commentdiv);    //Adding the comment block

            let clr2 = document.createElement("div");
            clr2.className = "clr";
            maindiv.appendChild(clr2);

            //Adding the view comment block
            let viewComment = document.createElement("div");
            viewComment.className = "view-comment";
            maindiv.appendChild(viewComment);

            let hr = document.createElement("hr");
            maindiv.appendChild(hr);

            //Adding the elements to the page
            document.getElementById("post-my-question").appendChild(maindiv);
        }
    }
}


function addComment(node) {
    for (let i = 0; i < node.length; i++) {
        node[i].addEventListener("click", function() { //console.log("node is: " + postcomment[i]);
            let text = document.querySelectorAll(".text");
            console.log(text);
            for (let j = 0; j < text.length; j++) {
                if (j === i) {
                    let comment = text[j].value;
                    writeComment(comment, node[i]);
                }
            }
        });
    }
}


function addComment2(node) {
    node.onclick = () => {
        let sib = node.previousElementSibling;
        console.log(node.parentNode.nextElementSibling.childNodes[0]);
        writeComment(sib.value, node);
    }
}
