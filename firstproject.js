function questions(t,a,r,i){
    this.title=t;
    this.answers=a;
    this.rightAnswer=r;
    this.id=i;
}
var question0=new questions("Which of the following is a personal pronoun?",["Dog","They","Run","Beautiful"],"Beautiful",0);
var question1=new questions("What is the past tense of the verb eat?",["Ate","Eated","Eaten","Eating"],"Ate",1);
var question2=new questions("Which word is a conjunction?",["House","But","Happy","Quickly"],"But",2);
var question3=new questions(" I came _____ America.",["from", "at","in","on"],"from",3);
var question4=new questions("Choose the correct possessive pronoun for the sentence:The book is ___.",["Me","I","Mine","Myself"],"Mine",4);
var question5=new questions("I hope everyone_____ learned something from this.",["had","have","has","has to"],"has",5);
var question6=new questions("What is the correct order of the words in a basic English sentence?",["Subject - Object - Verb","Verb - Object - Subject","Object - Subject - Verb","Verb - Subject - Object"],"Subject - Object - Verb",6);
var question7=new questions("Select the correct plural form of the noun child:",["Childs","Childes","Children","Child's"],"Child's",7);
var question8=new questions("Which word functions as an adverb in the sentence: He ran quickly to catch the bus.",["Bus","Catch","Ran","Quickly"],"Quickly",8);
var question9=new questions("What is the comparative form of the adjective tall?",["Tallest","Tallness","Taller","Tallish"],"Taller",9);
///////////////////////////////////////////////////////////////////////
//registration page
var registrationDiv=document.getElementById("registration");
var firstNameInput=document.getElementById("firstnameinput");
var lastNameInput=document.getElementById("lastnameinput");
var emailInput=document.getElementById("emailinput");
var passwordInput=document.getElementById("passwordinput");
var reenterPasswordInput=document.getElementById("reenterpasswordinput");
var firstNameSpan=document.getElementById("firstnamespan");
var lastNameSpan=document.getElementById("lastnamespan");
var emailSpan=document.getElementById("emailspan");
var passwordSpan=document.getElementById("passwordspan");
var confirmPasswordSpan=document.getElementById("confirmpasswordspan");
var rgtSubmit=document.getElementById("registerationsubmit");


////////////////////////////////////////////////////////////////////////////////
//sign in page
var signInDiv=document.getElementById("signin");
var emailInputSignIn=document.getElementById("emailinputsignin");
var passwordInputSignIn=document.getElementById("passwordinputsignin");
var emailSpanSignIn=document.getElementById("emailspansignin");
var passwordSpanSignIn=document.getElementById("passwordspansignin");
var signInButton=document.getElementById("signinbutton");


//////////////////////////////////////////////////////////////////////////////////////////
//exam page
var timeProgress=document.getElementById("timeprogress");
var containerDiv=document.getElementById("container");
var examDiv=document.getElementById("exam");
var markListDiv=document.getElementById("marklist");
var questionh=document.getElementById("questionh");
var answerla1=document.getElementById("answerla1");
var answerla2=document.getElementById("answerla2");
var answerla3=document.getElementById("answerla3");
var answerla4=document.getElementById("answerla4");
var answer1radio=document.getElementById("answer1radio");
var answer2radio=document.getElementById("answer2radio");
var answer3radio=document.getElementById("answer3radio");
var answer4radio=document.getElementById("answer4radio");
var previousButton=document.getElementById("previousbutton");
var qNumbersDiv=document.getElementById("qnumbers");
var nextbutton=document.getElementById("nextbutton");
var markbutton=document.getElementById("markbutton");
var submitQuesButton=document.getElementById("submitquesbutton");
var minutesSpan=document.querySelector(".minutesSpan"); 
var SecondsSpan=document.querySelector(".SecondsSpan"); 



/////////////////////////////////////////////////////////////
//time out page
var timeoutDiv=document.getElementById("timeoutdiv");

//////////////////////////////////////////////////////////////////
//grades page
var gradesPage=document.querySelector("#gradesPage");
var tryAgainButton=document.querySelector("#tryagain");



/////////////////////////////////////////////////////////////
var emailREX=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var passwordRex=/^.{8,}$/;
var nameRex=/^[a-zA-Z]+$/;



//////////////////////////////////////////////////////////////////
//registration page
rgtSubmit.addEventListener("click",function(){
if(firstNameInput.value===""&&lastNameInput.value===""&&emailInput.value===""&&passwordInput.value===""&&reenterPasswordInput.value===""){
    firstNameSpan.textContent="*this field is required";
    lastNameSpan.textContent="*this field is required"
    emailSpan.textContent="*this field is required"
    passwordSpan.textContent="*this field is required"
    confirmPasswordSpan.textContent="*this field is required"
}
else if(firstNameInput.value===""){
    firstNameSpan.textContent="*this field is required"; 
}
else if(!nameRex.test(firstNameInput.value)){
    firstNameSpan.textContent="*enter characters only"; 
}
else{
    firstNameSpan.textContent="";
    if(lastNameInput.value===""){
        lastNameSpan.textContent="*this field is required"; 
    }
    else if(!nameRex.test(lastNameInput.value)){
        lastNameSpan.textContent="*enter characters only"; 
    }
    else{
        lastNameSpan.textContent=""; 
        if(emailInput.value===""){
            emailSpan.textContent="*this field is required"; 
        }
        else if(!emailREX.test(emailInput.value)){
            emailSpan.textContent="*enter valid email"; 
        }
        else{
            emailSpan.textContent=""; 
            if(passwordInput.value===""){
                passwordSpan.textContent="*this field is required"; 
            }
            else if(!passwordRex.test(passwordInput.value)){

                passwordSpan.textContent="*password length should be more than or equal 8"; 
                
            }
            else{
                passwordSpan.textContent="";
                if(reenterPasswordInput.value===""){
                   confirmPasswordSpan.textContent="*this field is required"; 
                }
                else if(!passwordRex.test(reenterPasswordInput.value)){
                    confirmPasswordSpan.textContent="*password length should be more than or equal 8"; 
                }
                else if(reenterPasswordInput.value!==passwordInput.value){
                    confirmPasswordSpan.textContent="*password doesn't match";
                }
                else{
                    registrationDiv.style.display="none";
                    signInDiv.style.display="block"
                }
            }
        }
    }
}
});


//////////////////////////////////////////////////////////////
//sign in page
signInButton.addEventListener("click",function(){
if(emailInputSignIn.value===""&&passwordInputSignIn.value===""){
    emailSpanSignIn.textContent="*this field is required";
    passwordSpanSignIn.textContent="*this field is required";
}
else if(emailInputSignIn.value===""){
    emailSpanSignIn.textContent="*this field is required";
}
else if(emailInputSignIn.value!==emailInput.value){
    emailSpanSignIn.textContent="*email doesn't match the registered email";
}
else{
    emailSpanSignIn.textContent="";
    if(passwordInputSignIn.value===""){
        passwordSpanSignIn.textContent="*this field is required";
    }
    else if(passwordInputSignIn.value!==passwordInput.value){
        passwordSpanSignIn.textContent="*password doesn't match the registered password";
    } 
    else{
        signInDiv.style.display="none";
        timeProgress.style.display="block";
        containerDiv.style.display="block";
        var setIntervalReference=setInterval(function(){
            timeProgress.value+=1;
            setTime(time--);
            if(timeProgress.value===timeProgress.max){
                clearInterval(setIntervalReference);
                timeProgress.style.display="none";
                containerDiv.style.display="none";
                timeoutDiv.style.display="block";
                timeoutDiv.innerHTML+=`<br><br><br><center><h2>Sorry ${firstNameInput.value} ${lastNameInput.value} Exam time is out</h2></center>`;
        
            }
            },1000);
    } 
}
});



/////////////////////////////////////////////////////////////////////////////////////////
//variables
var time=900;              //15 minutes *60=900seconds
var questionArray=[question0,question1,question2,question3,question4,question5,question6,question7,question8,question9];
var selectedQuestions=[];
var markedQuestions=[];
var genaricNumber;
var counter=0;
var savedAnswersArr=[
    {quesNum:0,answer:""},
    {quesNum:1,answer:""},
    {quesNum:2,answer:""},
    {quesNum:3,answer:""},
    {quesNum:4,answer:""},
    {quesNum:5,answer:""},
    {quesNum:6,answer:""},
    {quesNum:7,answer:""},
    {quesNum:8,answer:""},
    {quesNum:9,answer:""},
];
var labelArr=[answerla1,answerla2,answerla3,answerla4];
var radioArr=[answer1radio,answer2radio,answer3radio,answer4radio];
var grade=0;


///////////////////////////////////////////////////////////////////////////////
//functions
function setTime(time){
      var min=parseInt(time/60);
      var sec=time%60;
      if(min<10)min=`0${min}`;
      if(sec<10)sec=`0${sec}`;
      minutesSpan.textContent=min;
      SecondsSpan.textContent=sec;
    }



function checkedHandle(){
    if(savedAnswersArr[selectedQuestions[counter]].answer!==""){
        for(var i=0;i<4;i++){
                if(savedAnswersArr[selectedQuestions[counter]].answer===labelArr[i].textContent){
                   radioArr[i].checked=true;
    }}}}


function generateQuestions(){
    questionArray.forEach(function(el) {
        if(el.id===selectedQuestions[counter]){
            questionh.innerHTML=`<h2>${el.title}</h2>`; 
            answerla1.textContent=el.answers[0];
            answerla2.textContent=el.answers[1];
            answerla3.textContent=el.answers[2];
            answerla4.textContent=el.answers[3];
                }});
    answer1radio.checked=false;
    answer2radio.checked=false;
    answer3radio.checked=false;
    answer4radio.checked=false;
    checkedHandle();
    } 



function goQuestion(num){
    counter=num;
    generateQuestions();
    qNumbersDiv.textContent=counter+1;
    if(counter===0){
        previousButton.style.display="none";
        nextbutton.style.display="block";
    }
    else if(counter===9){
        nextbutton.style.display="none";
        previousButton.style.display="block"; 
    }
    else{
        previousButton.style.display="block";  
        nextbutton.style.display="block";
    }
    } 
    


function savedAnswer(x){
    savedAnswersArr[selectedQuestions[counter]].answer=document.querySelectorAll("#exam label")[x].textContent;
    }    




function tryAgainFun(){
    timeProgress.style.display="block";
    containerDiv.style.display="block";
    gradesPage.style.display="none";

    previousButton.style.display="none";
    nextbutton.style.display="block";
    answer1radio.checked=false;
    answer2radio.checked=false;
    answer3radio.checked=false;
    answer4radio.checked=false;
    time=900;
    timeProgress.value=0;
    grade=0;
    counter=0;
    markListDiv.innerHTML="";
    qNumbersDiv.innerHTML="1";
    savedAnswersArr=[
        {quesNum:0,answer:""},
        {quesNum:1,answer:""},
        {quesNum:2,answer:""},
        {quesNum:3,answer:""},
        {quesNum:4,answer:""},
        {quesNum:5,answer:""},
        {quesNum:6,answer:""},
        {quesNum:7,answer:""},
        {quesNum:8,answer:""},
        {quesNum:9,answer:""},
    ];
     selectedQuestions=[];
     markedQuestions=[];
    for(var i=0;i<10;i++){
        do{
        genaricNumber=Math.floor(Math.random()*10);
        }while(selectedQuestions.indexOf(genaricNumber)!==-1);
        selectedQuestions.push(genaricNumber); }
}


/////////////////////////////////////////////////////////////////////////////////////////////////


// for test
// var setIntervalReference=setInterval(function(){
//     timeProgress.value+=1;
//     setTime(time--);
//     if(timeProgress.value===timeProgress.max){
//         clearInterval(setIntervalReference);
//         timeProgress.style.display="none";
//         containerDiv.style.display="none";
//         timeoutDiv.style.display="block";
//         timeoutDiv.innerHTML+=`<br><br><br><center><h2>Sorry ${firstNameInput.value} ${lastNameInput.value} Exam time is out</h2></center>`;

//     }
//     },1000);
    


 ////////////////////////////////////////////////////////////////////////////////////////////   
for(var i=0;i<10;i++){
        do{
        genaricNumber=Math.floor(Math.random()*10);
        }while(selectedQuestions.indexOf(genaricNumber)!==-1);
        selectedQuestions.push(genaricNumber); }


///////////////////////////////////////////////////////////////////////////////////////////////
//calling
setTime(time--);
generateQuestions();


///////////////////////////////////////////////////////////////////////////////////////
//next button
nextbutton.addEventListener("click",function(){
    counter++;
    generateQuestions();
    previousButton.style.display="block";
    qNumbersDiv.textContent=counter+1;
    if(counter===9){
        nextbutton.style.display="none";
    }
    });

////////////////////////////////////////////////////////////////////////////////////
//previous Button
previousButton.addEventListener("click",function(){
        counter--;
        generateQuestions();
        qNumbersDiv.textContent=counter+1;
        if(counter===0){
            previousButton.style.display="none";
        }
        if(counter<9){
            nextbutton.style.display="block";  
        }
    });

/////////////////////////////////////////////////////////////////////////////////////////
//mark button
    markbutton.addEventListener("click",function(){
        if(markedQuestions.indexOf(counter)===-1){
            markListDiv.innerHTML+=`<div class="quesInMarkList"onclick="goQuestion(${counter})">mrk-Question${counter+1}</div>`;
            markedQuestions.push(counter);
            
        }
    });
   
////////////////////////////////////////////////////////////////////////////////////////
//submit button
submitQuesButton.addEventListener("click",function(){
for(var i=0;i<10;i++){
    if(savedAnswersArr[i].answer===questionArray[i].rightAnswer){
        grade++;
    }}
    timeProgress.style.display="none";
    containerDiv.style.display="none";
    gradesPage.style.display="block";
    gradesPage.innerHTML=`<h2>${firstNameInput.value} ${lastNameInput.value} your grade is ${grade} / 10</h2><br><br><br><button id="tryagain" onclick="tryAgainFun()">Try Again</button> `;
    });


