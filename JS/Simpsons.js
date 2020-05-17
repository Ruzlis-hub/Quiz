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

q: "Which member of the Simpson family is the only one to have dialogue in every episode?",

options: [

"Homer",

"Marge",

"Lisa",

"Bart"

],

answer: 0

//"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/08/simpsons-fam-usa-today-e1534958898208.jpg?q=50&fit=crop&w=963&h=505&dpr=1.5"

},

{

q: "Which of the following phrases was not said by the talking Malibu Stacy doll?",

options: [

"Don't ask me, I'm just a girl",

"Let's bake some cookies for the boys",

"Now, let's forget our troubles with a big bowl of strawberry ice cream",

"Math is for nerds"

],

answer: 3

//"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/08/lisa-vs-malibu-stacy-daily-dot-e1534960179424.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},


{

q: "What does Bart name the elephant he wins in a local radio station contest?",

options: [

"Trampy",

"Stampy",

"Dumbo",

"Homer"

],

answer: 1

//"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2018/08/kbbl-e1534961746518.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What is the name of the female coworker to whom Homer finds himself attracted?",

options: [

"Cindy",

"Mindy",

"Mandy",

"Sandy"

],

answer: 1

//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/08/homer-and-marge-la-times-e1534965728992.jpg?q=50&fit=crop&w=963&h=482&dpr=1.5"

},

{

q: "Which of the following was not a childhood experience that contributed to Marge’s fear of flying?",

options: [

"She found out her father was a steward",

"She played with an airplane toy that caught on fire",

"She found out her father cheated on her mother with a stewardess",

"She and her mother were attacked by a plane in a cornfield"

],

answer: 2

//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/08/homer-marge-deadline-e1534969961494.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What dream job did Homer quit when he found out that Marge was pregnant with Maggie?",

options: [

"Working at a bowling alley",

"Working at Moe's",

"Working at a nightclub",

"Working at an airport"

],

answer: 0

//"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2018/08/maggie-oscars-e1534973803850.jpg?q=50&fit=crop&w=963&h=482&dpr=1.5"

},

{

q: "Who shot Mr. Burns?",

options: [

"Homer Simpson",

"Maggie Simpson",

"Waylon Smithers",

"Moe Szyslak"

],

answer: 1

//"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/08/mr.-burns-ew-e1534975070726.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "Why does Homer want to gain weight and work from home?",

options: [

"To get out of a safety training at work",

"To win a bet with Lenny",

"To get out of an exercise program at work",

"To win a world record"

],

answer: 2

//"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/08/homer-donut-pinterest-e1534975891953.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What is the name of the college-aged cool guy who comes to live with the Simpsons in The Itchy & Scratchy & Poochie Show episode?",

options: [

"Ray",

"Roy",

"Rob",

"Bob"

],

answer: 1

//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/08/fox-studio-e1534978137489.jpeg?q=50&fit=crop&w=963&h=483&dpr=1.5"

},

{

q: "What are the names of the aliens that frequently visit Springfield?",

options: [

"Kung and Kidos",

"Kong and Kados",

"Kang and Kodos",

"King and Kudos"

],

answer: 2

//"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/08/kang-and-kodos-e1543524036320.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What is the name of the nanny Marge hires to help around the house?",

options: [

"Shary Bobbins",

"Mary Poppins",

"Shary Hobbins",

"Mary Dobbins"

],

answer: 0

//"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2018/08/marge-homer-bed-ksite-tv-e1534982181959.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "How does Homer’s car end up parked in New York City?",

options: [

"Homer leaves it there",

"Snake steals it",

"Barney leaves it there",

"Lenny and Carl leave it there"

],

answer: 2

//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/08/new-york-car-dskfjsh.jpg?q=50&fit=crop&w=963&h=503&dpr=1.5"

},

{

q: "Who is Lisa’s date to the school dance?",

options: [

"Millhouse Van Houten",

"Nelson Muntz",

"Ralph Wiggum",

"She doesn't have one"

],

answer: 3

//"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/08/lisa-school-imdb-e1534988002587.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "Which of the following was not one of the names that Homer tried to change his name to?",

options: [

"Cruise B. Renaissance",

"Rembrandt Q. Einstein",

"Hercules Rockefeller",

"Handsome B. Wonderful"

],

answer: 0

//"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/08/homer-screen-rant-e1534988318385.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What is the one-liner Bart became famous for after an appearance on The Krusty the Clown Show?",

options: [

"Don't have a cow, man",

"I didn't do it",

"Aye, carumba",

"Nobody better lay a finger on my Krusty burger"

],

answer: 1

//"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2018/08/bart-thoughtco-e1534989566811.jpg?q=50&fit=crop&w=963&h=482&dpr=1.5"

},

{

q: "Which of the following bands was not a part of the Hullabalooza lineup?",

options: [

"Sonic Youth",

"The Smashing Pumpkins",

"Green Day",

"Cypress Hill"

],

answer: 2

//"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/08/simpsons-band-dskfjhds.jpg?q=50&fit=crop&w=963&h=503&dpr=1.5"

},

{

q: "What cover story do Bart and his friends give their parents when they go on an unsupervised road trip?",

options: [

"That they're going to the National Spelling Bee in Canada",

"That they're going to the National Grammar Rodeo in Canada",

"That they're volunteering at a wildlife preserve in Canada",

"That they're singing in the National Boys' Choir Competition in Canada"

],

answer: 1

//"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/08/bart-driving-reddit-e1534991183103.png?q=50&fit=crop&w=963&h=482&dpr=1.5"

},

{

q: "What does the “J” in Homer J. Simpson stand for?",

options: [

"John",

"Jim",

"Jay",

"Jack"

],

answer: 2

//"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2018/08/homer-bart-grandpa-tsox-e1534992456821.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "Why does Apu get fired from the Kwik-E-Mart?",

options: [

"He steals merchandise",

"He sells Homer tainted meat",

"He lives in the back room",

"He falls asleep on the job"

],

answer: 1

//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/08/apu-yahoo-e1534993618173.jpg?q=50&fit=crop&w=963&h=482&dpr=1.5"

},

{

q: "Which of the following Springfield residents was not voiced by Phil Hartman?",

options: [

"God",

"Lionel Hutz",

"Artie Ziff",

"Lyle Lanley, the Monorail salesman"

],

answer: 2

//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/08/troy-mcclure-dkjshf.jpg?q=50&fit=crop&w=963&h=503&dpr=1.5"

},

{

q: "What does Hank Scorpio give Homer as a farewell gift after he resigns from Globex Corporation?",

options: [

"The Denver Broncos",

"The Dallas Cowboys",

"The Miami Dolphins",

"The New England Patriots"

],

answer: 0

//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/08/simpsons-family-the-verge-e1534994691646.jpg?q=50&fit=crop&w=963&h=482&dpr=1.5"

},

{

q: "What Hollywood power couple hires Homer to be their personal assistant while visiting Springfield?",

options: [

"Susan Sarandon and Tim Robbins",

"Tom Hanks and Rita Wilson",

"Alec Baldwin and Kim Besinger",

"John Stamos and Rebecca Romijin"

],

answer: 2

//"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2018/08/homer-marge-time-e1534995824755.jpg?q=50&fit=crop&w=963&h=482&dpr=1.5"

},

{

q: "What bad act does Jessica Lovejoy pull that she lets Bart take the blame for?",

options: [

"She vandalizes the church stairs",

"She pulls a prank on Groundskeeper Willie",

"She takes candy from a baby",

"She steals money from the church collection plate"

],

answer: 3

//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/08/jessica-lovejoy-e1534996448256.jpg?q=50&fit=crop&w=963&h=482&dpr=1.5"

},

{

q: "How does Homer help Marge drum up business for her Pretzel Wagon franchise?",

options: [

"He turns to Mr. Burns for help",

"He turns to Fat Tony for help",

"He buys all of the pretzels himself",

"He blows up the Fleet-a-Pita truck"

],

answer: 1

//"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/08/marge-money-time-e1535025777315.jpg?q=50&fit=crop&w=963&h=482&dpr=1.5"

},

{

q: "What caused Grandpa Simpson’s kidneys to fail necessitating a life-saving transplant operation?",

options: [

"He drinks toxic water from the river near the power plant",

"He gets exposed to radiation at the nuclear power plant",

"He takes an experimental frug that lists renal explosion as a side effect",

"Homer refuses to pull over for a bathroom break during a long road trip"

],

answer: 3

//"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/08/grampa-simpson-sdkjfds.jpg?q=50&fit=crop&w=963&h=503&dpr=1.5"

},

{

q: "Which critic from another animated series came to Springfield to judge the film festival?",

options: [

"Gene Siskel",

"Roger Ebert",

"Jay Sherman",

"Armond White"

],

answer: 2

//"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2019/01/simpsons_06_23__719260.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What is the name of the store owned by Ned Flanders?",

options: [

"Leftovers",

"The Lefty Store",

"Southpaws",

"The Leftorium"

],

answer: 3

//"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2018/04/Ned-Flanders-the-simpsons.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "In what movie-based musical did Troy McClure play the human?",

options: [

"Planet of the Apes: The Musical",

"Wizzard of Oz: The Musical",

"Cats",

"Independence Day: the Musical"

],

answer: 0

//"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2019/01/troy-mcclure-facts-Cropped.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What dish does Principal Skinner claim he cooked himself for his lunch with Superintendent Chalmers?",

options: [

"Roast Pork",

"Steamed Hams",

"Baked Bacon",

"Wadded Beef"

],

answer: 1

//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2019/01/steamed-hams-Cropped.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What is the name of the country singer whom Homer manages?",

options: [

"Bessie Bumpkin",

"Pauline Pumpkin",

"Lurleen Lumpkin",

"Maureen Mumpkin"

],

answer: 2

//"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2019/01/simp_LurleenLumpkin_F-56a00c535f9b58eba4aea8f0.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What is the name of the song Kirk Van Houten sings in order to win back his wife?",

options: [

"Do You Have My Heart?",

"Can I Borrow a Feeling?",

"Can You Spare Some Romance?",

"Could You Lend Me Some Love?"

],

answer: 1

//"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2019/01/Simpsons_08_08-Cropped.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "Which famous astronaut went into space with Homer?",

options: [

"Neil Armstrong",

"Jim Lovell",

"Buzz Aldrin",

"John Glenn"

],

answer: 2

//"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2019/01/Simpsons_05_15__481014-Cropped.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What makes the talking Malibu Stacy doll suddenly more popular than Lisa's doll?",

options: [

"New phrases",

"A new hat",

"Different hair",

"A new dress"

],

answer: 1

//"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2019/01/Simpsons_05_14_P2-Cropped.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "What is the name of Mr. Burns's long lost teddy bear?",

options: [

"Coco",

"Pookie",

"Bobo",

"Baba"

],

answer: 2

//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2019/01/Simpsons_05_03-Cropped.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "Which of Lisa's classmates fell in love with her after a misinterpreted Valentine's Day card?",

options: [

"Ralph Wiggum",

"Martin Prince",

"Milhouse Van Houten",

"Nelson Muntz"

],

answer: 0

//"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2019/01/Simpsons_04_15-Cropped.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

{

q: "When Homer sells his soul to the devil, what does he get in return?",

options: [

"A day off",

"A donut",

"A vacation",

"A boat"

],

answer: 1

//"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2019/01/download-Cropped.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

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
