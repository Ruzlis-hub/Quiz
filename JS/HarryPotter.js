const options = document.querySelector(".options").children;
const answerTrackerContainer = document.querySelector(".answers-tracker");
const questionNumberSpan = document.querySelector(".question-num-value");
const totalQuestionSpan = document.querySelector(".total-question");
const correctAnswerSpan=document.querySelector(".correct-answers");
const totalQuestionSpan2=document.querySelector(".total-question2");
const percentage=document.querySelector(".percentage");
const question = document.querySelector(".question");
const picture = document.querySelector(".img");
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

q: "Who sold Harry his wand?",

options: [

"Gregorovitch",

"Ollivander",

"Paverell",

"Steward"

],

answer: 1,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/08/12-Harry-Potter-the-Sorcerer-s-Stone-Harry-s-Wand-YouTube.jpg"

},
{

q: "What is the name of the boarhound that is Hagrid's pet?",

options: [

"Fang",

"Fluffy",

"Norbert",

"Buckbeak"

],

answer: 0,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/07/hagrid.jpg"

},



{

q: "When Harry lived with the Dursleys, they would sometimes leave him with this neighbor, who was later revealed to be a squib.",

options: [

"Arabella Figg",

"Marius Black",

"Ellen Cracknell",

"Martha Steward"

],

answer: 0,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2017/11/harrywizard.jpg"

},

{

q: "This character was part of the Order of the Phoenix, but also had notoriously sticky fingers that sometimes get him into trouble.",

options: [

"Elphias Doge",

"Dedalus Diggle",

"Kingsley Shacklebolt",

"Mundungus Fletcher"

],

answer: 3,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/08/12-Harry-Potter-and-the-Deathly-Hallows-part-1-Harry-Hermione-and-Ron-at-Grimmauld-Place-part-2-YouTube-1.jpg"

},

{

q: "This house-elf served Barty Crouch and featured heavily in the events of the Goblet of Fire.",

options: [

"Kreacher",

"Dobby",

"Winky",

"Snatcher"

],

answer: 2,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2017/11/dobby.jpg"

},

{

q: "This wizard was the Head of the Department of Magical Games during the Quidditch World Cup in England.",

options: [

"Ludo Bagman",

"Barty Crouch",

"Cornelius Fudge",

"Rufus Scrimgeour"

],

answer: 0,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/08/12-Harry-Potter-The-Quidditch-World-Cup-YouTube.jpg"

},
    
{

q: "What is Professor Hooch's first name?",

options: [

"Charity",

"Sybil",

"Poppy",

"Rolanda"

],

answer: 3,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/08/u.jpg"

},

{

q: "What is the name of the editor of the Quibbler?",

options: [

"Romilda Vane",

"Xenophilius Lovegood",

"Augusta Longbottom",

"Cormac McLaggen"

],

answer: 1,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/08/12-Harry-Potter-and-the-Deathly-Hallows-Xenophilius-Lovegood-Clip-YouTube-2.jpg"

},

{

q: "Ron and Harry attended the Yule Ball in their fourth year with a pair of twins. Name those twins.",

options: [

"Pasha and Padma",

"Priya and Pasha",

"Priya and Padma",

"Parvati and Padma"

],

answer: 3,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/08/12-1080p-HD-Harry-Potter-and-the-Goblet-of-Fire-Yule-Ball-Scene-Potter-Waltz-YouTube.jpg"

},

{

q: "Name the three brothers who were the original owners of the Deathly Hallows.",

options: [

"Cadmus, Obelius, and Rastor",

"Cadmus, Antioch and Ignotus",

"Deacon, Ignotus, and Obelius",

"Rastor, Deacon, and Obelius"

],

answer: 1,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/08/12-Harry-Potter-and-the-Deathly-Hallows-Part-1-3-5-Movie-CLIP-The-Three-Brothers-2010-HD-YouTube-1.png"

},

{

q: "Name the four founders of the Hogwarts houses.",

options: [

"Helga Hufflepuff, Salazar Slytherin, Godric Gryffindor and Rowena Ravenclaw",

"Harriet Hufflepuff, Sirius Slytherin, Gallant Gryffindor, and Rowena Ravenclaw",

"Harriet Hufflepuff, Salazar Slytherin, Godric Gryffindor, and Romera Ravenclaw",

"Hannah Hufflepuff, Scamander Slytherin, Gellert Gryffindor, and Rita Ravenclaw"

],

answer: 0,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2017/12/hogwarts-409652491.jpg"

},

{

q: "What is the name of the knight who briefly replaces the Fat Lady as the Gryffindor portrait, and who is always a bit overenthusiastic?",

options: [

"Sir Hartford",

"Sir Ictheus",

"Sir Cadogan",

"Sir Harrogan"

],

answer: 2,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/08/12-Voldemort-in-portrait-YouTube.jpg"

},

{

q: "Who is the Ancient Runes teacher at Hogwarts?",

options: [

"Bathsheda Babbling",

"Betram Aubrey",

"Falco Aesalon",

"Oswald Beamish"

],

answer: 0,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/08/HP-Bathsheda-Babbling.jpg"

},

{

q: "Do you remember the name of the leader singer from the Weird Sisters?",

options: [

"Herman Wintringham",

"Merton Graves",

"Myron Wagtail",

"Heathcote Barbary"

],

answer: 2,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/08/weird-sisters-HP.jpg"

},

{

q: "What is Sirius Black's father's name?",

options: [

"Silver Black",

"Marius Black",

"Melania Black",

"Orion Black"

],

answer: 3,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/08/siruis-black.jpg"

},

{

q: "Who is the author of Advanced Potion-Making?",

options: [

"Blodwyn Bludd",

"Libatius Borage",

"Falco Aesalon",

"Rupert “Axebanger” Brookstanton"

],

answer: 1,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/08/HP-potions-class-.jpg"

},

{

q: "What's the name of the Ministry of Magic employee in the Department of Mysteries that was killed by Devil's Snare?",

options: [

"Broderick Bode",

"Randolph Salizar",

"Levski",

"Tetram Aubrey"

],

answer: 0,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/08/minstry-of-magic.jpg"

},

{

q: "If you say alohomora what are you doing?",

options: [

"Attacking someone",

"Disarming someone",

"Unlocking something",

"Levitating something"

],

answer: 2,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2017/11/hermione.jpg"

},

{

q: "When you yell expecto patronum you create a Patronus. Which creature does that protect you from?",

options: [

"A Dementor",

"A Basilisk",

"An Acromantula",

"A Centaur"

],

answer: 0,
    picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/06/dementor.png"

},

{

q: "This spell makes something float, and famously, Hermione corrected Ron's pronunciation of it.",

options: [

"Expelliarmus",

"Lumos",

"Wingardium Leviosa",

"Accio"

],

answer: 2,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/04/Ron-Weasley.png"

},

{

q: "If you're in a duel and yell expelliarmus! what can you expect to happen to your opponent?",

options: [

"Their spell will end.",

"They’ll be thrown into the air.",

"They will be disarmed.",

"They’ll be knocked back."

],

answer: 2,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/04/Draco-Malfoy.jpg"

},

{

q: "Gilderoy Lockhart's favorite spell was obliviate. What did it do?",

options: [

"Confuse magical creatures",

"Improve his hair",

"Charm people",

"Erase memories"

],

answer: 3,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/06/gilderoy.jpg"

},

{

q: "What is the combined name of Avada Kedavra, Crucio, and Imperio?",

options: [

"The Forbidden Spells",

"The Final Hexes",

"The Unforgivable Curses",

"The Impossible Curses"

],

answer: 2,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/06/voldemort.jpg"

},

{

q: "Lumos creates light at the end of your wand. Which spell extinguishes the light?",

options: [

"Nox",

"Flipendo",

"Tenebrio",

"Umbris"

],

answer: 0,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/06/spell_50507338.jpg"

},

{

q: "Which of these words is the curse invented by Severus Snape when he was a teen?",

options: [

"Sectumsempra",

"Finestra",

"Morsmordre",

"Avada Kedavra"

],

answer: 0,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/06/snape.jpg"

},

{

q: "In one book, Ron uses the diffindo spell to do some last minute sewing. What does the spell do?",

options: [

"Ties something together!",

"Colors something",

"Mends something",

"Cuts something"

],

answer: 3,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/04/Ron-Weasley.png"

},

{

q: "What is the name of the spell that creates a Secret Keeper and can hide information from someone?",

options: [

"Protego",

"Fidelius Charm",

"Impedimenta",

"Dissendium"

],

answer: 1,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/07/spell_50443720.jpg"

},

{

q: "What is the alternative name for the jelly-legs curse?",

options: [

"Perambulator tremulous",

"Pedimento puddly",

"Locomotor wibbly",

"Quiver ambulataro"

],

answer: 2,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/04/Neville-Longbottom.jpg"

},

{

q: "Legilimens is a spell that allows the caster to do what?",

options: [

"Move things with their mind.",

"Speak through thoughts to another person.",

"Hide their mind from someone else.",

"Look into someone else’s mind."

],

answer: 3,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/07/snape.jpg"

},

{

    q: "The Aberto spell does what when used on doors?",

options:[

"Locks",

"Opens",

"Closes",

"Breaks Down"

],

answer: 1,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/04/handondoor-902184672.jpg"

},

{

q: "Accio is known as the ______ Charm",

options: [

"Summoning",

"Flying",

"Flinging",

"Conjuring"

],

answer: 0,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/10/womanfloating-182030131.jpg"

},

{

q: "Which of these spells creates fire?",

options: [

"Ignatio",

"Incenaro",

"Incendio",

"Firaga"

],

answer: 2,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/10/fireball-513381956.jpg"

},

{

q: "Which of these spells creates a jet of water from the tip of the wand?",

options: [

"Aquaphor",

"Agualmendo",

"Aguamenti",

"Hydros Pumpus"

],

answer: 2,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2017/08/waterfall.png"

},

{

q: "Which of these is The Blasting Curse and was used in the murder of 12 muggles?",

options: [

"Confringo",

"Contingo",

"Experdius",

"Bobombous"

],

answer: 0,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2016/11/explode.png"

},



{

q: "The spell Evanesco can is used to do what?",

options: [

"Illuminate Objects",

"Vanish Objects",

"Ignite Objects",

"Bury Objects"

],

answer: 1,
picture: "https://static.magiquiz.com/cdn-cgi/image/width=1000,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.magiquiz.com/wp-content/uploads/2018/06/nightsky-91765979.jpg"

}
]

// set questions and options and question number
totalQuestionSpan.innerHTML = 10;

function load() {
    questionNumberSpan.innerHTML = index + 1;
    picture.innerHTML = '<img src="'+ questions[questionIndex].picture +'" />';
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
