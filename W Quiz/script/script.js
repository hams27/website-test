let signUpButton = document.getElementById('signUp');
let signInButton = document.getElementById('signIn');
let container = document.getElementById('container');
let email=document.getElementById('email');
let password=document.getElementById('password');
let fullname=document.getElementById('name');
let container2=document.getElementById('container2');
let exam = document.getElementById('exam');
let finalscore =document.getElementById('finalscore');
let tryagain =document.getElementById("tryagain");
let ns = document.getElementById('ns');
// signing
signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
  
}); 

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});
// start exam

document.getElementById('signup').addEventListener("click",function(v){
    v.preventDefault()
    if(email.value !=='' && password.value !=='' && fullname.value !=='')
        {
          container.style.display='none';
          container2.style.display='block';
        localStorage.setItem('Name',fullname.value)
        localStorage.setItem('Email',email.value)
        localStorage.setItem('Password',password.value)
        
    }
    else{window.alert('please enter your personal details')}
});


document.getElementById('signin').addEventListener("click",function(z){
  z.preventDefault()
  if(String(email.value) ===localStorage.getItem('Email'.value) && Number (password.value) ===localStorage.getItem('Password'.value))
      {
        container.style.display='none';
        container2.style.display='block';
  }
  else{window.alert('you dont have an acount ,please sign up')}
});

// Q&A

var answers = []
var x = [{
      "type": "multiple",
      "difficulty": "easy",
      "category": "Geography",
      "question": "1- How many time zones does China have?",
      A: "A- 3",
      B:"B- 4",
      C:"C- 2",
      D:"D- 1",
      answer: "D"
        },
        {
          "type": "boolean",
          "difficulty": "easy",
          "category": "Geography",
          "question": "2- California is larger than Japan.",
          answer: "A",
          A:"A- True",
          B:"B- False",
          C:" ",
          D:" "
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Geography",
          "question": "3- All of the following are classified as Finno-Ugric languages EXCEPT:",
          answer:"C" ,
          A:  "A- Hungarian",
          B:"B- Estonian",
          C:"C- Samoyedic",
          D: "D- Finnish",
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Geography",
          "question": "4- What is the capital of Denmark?",
          answer:"B",
           A: "A- Aarhus",
           B: "B- Copenhagen",
           C: "C- Odense",
            D:"D- Aalborg",
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Geography",
          "question": "5- Which ocean borders the west coast of the United States?",
          answer:"A" ,
          A:"A- Pacific",
          B:"B- Arctic",
          C:"C- Indian",
          D:"D- Atlantic",

        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Geography",
          "question": "6- What is the smallest country in the world?",
          answer:"D" ,
           A: "A- Maldives",
           B: "B- Monaco",
           C:"C- Malta",
           D:"D- Vatican City"
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Geography",
          "question": "7- Which country was NOT part of the Soviet Union?",
          answer: "D",
            A:"A- Belarus",
            B:"B- Turkmenistan",
            C:"C- Tajikistan",
            D:"D- Romania"
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Geography",
          "question": "8- What is the capital of Jamaica?",
          answer:"A" ,
            A:"A- Kingston",
            B:"B- Bridgetown",
            C:"C- San Juan",
            D:"D- Port-au-Prince",
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Geography",
          "question": "9- The longest shared border in the world can be found between which two nations?",
          answer: "A",
          A:"A- Canada and the United States",
          B:"B- Russia and China",
          C:"C- Chile and Argentina",
          D:"D- India and Pakistan"
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Geography",
          "question": "10- Which of the following Japanese islands is the biggest?",
          answer:"D",
          A:"A- Kyushu",
          B:"B- Shikoku",
          C:"C- Hokkaido",
          D:"D- Honshu",
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Geography",
          "question": "11- What is the name of New Zealand&#039;s indigenous people?",
          answer: "C",
          A:"A- Vikings",
          B:"B- Samoans",
          C:"C- Maori",
          D:"D- Polynesians",
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Geography",
          "question": "12- What colour is the circle on the Japanese flag?",
          answer: "D",
          A:"A- White",
          B:"B- Yellow",
          C:"C- Black",
          D:"D- Red"
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Geography",
          "question": "13- Which Russian oblast forms a border with Poland?",
          answer:"A",
          A:"A- Kaliningrad",
          B:"B- Samara",
          C:"C- Nizhny Novgorod",
          D:"D- Omsk",
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Geography",
          "question": "14- What is Laos?",
          answer: "A",
          A:"A-Country",
          B:"B- Region",
          C:"C- City",
          D:"D- River",
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Geography",
          "question": "15- Which small country is located between the borders of France and Spain?",
          answer: "D",
          A:"A- Lichtenstein",
          B:"B- Vatican City",
          C:"C- San Marino",
          D:"D- Andorra",
        },
        {
          "type": "boolean",
          "difficulty": "easy",
          "category": "Geography",
          "question": "16- San Marino is the only country completely surrounded by another country.",
          answer:"A",
          A: "A- False",
          B: "B- True",
          C:" ",
          D:" "
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Geography",
          "question": "17- What is the largest country in the world ?",
          answer: "A",
          A:"A- Russian Federation",
          B:"B- China",
          C:"C- Canada",
          D:"D- Brazil"
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Geography",
          "question": "18- What is the capital of the US State of New York?",
          answer: "D",
          A:"A- Buffalo",
          B:"B- New York",
          C:"C- Rochester",
          D:"D- Albany"
        },
        {
          "type": "boolean",
          "difficulty": "easy",
          "category": "Geography",
          "question": "19- There are no deserts in Europe.",
          answer: "B",
          A:"A- False",
          B:"B- True",
          C:" ",
          D:" "
        },
        {
          "type": "multiple",
          "difficulty": "easy",
          "category": "Geography",
          "question": "20- What is the capital of South Korea?",
         answer: "D",
         End:"lq",
         A:"A- Kitakyushu",
         B:"B- Taegu",
         C:"C- Pyongyang",
         D:"D- Seoul"
        }] ;

var currentindex = 0
exam.innerHTML = `
        <div id="question">${x[currentindex].question}</div>
        <div id="answers">
            <div class="answer" onclick="addAnswer('A', ${currentindex})" id="A">${x[currentindex].A}</div>
            <div class="answer" onclick="addAnswer('B', ${currentindex})" id="B">${x[currentindex].B}</div>
            <div class="answer" onclick="addAnswer('C', ${currentindex})" id="C">${x[currentindex].C}</div>
            <div class="answer" onclick="addAnswer('D', ${currentindex})" id="D">${x[currentindex].D}</div>
      </div>
     
      `
      document.getElementById('next_q').addEventListener("click",function(){
        currentindex = currentindex + 1
          exam.innerHTML = `
          <div id="question">${x[currentindex].question}</div>
          <div id="answers">
          <div id="A" class="answer"  onclick="addAnswer('A', ${currentindex})">${x[currentindex].A}</div>
          <div class="answer" id="B" onclick="addAnswer('B', ${currentindex})">${x[currentindex].B}</div>
          <div class="answer" id="C" onclick="addAnswer('C', ${currentindex})">${x[currentindex].C}</div>
          <div class="answer" id="D" onclick="addAnswer('D', ${currentindex})">${x[currentindex].D}</div>
          </div>
          </div>`
       })

       document.getElementById('last_q').addEventListener("click",function(){
        currentindex = currentindex - 1
          exam.innerHTML = `
          <div id="question">${x[currentindex].question}</div>
          <div id="answers">
          <div id="A" class="answer"  onclick="addAnswer('A', ${currentindex} )">${x[currentindex].A }</div>
          <div class="answer" id='B' ""onclick="addAnswer('B', ${currentindex})">${x[currentindex].B}</div>
          <div class="answer" id="C" onclick="addAnswer('C', ${currentindex})">${x[currentindex].C}</div>
          <div class="answer" id="D" onclick="addAnswer('D', ${currentindex})">${x[currentindex].D}</div>
          </div>
          </div>`
       })

       function addAnswer (answer , currentindex ){
        console.log(currentindex);
        if(x[currentindex].answer === answer ){
            answers[currentindex] = true
        }else{
            answers[currentindex] = false
    }
    var answersDivs =document.getElementsByClassName('answer')
    
    for (let i = 0; i < answersDivs.length; i++) {
      
      document.getElementById(answersDivs[i].id).style.backgroundColor= 'white'  
    }

    document.getElementById(answer).style.backgroundColor= '#7dbe8a'  
    // getScore()
    }

    var score =0
    function getScore(){
        for(i=0 ; i<x.length;i++){
    if(answers[i] === true){
    score ++
    localStorage.setItem('Score' , score)
    }
       }   
    }
    // show result
    document.getElementById('ex').addEventListener("click",function(){
      getScore()
      container2.style.display='none'
if(score===20){
  finalscore.innerHTML=` <img src="./image/d3c68aeb6f9ead3e57f80f12d12304b8.gif" alt=""> Your score is ${(localStorage.getItem('Score'))}/20`;
}
else if(score<20){
 
  ns.innerHTML=` <img src="./image/7c99100de4b165de19e93ab3aa2d08a2.gif" alt=""> Your score is ${(localStorage.getItem('Score'))}/20 `;
  tryagain.style.display='block'
} 
     });
    //  try again
     document.getElementById('tryagain').addEventListener("click",function(){
      ns.style.display='none'
      tryagain.style.display='none'
      container2.style.display='block'
    })
    