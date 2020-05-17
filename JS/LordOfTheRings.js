const options = document.querySelector(".options").children;
const answerTrackerContainer = document.querySelector(".answers-tracker");
const questionNumberSpan = document.querySelector(".question-num-value");
const totalQuestionSpan = document.querySelector(".total-question");
const correctAnswerSpan=document.querySelector(".correct-answers");
const totalQuestionSpan2=document.querySelector(".total-question2");
const percentage=document.querySelector(".percentage");
const question = document.querySelector(".question");
const op1 = document.querySelector(".option1");
const op2 = document.querySelector(".option2");
const op3 = document.querySelector(".option3");
const op4 = document.querySelector(".option4");
let questionIndex;
let index = 0;
let myArray = [];
let myarr = [];
let score=0;

// Questions and options and answers

const questions = [

{

q: "Who is never tempted by the Ring?",

options: [

"Bilbo",

"Boromir",

"Galadriel",

"Sam"

],

answer: 3
//"picture": "https://cdn.vox-cdn.com/thumbor/fBs5dqKJipy7v5Z7Ms3NA2gWkyw=/0x0:825x464/920x613/filters:focal(347x166:479x298):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66047434/DOiAi2WUEAE3A1Y.0.jpg"

},

{

q: "What precious metal is Frodo’s armored shirt made out of?",

options: [

"Silver",

"Mithril",

"Steel",

"Elven-glass"

],

answer: 1
//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2017/08/Screenshot-2017-08-24-at-1.08.19-PM-e1523322613834.png?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What is the name of Frodo’s sword?",

options: [

"Sting",

"Orcrist",

"Needle",

"Orc reaper"

],

answer: 0
//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2017/11/Frodo-Sting-The-Lord-of-the-Rings.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What is the name of Bilbo’s home?",

options: [

"Hobbiton",

"Overhill",

"Bag End",

"Bag Shot"

],

answer: 0
//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2017/06/Bilbo-Baggins-in-The-Lord-of-the-Rings.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What was the name of the bridge where Gandalf faced-off against the Balrog?",

options: [

"The Bridge of Nargothrond",

"The Bridge of Khazad-Dum",

"Thee Brandywine Bridge",

"The Bridge of Mengroth"

],

answer: 1
//"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2017/06/Gandalf-You-Shall-Not-Pass-The-Lord-of-the-Rings.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "Where does Frodo first meet Aragorn?",

options: [

"The Green Dragon Inn",

"Inn of the Prancing Pony",

"Fella Inn",

"Inn of Drunk Pony"

],

answer: 1
//"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2017/11/Strider-Aragon-The-Lord-of-the-Rings.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "Who actually destroys the One Ring?",

options: [

"Frodo",

"Sam",

"Gollum",

"Gandalf"

],

answer: 2
//"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2017/08/LordoftheRings06-e1503608522745.jpg?q=50&fit=crop&w=963&h=494&dpr=1.5"

},

{

q: "Where is Legolas’s home?",

options: [

"Eastfold",

"Rivendell",

"Fangorn Forest",

"Mirkwood"

],

answer: 3
//"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2017/06/Legalos-in-The-Lord-of-the-Rings-The-Two-Towers.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What fake name does Frodo give himself after leaving the Shire?",

options: [

"Mr. Underfoot",

"Mr. Underhill",

"Mr. Proudfoot",

"Mr. Overhill"

],

nswer: 1
//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2017/06/Frodo-in-The-Lord-of-the-Rings-The-Two-Towers.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "In the movies, where does Gandalf go to research the One Ring?",

options: [

"The Blue Mountains",

"Rivendell",

"The Misty Mountains",

"Minas Tirith"

],

answer: 3
//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2017/06/Gandal-in-Bag-End-in-The-Lord-of-the-Rings.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "How many Ringwraiths are there?",

options: [

"5",

"7",

"9",

"11"

],

answer: 2
//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2017/10/Nazgul-The-Lord-of-The-Rings.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What race of beings was Sauron once a member of?",

options: [

"Men",

"Elves",

"Maiar",

"Orc"

],

answer: 2
//"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2017/11/Sauron-The-Lord-of-the-Rings.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What gift does Galadriel give Frodo?",

options: [

"Elven Rope",

"The Phial of Galardiel",

"Three string of her hair",

"A silver belt"

],

answer: 1
//"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2017/05/Galadriel-Lord-of-the-Rings-Cate-Blanchett.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What are the hobbits actually smoking?",

options: [

"Marijuana",

"Cloves",

"Peote",

"Pipe-weed"

],

answer: 3
//"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2017/11/Bilbo-Gandalf-The-Lord-of-the-Rings-e1523572658924.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "How many members of the Fellowship actually die?",

options: [

"0",

"1",

"2",

"3"

],

answer: 2
//"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2017/09/the-fellowship-of-the-ring-15-years-later-220127-1280x0.jpg?q=50&fit=crop&w=963&h=529&dpr=1.5"

},

{

q: "What is the name of the tower that Saruman inhabits?",

options: [

"The Tower of Cirith Ungol",

"The Tower of Orthanc",

"Minas Morgul",

"Barad-Dur"

],

answer: 1
//"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2017/10/Saruman-The-Lord-of-the-Rings.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "Who kills the Witch-king of Angmar?",

options: [

"Faramir",

"Legolas",

"Eowyn",

"Theoden"

],

answer: 2
//"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2017/11/Witch-King-The-Lord-of-the-Rings.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What is Pippin’s full name?",

options: [

"Peregrin Took",

"Peregrin Brandybuck",

"Meriadoc Brandybuck",

"Peregrin Baggins"

],

answer: 0
//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2017/05/Pippin-Lord-of-the-Rings-Billy-Boyd.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "In what kingdom is Helm’s Deep located?",

options: [

"Rohan",

"Gondor",

"Arthedein",

"Rhudaur"

],

answer: 0
//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2017/11/Helms-Deep-The-Lord-of-the-Rings.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "Where does Frodo travel to at the end of Return of the King?",

options: [

"Ered Luin",

"Lothlorien",

"The Undying Lands",

"Mordor"

],

answer: 2
//"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2017/08/old_bilbo-e1520801185733.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What is the name of the secret passage into Mordor that Gollum leads Frodo and Sam to?",

options: [

"The Stairs of Cirith Ungol",

"The Stairs of Minas Tirith",

"The Stairs of Lonely Mountain",

"The Stairs of Durin"

],

answer: 0
//"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2017/11/The-Stairs-of-Cirith-Ungol-The-Lord-of-the-Rings.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What is the name of the sword that is reforged and gifted to Aragorn?",

options: [

"Glamdring",

"Orcrist",

"Hadhafang",

"Anduril"

],

answer: 3
//"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2017/11/Aragon-The-Lord-of-the-Rings.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What is the name of the giant spider that captures Frodo?",

options: [

"Mothra",

"Shelob",

"Aragog",

"Shella"

],

answer: 1
//"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2017/05/Shelob-spider-Lord-of-the-Rings-e1523571883417.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "Where do the Ents stage their attack against Saruman?",

options: [

"Helm's Deep",

"Isengard",

"Minas Tirith",

"Minas Morgul"

],

answer: 1
//"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2017/05/Fangorn-treebeard-ent-Lord-of-the-Rings.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What is Gimli’s father’s name?",

options: [

"Gloin",

"Balin",

"Thorin",

"Dwalin"

],

answer: 0
//"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2017/05/Gimli-Lord-of-the-Rings-John-Rhys-Davies.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What is the name of Gandalf’s horse?",

options: [

"Arod",

"Brego",

"Asfaloth",

"Shadowfax"

],

answer: 3
//"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2017/11/Gandalf-Shadowfax-The-Lord-of-the-Rings-e1523572033819.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What is the name of the gathering at Rivendell?",

options: [

"The Gathering of the Fellowship",

"The Council of the Fellowship",

"The Council of Elrond",

"The Gathering of the Ring"

],

answer: 2
//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2017/05/Boromir-Sean-Bean-Lord-of-the-Rings-One-does-not-simply.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "How many times does Frodo put on the Ring in the movies?",

options: [

"2",

"3",

"4",

"5"

],

answer: 2
//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2017/08/LordOTRingsFellowship_086Pyxurz-e1520799550550.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "Where is Boromir’s home?",

options: [

"Gondor",

"Rohan",

"Beleriand",

"Aman"

],

answer: 0
//"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2017/08/LOTR-Fellowship-of-the-Ring-230-e1503608970137.jpg?q=50&fit=crop&w=963&h=483&dpr=1.5"

},

{

q: "Who delivers the killing blow to the troll in the Mines of Moria?",

options: [

"Legolas",

"Frodo",

"Gimli",

"Aragorn"

],

answer: 0
//"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2017/08/screenshot-lord-of-the-rings-the-fellowship-of-the-ring-film-5-e1503609217733.jpg?q=50&fit=crop&w=963&h=482&dpr=1.5"

},

{

q: "Where does Aragorn first toss Gimli?",

options: [

"During the Skirmish at Amon Hen",

"At the Battle of Helm's Deep",

"In the Mines of Moria",

"In Fangorn Forest"

],

answer: 1
//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2017/06/Gimli-in-The-Lord-of-the-Rings.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What is another name for the Seeing-Stones?",

options: [

"Crystal Ball",

"Sauron's Stone",

"Saruman's Eye",

"Palantiri"

],

answer: 3
//"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2017/11/Saruman-The-Lord-of-the-Rings.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What forest does Treebeard live in?",

options: [

"Lothlorien",

"Forest of Fangworn",

"Old Forest",

"Mirkwood"

],

answer: 2
//"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2017/06/Treebeard-in-The-Lord-of-the-Rings-The-Two-Towers.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

}

]

// set questions and options and question number
totalQuestionSpan.innerHTML = 10;

function load() {
    questionNumberSpan.innerHTML = index + 1;
    question.innerHTML = questions[questionIndex].q;
    op1.innerHTML = questions[questionIndex].options[0];
    op2.innerHTML = questions[questionIndex].options[1];
    op3.innerHTML = questions[questionIndex].options[2];
    op4.innerHTML = questions[questionIndex].options[3];
    index++;
}

function check(element) {
    if (element.id == questions[questionIndex].answer) {
        element.classList.add("correct");
        updateAnswerTracker("correct")
        score++;
        
    } else {
        element.classList.add("wrong");
        updateAnswerTracker("wrong")
        
    }
    disabledOptions();
}

function disabledOptions() {
    for (let i = 0; i < options.length; i++) {
        options[i].classList.add("disabled");
        if (options[i].id == questions[questionIndex].answer) {
            options[i].classList.add("correct");
        }
    }
}

function enableOptions() {
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("disabled", "correct", "wrong");
    }

}

function validate() {
    if (!options[0].classList.contains("disabled")) {
        alert("Please select one option!")
    } else {
        enableOptions();
        randomQuestion();
    }
}

function next() {
    validate();
}

function randomQuestion() {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = 0;
    if (index == 10) {
        quizOver();
    } else {
        if (myArray.length > 0) {
            for (let i = 0; i < myArray.length; i++) {
                if (myArray[i] == randomNumber) {
                    hitDuplicate = 1;
                    break;
                }
            }
            if (hitDuplicate == 1) {
                randomQuestion();
            } else {
                questionIndex = randomNumber;
                load();
                myarr.push(questionIndex);
            }
        }
        if (myArray.length == 0) {
            questionIndex = randomNumber;
            load();
            myarr.push(questionIndex);
        }
       
        myArray.push(randomNumber);
    }

    

}

function answerTracker() {
    for (let i = 0; i < 10; i++) {
        const div = document.createElement("div")
        answerTrackerContainer.appendChild(div);
    }
}

function updateAnswerTracker(classNam) {
    answerTrackerContainer.children[index - 1].classList.add(classNam);
}

function quizOver(){
    document.querySelector(".quiz-over").classList.add("show");
    correctAnswerSpan.innerHTML=score;
    totalQuestionSpan2.innerHTML=10;
    percentage.innerHTML=(score/10)*100+"%";
}
function tryAgain(){
    window.location.reload();
}

window.onload = function () {
    randomQuestion();
    answerTracker();
}
