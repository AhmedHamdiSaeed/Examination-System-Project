//grades page
var gradesPage=document.getElementById("gradesPage");
var tryAgainButton=document.getElementById("tryagain");
var gradeh2=document.getElementById("gradeh2");
var ReviewAnswers=document.getElementById("Reviewanswers");
var userData=JSON.parse(localStorage.getItem("user_data"));
var userGrades=localStorage.getItem("userGrades");

/////////////////////////////////////////////////////////////
gradeh2.innerHTML=`${userData.userFirstName} ${userData.userLastName} your grade is ${userGrades} / 10 `;

ReviewAnswers.addEventListener("click",function(){
    localStorage.setItem("reviewCheck","1");
    window.location.replace("exam.html");
});



//////////////////////////////////////////////////////////////

function tryAgainFun(){  
window.location.replace("exam.html");   
}


/////////////////////////////////////////////////////////////////////////////////////////////////