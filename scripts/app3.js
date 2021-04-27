var gameBoard = [[null, null, null],
    [null, null, null],
    [null, null, null]];
var turn = 0;
var ERC_logo_2017Image = '<img src = https://upload.wikimedia.org/wikipedia/commons/5/53/Heribert_Barrera_%282003%29.jpg>';
var Junts_per_Catalunya_2020Image = '<img src =https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Jordi_Pujol_2011_%28cropped%29.jpg/478px-Jordi_Pujol_2011_%28cropped%29.jpg>';

// listen for click on boxes, loop through

var gamePlay = function (){
    $('#boxA').click(function(){
        if(turn % 2 === 0){
            $('#boxA').append(Junts_per_Catalunya_2020Image);
            var input = "Junts_per_Catalunya_2020"; // just to keep track of who is who in console.log -- we can remove this later
            console.log(input);
            gameBoard[0][0] = 0;
            console.log("box A is " + gameBoard[0][0]);
        }
        else {
            $('#boxA').append(ERC_logo_2017Image);
            var input = "ERC_logo_2017"; // just to keep track of who is who in console.log -- we can remove this later
            console.log(input);
            gameBoard[0][0] = 1;
            console.log("box A is " + gameBoard[0][0]);
        }
        turn++;
        checkWinner();
    });
    $('#boxB').click(function(){
        if(turn % 2 === 0){
            $('#boxB').append(Junts_per_Catalunya_2020Image);
            var input = "Junts_per_Catalunya_2020"; // just to keep track of who is who in console.log -- we can remove this later
            console.log(input);
            gameBoard[0][1] = 0;
            console.log("box B is " + gameBoard[0][1]);
        }
        else {
            $('#boxB').append(ERC_logo_2017Image);
            var input = "ERC_logo_2017"; // just to keep track of who is who in console.log -- we can remove this later
            console.log(input);
            gameBoard[0][1] = 1;
            console.log("box B is " + gameBoard[0][1]);
        }
        turn++;
        checkWinner();
    });
    $('#boxC').click(function(){
        if(turn % 2 === 0){
            $('#boxC').append(Junts_per_Catalunya_2020Image);
            var input = "Junts_per_Catalunya_2020"; // just to keep track of who is who in console.log -- we can remove this later
            console.log(input);
            gameBoard[0][2] = 0;
            console.log("box C is " + gameBoard[0][2]);

        }
        else {
            $('#boxC').append(ERC_logo_2017Image);
            var input = "ERC_logo_2017"; // just to keep track of who is who in console.log -- we can remove this later
            console.log(input);
            gameBoard[0][2] = 1;
            console.log("box C is " + gameBoard[0][2]);
        }
        turn++;
        checkWinner();
    });
    $('#boxD').click(function(){
        if(turn % 2 === 0){
            $('#boxD').append(Junts_per_Catalunya_2020Image);
            var input = "Junts_per_Catalunya_2020"; // just to keep track of who is who in console.log -- we can remove this later
            console.log(input);
            gameBoard[1][0] = 0;
            console.log("box D is " + gameBoard[1][0]);

        }
        else {
            $('#boxD').append(ERC_logo_2017Image);
            var input = "ERC_logo_2017"; // just to keep track of who is who in console.log -- we can remove this later
            console.log(input);
            gameBoard[1][0] = 1;
            console.log("box D is " + gameBoard[1][0]);
        }
        turn++;
        checkWinner();
    });
    $('#boxE').click(function(){
        if(turn % 2 === 0){
            $('#boxE').append(Junts_per_Catalunya_2020Image);
            var input = "Junts_per_Catalunya_2020"; // just to keep track of who is who in console.log -- we can remove this later
            console.log(input);
            gameBoard[1][1] = 0;
            console.log("box E is " + gameBoard[1][1]);

        }
        else {
            $('#boxE').append(ERC_logo_2017Image);
            var input = "ERC_logo_2017"; // just to keep track of who is who in console.log -- we can remove this later
            console.log(input);
            gameBoard[1][1] = 1;
            console.log("box E is " + gameBoard[1][1]);
        }
        turn++;
        checkWinner();
    });
    $('#boxF').click(function(){
        if(turn % 2 === 0){
            $('#boxF').append(Junts_per_Catalunya_2020Image);
            var input = "Junts_per_Catalunya_2020"; // just to keep track of who is who in console.log -- we can remove this later
            console.log(input);
            gameBoard[1][2] = 0;
            console.log("box F is "+ gameBoard[1][2]);

        }
        else {
            $('#boxF').append(ERC_logo_2017Image);
            var input = "ERC_logo_2017"; // just to keep track of who is who in console.log -- we can remove this later
            console.log(input);
            gameBoard[1][2] = 1;
            console.log("box F is "+ gameBoard[1][2]);
        }
        turn++;
        checkWinner();
    });
    $('#boxG').click(function(){
        if(turn % 2 === 0){
            $('#boxG').append(Junts_per_Catalunya_2020Image);
            var input = "Junts_per_Catalunya_2020"; // just to keep track of who is who in console.log -- we can remove this later
            console.log(input);
            gameBoard[2][0] = 0;
            console.log("box G is "+ gameBoard[2][0]);

        }
        else {
            $('#boxG').append(ERC_logo_2017Image);
            var input = "ERC_logo_2017"; // just to keep track of who is who in console.log -- we can remove this later
            console.log(input);
            gameBoard[2][0] = 1;
            console.log("box G is "+ gameBoard[2][0]);
        }
        turn++;
        checkWinner();
    });
    $('#boxH').click(function(){
        if(turn % 2 === 0){
            $('#boxH').append(Junts_per_Catalunya_2020Image);
            var input = "Junts_per_Catalunya_2020"; // just to keep track of who is who in console.log -- we can remove this later
            console.log(input);
            gameBoard[2][1] = 0;
            console.log("box H is "+ gameBoard[2][1]);

        }
        else {
            $('#boxH').append(ERC_logo_2017Image);
            var input = "ERC_logo_2017"; // just to keep track of who is who in console.log -- we can remove this later
            console.log(input);
            gameBoard[2][1] = 1;
            console.log("box H is "+ gameBoard[2][1]);
        }
        turn++;
        checkWinner();
    });
    $('#boxI').click(function(){
        if(turn % 2 === 0){
            $('#boxI').append(Junts_per_Catalunya_2020Image);
            var input = "Junts_per_Catalunya_2020"; // just to keep track of who is who in console.log -- we can remove this later
            console.log(input);
            gameBoard[2][2] = 0;
            console.log("box I is "+ gameBoard[2][2]);

        }
        else {
            $('#boxI').append(ERC_logo_2017Image);
            var input = "ERC_logo_2017"; // just to keep track of who is who in console.log -- we can remove this later
            console.log(input);
            gameBoard[2][2] = 1;
            console.log("box I is "+ gameBoard[2][2]);
        }
        turn++;
        checkWinner();
    });
};

var checkWinner = function(){
    checkRowWinner();
    // checkRowWinner2();
    checkColumnWinner();
    checkDiagonalWinner();
    if (checkRowWinner() === true || checkColumnWinner() === true || checkDiagonalWinner() === true){
        alert('Ha guanyat Junts per Catalunya! Visca la República!');
    }
    else if (checkRowWinner() === false || checkColumnWinner() === false || checkDiagonalWinner() === false){
        alert('Ha guanyat Esquerra Republicana de Catalunya! Visca la República!');
    }
    // else {
    //     alert('kanye for prezzzz');
    // }
};

gamePlay();
checkRowWinner = function(){
    if (gameBoard[0][0] === 0  && gameBoard[0][1] === 0 && gameBoard [0][2] === 0){
        console.log('0 wins row 1');
        return true;
    }
    else if (gameBoard[0][0] === 1  && gameBoard[0][1] === 1 && gameBoard [0][1] === 1){
        console.log('1 wins row 1');
        return false;
    }
    else if (gameBoard[1][0] === 0  && gameBoard[1][1] === 0 && gameBoard [1][2] === 0){
        console.log('0 wins row 2');
        return true;
    }
    else if (gameBoard[1][0] === 1  && gameBoard[1][1] === 1 && gameBoard [1][2] === 1){
        console.log('1 wins row 2');
        return false;
    }
    else if (gameBoard[2][0] === 0  && gameBoard[2][1] === 0 && gameBoard [2][2] === 0){
        console.log('0 wins row 3');
        return true;
    }
    else if (gameBoard[2][0] === 1  && gameBoard[2][1] === 1 && gameBoard [2][2] === 1){
        console.log('1 wins row 3');
        return false;
    }
    else {
        console.log('no row winner');
    }
};

var checkRowWinner2 = function () {
    for (var i = 0; i < gameBoard.length; i++){
        if (gameBoard[i][0] === 0 && gameBoard[i][1] === 0 && gameBoard[i][2] === 0){
            console.log('0 wins row');
        }
        else if (gameBoard[i][0] === 1 && gameBoard[i][1] === 1 && gameBoard[i][2] === 1){
            console.log('1 wins row');
        }
        else {
            console.log('no row winner');
        }
    }
};



var checkColumnWinner = function(){
    if (gameBoard[0][0] === 0  && gameBoard[1][0] === 0 && gameBoard [2][0] === 0){
        console.log('0 wins column1');
        return true;
    }
    else if (gameBoard[0][0] === 1  && gameBoard[1][0] === 1 && gameBoard [2][0] === 1){
        console.log('1 wins column1');
        return false;
    }
    else if (gameBoard[0][1] === 0  && gameBoard[1][1] === 0 && gameBoard [2][1] === 0){
        console.log('0 wins column2');
        return true;
    }
    else if (gameBoard[0][1] === 1  && gameBoard[1][1] === 1 && gameBoard [2][1] === 1){
        console.log('1 wins column2');
        return false;
    }
    else if (gameBoard[0][2] === 0  && gameBoard[1][2] === 0 && gameBoard [2][2] === 0){
        console.log('0 wins column3');
        return true;
    }
    else if (gameBoard[0][2] === 1  && gameBoard[1][2] === 1 && gameBoard [2][2] === 1){
        console.log('1 wins column3');
        return false;
    }
    else {
        console.log('no column winner');
    }
};

var checkDiagonalWinner = function(){
    if (gameBoard[0][0] === 0  && gameBoard[1][1] === 0 && gameBoard [2][2] === 0){
        console.log('0 wins diagonal left');
        return true;
    }
    else if (gameBoard[0][0] === 1 && gameBoard[1][1] === 1 && gameBoard [2][2] === 1){
        console.log('1 wins diagonal left');
        return false;
    }
    else if (gameBoard[0][2] === 0 && gameBoard[1][1] === 0 && gameBoard [2][0] === 0){
        console.log('0 wins diagonal right');
        return true;
    }
    else if (gameBoard[0][2] === 1 && gameBoard[1][1] === 1 && gameBoard [2][0] === 1){
        console.log('0 wins diagonal right');
        return false;
    }
    else {
        console.log('no diagonal winner');
    }
};



