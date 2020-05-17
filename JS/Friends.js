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

        q: "Which FRIENDS are siblings?",
        options: [
"Monica and Ross",
"Rachel and Monica",
"Chandler and Joey",
"Phoebe and Joey"],

        answer: 0

        //"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/04/21-20.jpg?q=50&fit=crop&w=963&h=541&dpr=1.5"

},

    {

        q: "Who did Rachel almost marry?",

        options: [
"Paolo",
"Barry",
"Richard",
"Joey"
],

        answer: 1

        //"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2018/04/rachel-wedding.jpg?q=50&fit=crop&w=963&h=541&dpr=1.5"

},


    {

        q: "What is Joey's catchphrase?",

        options: [
"Hey what's up?",
"How's it hanging?",
"How you doing?",
"How are ya"
],

        answer: 2

        //"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2018/02/friends_307_joey_teaching_tricks_of_the_trade-e1519854784148.jpg?q=50&fit=crop&w=963&h=500&dpr=1.5"

},

    {

        q: "What instrument does Phoebe play?",

        options: [
"Guitar",
"Violin",
"Piano",
"Ukulele"
],

        answer: 0

        //"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2018/01/phoebe-friends.jpg?q=50&fit=crop&w=963&h=541&dpr=1.5"

},

    {

        q: "Where are Ross, Rachel, and Monica from?",

        options: [
"Connecticut",
"Long Island",
"New Jersey",
"Westchester"
],

        answer: 1

        //"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/04/monica-and-rachel-e1523805542305.jpg?q=50&fit=crop&w=963&h=513&dpr=1.5"

},

    {

        q: "What is the name of the coffee house the Friends hangout at?",

        options: [
"Cenral Perk",
"Starbucks",
"Central Coffee",
"NYC Perks"
],

        answer: 0

        //"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2018/04/friends-central-perk-e1523805573439.jpg?q=50&fit=crop&w=963&h=495&dpr=1.5"

},

    {

        q: "Where do the Friends all live?",

        options: [
"Chicago",
"Los Angeles",
"New York City",
"Houston"
],

        answer: 2

        //"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/04/friends-4-e1523805594796.jpg?q=50&fit=crop&w=963&h=579&dpr=1.5"

},

    {

        q: "Who is the paleontologist?",

        options: [
"Joey",
"Ross",
"Monica",
"Chandler"
],

        answer: 1

        //"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/04/21-20.jpg?q=50&fit=crop&w=963&h=541&dpr=1.5"

},

    {

        q: "Which Friend dates Janice first?",

        options: [
"Joey",
"Ross",
"Chandler",
"Gunther"
],

        answer: 2

        //"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2018/04/janice.jpg?q=50&fit=crop&w=963&h=597&dpr=1.5"

},

    {

        q: "What does Monica do for work?",

        options: [
"She's a waitress",
"She's a massesuse",
"She's a doctor",
"She's a chef"
],

        answer: 3

        //"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/04/Monica-Gellar-e1523550839314.jpg?q=50&fit=crop&w=963&h=490&dpr=1.5"

},

    {

        q: "What does Joey do for work?",

        options: [
"Singer",
"Model",
"Actor",
"Nothing"
],

        answer: 2

        //"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/04/joey-tribbiani-e1523550363486.jpg?q=50&fit=crop&w=963&h=508&dpr=1.5"

},

    {

        q: "What show do Joey and Chandler love to watch?",

        options: [
"Jeopardy",
"Baywatch",
"Wheel of Fortune",
"Days of Our Lives"
],

        answer: 1

        //"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/04/baywatch-e1523805651700.jpg?q=50&fit=crop&w=963&h=491&dpr=1.5"

},

    {

        q: "Which pets do Joey and Chandler have?",

        options: [
"Dogs",
"A chick and a duck",
"Cats",
"Rat babies"
],

        answer: 1

        //"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/04/The-Chick-and-the-Duck-e1523757533231.jpg?q=50&fit=crop&w=963&h=413&dpr=1.5"

},

    {

        q: "What is the neighbor's name that lives below Rachel and Monica?",

        options: [
"Mr. Heckles",
"Mr. Treiger",
"Gunther",
"Mr. Sheck"
],

        answer: 0,

        //"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/02/Heckles.jpg?q=50&fit=crop&w=963&h=542&dpr=1.5"

},

    {

        q: "What is Ross' son's name?",

        options: [
"Cole",
"Dylan",
"Michael",
"Ben"
],

        answer: 3

        //"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/04/maxresdefault-119.jpg?q=50&fit=crop&w=963&h=541&dpr=1.5"

},

    {

        q: "Who is Carol's partner?",

        options: [
"Ursula",
"Susan",
"Phoebe",
"Monica"

],

        answer: 1

        //"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/04/carol-susan.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

    {

        q: "What is Ross' monkey's name?",

        options: [
"Paolo",
"Marcus",
"Sir",
"Marcel"
],

        answer: 3

        //"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/04/ross-marcel.jpg?q=50&fit=crop&w=963&h=541&dpr=1.5"

},

    {

        q: "What does Ross buy for Rachel's birthday?",

        options: [
"A necklace",
"A brooch",
"Flowers",
"A sweater"
],

        answer: 1

        //"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/04/rachel-brooch.png?q=50&fit=crop&w=963&h=542&dpr=1.5"

},

    {

        q: "What do Ross and Rachel name their daughter?",

        options: [
"Erika",
"Emma",
"Karen",
"Michaela"
],

        answer: 1

        //"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/04/emma.png?q=50&fit=crop&w=963&h=505&dpr=1.5"

},

    {

        q: "Who dates Richard?",

        options: [
"Racher",
"Phoebe",
"Ursula",
"Monica"
],

        answer: 3

        //"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/04/richard.png?q=50&fit=crop&w=963&h=540&dpr=1.5"

},

    {

        q: "Who does Phoebe end up with?",

        options: [
"Joey",
"Mike",
"David",
"Duncan"
],

        answer: 1

        //"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/04/phoebe-wedding.jpg?q=50&fit=crop&w=963&h=541&dpr=1.5"

},

    {

        q: "Where do Chandler and Monica hook up for the first time?",

        options: [
"In Monica's apartment",
"In London",
"In Central Perk",
"At Chandler's apartment"
],

        answer: 1

        //"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/04/monica-chandler.jpg?q=50&fit=crop&w=963&h=577&dpr=1.5"

},

    {

        q: "Where do Ross and Rachel get married?",

        options: [
"London",
"Vegas",
"Church",
"Outside Central Perk"
],

        answer: 1

        //"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/04/ross-rachel-1.jpg?q=50&fit=crop&w=963&h=541&dpr=1.5"

},

    {

        q: "Which Friend used to be fat?",

        options: [
"Rachel",
"Monica",
"Joey",
"Chandler"
],

        answer: 1

        //"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2018/04/friends-141255-e1523549708990.jpg?q=50&fit=crop&w=963&h=537&dpr=1.5"

},

    {

        q: "Who have been friends since high school?",

        options: [
"Phoebe and Rachel",
"Monica and Rachel",
"Joey and Chandler",
"Ross and Chandler"
],

        answer: 1

        //"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2018/03/friends-nbc-1120.jpg?q=50&fit=crop&w=963&h=549&dpr=1.5"

},

    {

        q: "Who have been friends since college?",

        options: [
"Joey and Chandler",
"Ross and Chandler",
"Ross and Rachel",
"Monica and Joey"
],

        answer: 1

        //"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/03/friends-copy-2.jpg?q=50&fit=crop&w=963&h=554&dpr=1.5"

},

    {

        q: "Which Friend was once homeless?",

        options: [
"Monica",
"Phoebe",
"Joey",
"Gunther"
],

        answer: 1

        //"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2018/03/Monica-apartment-friends-rachel-ross-joey-chandler-phoebe-e1522121037105.jpg?q=50&fit=crop&w=963&h=541&dpr=1.5"

},

    {

        q: "Which Friend has a twin?",

        options: [
"Monica",
"Ross",
"Rachel",
"Phoebe"
],

        answer: 3

        //"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/04/friends.jpg?q=50&fit=crop&w=963&h=719&dpr=1.5"

},

    {

        q: "Who introduced Phoebe and Mike?",

        options: [
"Gunther",
"Joey",
"Chandler",
"Ross"
],

        answer: 1

        //"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/04/phoebe-mike.jpg?q=50&fit=crop&w=963&h=639&dpr=1.5"

},

    {

        q: "What song does Ross sing to Emma that makes her laugh?",

        options: [
"Anaconda",
"I like big butts",
"Thriller",
"Stacy's Mom"
],

        answer: 1

        //"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/04/emma-ross.jpg?q=50&fit=crop&w=963&h=665&dpr=1.5"

},

    {

        q: "Where is Rachel's first job after moving to the city?",

        options: [

"Ralph Lauren",

"Central Perk",

"Starbucks",

"Gucci"

],

        answer: 1

        //"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/04/17-rachel-green-jewish.w529.h352-e1523550448401.jpg?q=50&fit=crop&w=963&h=505&dpr=1.5"

},

    {

        q: "What is the building superintendant's name?",

        options: [

"Gunther",

"Treeger",

"Heckles",

"Jack"

],

        answer: 1

        //"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2018/04/treegar.jpg?q=50&fit=crop&w=963&h=456&dpr=1.5"

},

    {

        q: "What is the name of Chandler's crazy roommate?",

        options: [

"Mona",

"Marcus",

"Matthew",

"Eddie"

],

        answer: 3,

        //"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/04/eddie.jpg?q=50&fit=crop&w=963&h=541&dpr=1.5"

},

    {

        q: "Which of Phoebe's songs gets made into a music video?",

        options: [

"Your Love",

"Shower Song",

"Smelly Cat",

"Little Black Curly Hair"

],

        answer: 2

        //"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/04/phoebe-music.jpg?q=50&fit=crop&w=963&h=541&dpr=1.5"

},

    {

        q: "What is Richard's job?",

        options: [

"Podiatrist",

"Ophthalmologist",

"Gynecologist",

"Dentist"

],

        answer: 1

        //"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/04/08-richard-friends.w529.h352-e1523550868390.jpg?q=50&fit=crop&w=963&h=487&dpr=1.5"

},

    {

        q: "Which Friend gives birth to triplets?",

        options: [

"Phoebe",

"Rachel",

"Monica",

"Susan"

],

        answer: 0

        //"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/04/friends-triplets.jpg?q=50&fit=crop&w=963&h=728&dpr=1.5"

},

    {

        q: "Whose father has a show in Las Vegas?",

        options: [

"Ross'",

"Chandler's",

"Joey's",

"Rachel's"

],

        answer: 1

        //"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/04/chandler-dad.jpg?q=50&fit=crop&w=963&h=642&dpr=1.5"

},

    {

        q: "Where is Rachel planning to move in The Last One?",

        options: [

"Los Angeles",

"Paris",

"London",

"Venice"

],

        answer: 1

        //"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/04/rachel-plane.jpg?q=50&fit=crop&w=963&h=541&dpr=1.5"

},

    {

        q: "What did Janice's ex husband sell?",

        options: [

"Cars",

"Matresses",

"Computers",

"Cameras"

],

        answer: 1

        //"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/04/janice-husband.png?q=50&fit=crop&w=963&h=542&dpr=1.5"

},

    {

        q: "What did Rachel and Chandler eat off of the floor?",

        options: [

"Ice Cream",

"Pasta",

"Souffle",

"Cheesecake"

],

        answer: 3

        //"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/04/rachel-chandler-e1523762366966.jpg?q=50&fit=crop&w=963&h=658&dpr=1.5"

},

    {

        q: "What does Phoebe get a tattoo of?",

        options: [

"The sun",

"The whole world",

"A freckle",

"A heart"

],

        answer: 1

        //"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2018/04/phoebe-tattoo.jpg?q=50&fit=crop&w=963&h=724&dpr=1.5"

},

    {

        q: "Where does Phoebe's birth mom live?",

        options: [

"Connecticut",

"Montauk",

"Upstate NY",

"Pennsylvania"

],

        answer: 1

        //"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2018/04/phoebe-birth-mother.jpg?q=50&fit=crop&w=963&h=541&dpr=1.5"

},

    {

        q: "Which Friend gets their identity stolen?",

        options: [

"Rachel",

"Monica",

"Phoebe",

"Ursula"

],

        answer: 1

        //"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/03/849776_desktop-wallpapers-friends_1483x1500_h.jpg?q=50&fit=crop&w=963&h=677&dpr=1.5"

},

    {

        q: "What is Chandler's Mom's job??",

        options: [

"Actress",

"Author",

"Stay at home mom",

"Masseuse"

],

        answer: 1

        //"picture": "https://static0.thequizimages.com/wordpress/wp-content/uploads/2018/04/chandler-mom.jpg?q=50&fit=crop&w=963&h=541&dpr=1.5"

},

    {

        q: "What is Joey's favorite food?",

        options: [

"Potatoes",

"Sandwiches",

"Ice Cream",

"Macaroni"

],

        answer: 1

        //"picture": "https://static3.thequizimages.com/wordpress/wp-content/uploads/2017/12/Joey-Tribbiani.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"

},

    {

        q: "What plastic surgery does Rachel have when she was a teenager?",

        options: [

"Botox",

"Nose Job",

"Breast Implants",

"Butt Lift"

],

        answer: 1

        //"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/04/rachel-monica-college.jpg?q=50&fit=crop&w=963&h=627&dpr=1.5"

},

    {

        q: "What does Phoebe change her name to?",

        options: [

"Princess Consuela Banana Hammock",

"Crap Bag",

"Phoebe Buffay",

"Phoebe Hannigan"

],

        answer: 0

        //"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/04/TOWPrincessConsuela.jpg?q=50&fit=crop&w=963&h=729&dpr=1.5"

},

    {

        q: "Where do they all travel to when Ross is a key note speaker?",

        options: [

"Miami",

"San Diego",

"Jamaica",

"Barbados"

],

        answer: 3

        //"picture": "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/04/barbados.jpg?q=50&fit=crop&w=963&h=541&dpr=1.5"

},

    {

        q: "Who gave birth to Chandler and Monica's twins?",

        options: [

"Ursula",

"Erika",

"Phoebe",

"Mona"

],

        answer: 1

        //"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/04/monica-chandler-baby.png?q=50&fit=crop&w=963&h=704&dpr=1.5"

},

    {

        q: "What game did Chandler make up to give Joey money?",

        options: [

"Bamboozle",

"Cups",

"Yahtzee",

"Flip a coin"

],

        answer: 1

        //"picture": "https://static1.thequizimages.com/wordpress/wp-content/uploads/2018/04/friends-cups.jpg?q=50&fit=crop&w=963&h=541&dpr=1.5"

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
