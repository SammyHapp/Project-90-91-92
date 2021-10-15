set_player1 = localStorage.getItem("player1");
set_player2 = localStorage.getItem("player2");

score_1 = 0;
score_2 = 0;

document.getElementById("set_player1").innerHTML = set_player1 + " : ";
document.getElementById("set_player2").innerHTML = set_player2 + " : ";

document.getElementById("score_1").innerHTML = score_1;
document.getElementById("score_2").innerHTML = score_2;

document.getElementById("player_question").innerHTML = "question turn = " + set_player1;
document.getElementById("player_answer").innerHTML = "answer turn = " + set_player2;

function send() {
    number_1 = document.getElementById("number_1").value;
    number_2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number_1) * parseInt(number_2);   

    question_number = "<h4>" + number_1 + " X " + number_2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"; check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; row = question_number + input_box + check_button; document.getElementById("output").innerHTML = row; 
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}


player_question = "player_1";
player_answer = "player_2"

function check() {
    give_answer = document.getElementById("input_check_box").value
    answer = give_answer.toLowerCase();
    console.log(answer);

    if (answer == actual_answer) {
        if (player_answer == "player_1") {
           score_1 = score_1 + 1; 
           document.getElementById("score_1").innerHTML = score_1; 
        }

        else {
            score_2 = score_2 + 1; 
            document.getElementById("score_2").innerHTML = score_2;     
        }
    }


    if (player_question == "player_1") {
        player_question = "player_2";
        document.getElementById("player_question").innerHTML = "question turn - " + set_player2;      
    }

    else {
        player_question = "player_1";
        document.getElementById("player_question").innerHTML = "question turn - " + set_player1;
    }

    if (player_answer == "player_1") {
        player_answer = "player_2";
        document.getElementById("player_answer").innerHTML = "answer turn - " + set_player2;      
    }

    else {
        player_answer= "player_1";
        document.getElementById("player_answer").innerHTML = "answer turn - " + set_player1;
    }


        document.getElementById("output").innerHTML = ""
}