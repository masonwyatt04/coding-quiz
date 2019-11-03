var secondsleft = document.querySelector("#secondsleft");
var timeleft = 75;
// var container = document.querySelector(".container");
var question = document.querySelector("#quizheader");
var answers = document.querySelector("#answersection");
var questionIndex = 0;


var startgame = $("#startbutton").on("click", function() {

    
   var timerInterval = setInterval( function() {
    timeleft--;
    secondsleft.textContent = timeleft;

    if ( timeleft === 0) {
     clearInterval(timerInterval);
    }

    }, 1000);

quesiton1();

function quesiton1() {

    var choice1 = document.createElement("div");
    choice1.setAttribute("id", "choice1");

    var choice2 = document.createElement("div");
    choice2.setAttribute("id", "choice2");
  
    var choice3 = document.createElement("div");
    choice3.setAttribute("id", "choice3");
  
    var choice4 = document.createElement("div");
    choice4.setAttribute("id", "choice4");
  
     document.body.append(choice1);
     document.body.append(choice2);
     document.body.append(choice3);
     document.body.append(choice4);

     choice1.textContent = questions[0].choices[0];
     choice2.textContent = questions[0].choices[1];
     choice3.textContent = questions[0].choices[2];
     choice4.textContent = questions[0].choices[3];

     question.textContent = questions[questionIndex].title;
     answers.textContent = "";



        var clickchoice1 = $("#choice1").on("click", function() {
            if( clickchoice1 ){
                alert("wrong!")
                question2();
            }

        })
    
        var clickchoice2 = $("#choice2").on("click", function(){
             if (clickchoice2){
                alert("correct!")
                question2();
             }
    
            });
    
       var clickchoice3 = $("#choice3").on("click", function(){
            if (clickchoice3){
                alert("wrong!");
                question2();
            }
    
        });
    
        var clickchoice4 = $("#choice4").on("click", function(){
            if (clickchoice4){
                    alert("wrong!");
                    question2();
            }
        
        });


}

function question2() {

    var choice5 = document.createElement("div");
    choice5.setAttribute("id", "choice5");

    var choice6 = document.createElement("div");
    choice6.setAttribute("id", "choice6");
  
    var choice7 = document.createElement("div");
    choice7.setAttribute("id", "choice7");
  
    var choice8 = document.createElement("div");
    choice8.setAttribute("id", "choice8");
  
     document.body.append(choice5);
     document.body.append(choice6);
     document.body.append(choice7);
     document.body.append(choice8);

     choice5.textContent = questions[1].choices[0];
     choice6.textContent = questions[1].choices[1];
     choice7.textContent = questions[1].choices[2];
     choice8.textContent = questions[1].choices[3];

     question.textContent = questions[1].title;
    //  answers.textContent = "";
    choice1.textContent = ""
    choice2.textContent = ""
    choice3.textContent = ""
    choice4.textContent = ""



        var clickchoice5 = $("#choice5").on("click", function() {
            if( clickchoice5 ){
                alert("wrong!");
                question3();
            }

        })
    
        var clickchoice6 = $("#choice6").on("click", function(){
             if (clickchoice6){
                alert("wrong!")
                question3();
             }
    
            });
    
       var clickchoice7 = $("#choice7").on("click", function(){
            if (clickchoice7){
                alert("wrong!");
                question3();
            }
    
        });
    
        var clickchoice8 = $("#choice8").on("click", function(){
            if (clickchoice8){
                    alert("correct!");
                    question3();
            }
        
        });


}

function question3() {

    var choice9 = document.createElement("div");
    choice9.setAttribute("id", "choice9");

    var choice10 = document.createElement("div");
    choice10.setAttribute("id", "choice10");
  
    var choice11 = document.createElement("div");
    choice11.setAttribute("id", "choice11");
  
    var choice12 = document.createElement("div");
    choice12.setAttribute("id", "choice12");
  
     document.body.append(choice9);
     document.body.append(choice10);
     document.body.append(choice11);
     document.body.append(choice12);

     choice9.textContent = questions[2].choices[0];
     choice10.textContent = questions[2].choices[1];
     choice11.textContent = questions[2].choices[2];
     choice12.textContent = questions[2].choices[3];

     question.textContent = questions[2].title;
    //  answers.textContent = "";
    choice5.textContent = ""
    choice6.textContent = ""
    choice7.textContent = ""
    choice8.textContent = ""



        var clickchoice9 = $("#choice9").on("click", function() {
            if( clickchoice9 ){
                alert("wrong!");
                question4();
            }

        })
    
        var clickchoice10 = $("#choice10").on("click", function(){
             if (clickchoice10){
                alert("wrong!")
                question4();
             }
    
            });
    
       var clickchoice11 = $("#choice11").on("click", function(){
            if (clickchoice11){
                alert("correct!");
                question4();
            }
    
        });
    
        var clickchoice12 = $("#choice12").on("click", function(){
            if (clickchoice12){
                    alert("wrong!");
                    question4();
            }
        
        });


}

function question4() {

    var choice13 = document.createElement("div");
    choice13.setAttribute("id", "choice13");

    var choice14 = document.createElement("div");
    choice14.setAttribute("id", "choice14");
  
    var choice15 = document.createElement("div");
    choice15.setAttribute("id", "choice15");
  
    var choice16 = document.createElement("div");
    choice16.setAttribute("id", "choice16");
  
     document.body.append(choice13);
     document.body.append(choice14);
     document.body.append(choice15);
     document.body.append(choice16);

     choice13.textContent = questions[3].choices[0];
     choice14.textContent = questions[3].choices[1];
     choice15.textContent = questions[3].choices[2];
     choice16.textContent = questions[3].choices[3];

     question.textContent = questions[3].title;
    //  answers.textContent = "";
    choice9.textContent = ""
    choice10.textContent = ""
    choice11.textContent = ""
    choice12.textContent = ""



        var clickchoice13 = $("#choice13").on("click", function() {
            if( clickchoice13 ){
                alert("correct!");
                question5();
            }

        })
    
        var clickchoice14 = $("#choice14").on("click", function(){
             if (clickchoice14){
                alert("wrong!")
                question5();
             }
    
            });
    
       var clickchoice15 = $("#choice15").on("click", function(){
            if (clickchoice15){
                alert("wrong!");
                question5();
            }
    
        });
    
        var clickchoice16 = $("#choice16").on("click", function(){
            if (clickchoice16){
                    alert("wrong!");
                    question5();
            }
        
        });


}

function question5() {

    var choice17 = document.createElement("div");
    choice17.setAttribute("id", "choice17");

    var choice18 = document.createElement("div");
    choice18.setAttribute("id", "choice18");
  
    var choice19 = document.createElement("div");
    choice19.setAttribute("id", "choice19");
  
    var choice20 = document.createElement("div");
    choice20.setAttribute("id", "choice20");
  
     document.body.append(choice17);
     document.body.append(choice18);
     document.body.append(choice19);
     document.body.append(choice20);

     choice17.textContent = questions[4].choices[0];
     choice18.textContent = questions[4].choices[1];
     choice19.textContent = questions[4].choices[2];
     choice20.textContent = questions[4].choices[3];

     question.textContent = questions[4].title;
    //  answers.textContent = "";
    choice13.textContent = ""
    choice14.textContent = ""
    choice15.textContent = ""
    choice16.textContent = ""



        var clickchoice17 = $("#choice17").on("click", function() {
            if( clickchoice17 ){
                alert("wrong!");
                // question5();
            }

        })
    
        var clickchoice18 = $("#choice18").on("click", function(){
             if (clickchoice18){
                alert("correct!")
                // question5();
             }
    
            });
    
       var clickchoice19 = $("#choice19").on("click", function(){
            if (clickchoice19){
                alert("wrong!");
                // question5();
            }
    
        });
    
        var clickchoice20 = $("#choice20").on("click", function(){
            if (clickchoice20){
                    alert("wrong!");
                    // question5();
            }
        
        });


}

})