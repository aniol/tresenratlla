console.log('linked!');

// var boxA = $('#boxA');
// $(boxA).click(function(){
//     console.log('boxA clicked');
// });
//
// var boxB = $('#boxB');
// $(boxB).click(function(){
//     console.log('boxB clicked');
// });
//
// var boxC = $('#boxC');
// $(boxC).click(function(){
//     console.log('boxC clicked');
// });
//
// var boxD = $('#boxD');
// $(boxD).click(function(){
//     console.log('boxD clicked');
// });
//
// var boxE = $('#boxE');
// $(boxE).click(function(){
//     console.log('boxE clicked');
// });
//
// var boxF = $('#boxF');
// $(boxF).click(function(){
//     console.log('boxF clicked');
// });
//
// var boxG = $('#boxG');
// $(boxG).click(function(){
//     console.log('boxG clicked');
// });
//
// var boxH = $('#boxH');
// $(boxH).click(function(){
//     console.log('boxH clicked');
// });
//
// var boxI = $('#boxI');
// $(boxI).click(function(){
//     console.log('boxI clicked');
// });
//
//
// var ERC_logo_2017 = 'ERC_logo_2017'; // turn 0
// var Junts_per_Catalunya_2020 = 'Junts_per_Catalunya_2020'; // turn 1
// var turn = 0;
//
// // var newGame = function() {
// //     $('.boxes').click(function(){
// //         for (turn = 0; turn <= 9; turn++){
// //             if (turn%2=== 0){
// //                 console.log('player 1');
// //
// //         }
// //             else {
// //                 console.log('player 2')
// //             }
// //         }
// //     })
// // };
//
//
// var boardCheck = function() {
//
// };
//
// var checkWin = function(){
//
//     if ((row[0] === boxB && boxA === boxC && (boxA === ERC_logo_2017)) || // row 1
//         (boxD === boxE && boxD === boxF && (boxA === ERC_logo_2017)) || // row 2
//         (boxG === boxH && boxG === boxI && (boxA === ERC_logo_2017)) || // row 3
//         (boxA === boxD && boxA === boxG && (boxA === ERC_logo_2017)) || // column 1
//         (boxB === boxE && boxB === boxH && (boxA === ERC_logo_2017)) || // column 2
//         (boxC === boxF && boxC === boxI && (boxA === ERC_logo_2017)) || // column 3
//         (boxA === boxE && boxA === boxI && (boxA === ERC_logo_2017)) || // left down diagonal
//         (boxC === boxE && boxC === boxG && (boxA === ERC_logo_2017)) // right down diagonal
//
//     ) {
//         var winERC_logo_2017 = true;
//         console.log('ERC_logo_2017 WINS!');
//     }
//     else if ((boxA === boxB && boxA === boxC && (boxA === Junts_per_Catalunya_2020)) || // row 1
//         (boxD === boxE && boxD === boxF && (boxA === Junts_per_Catalunya_2020)) || // row 2
//         (boxG === boxH && boxG === boxI && (boxA === Junts_per_Catalunya_2020)) || // row 3
//         (boxA === boxD && boxA === boxG && (boxA === Junts_per_Catalunya_2020)) || // column 1
//         (boxB === boxE && boxB === boxH && (boxA === Junts_per_Catalunya_2020)) || // column 2
//         (boxC === boxF && boxC === boxI && (boxA === Junts_per_Catalunya_2020)) || // column 3
//         (boxA === boxE && boxA === boxI && (boxA === Junts_per_Catalunya_2020)) || // left down diagonal
//         (boxC === boxE && boxC === boxG && (boxA === Junts_per_Catalunya_2020)) // right down diagonal
//     ){
//         var winJunts_per_Catalunya_2020 = true;
//         console.log('Junts_per_Catalunya_2020 WINS :(');
//     }
// };
//
// var checkTie = function(){
//     if (winERC_logo_2017 === false || winJunts_per_Catalunya_2020 === false){
//         console.log('TIE');
//     }
// };

var currentPlayer = 0;

var row1 = [null,null,1]; // [null, 1, 1]
var row2 = [null,1,null]; // [0,0,0]
var row3 = [1,null,null]; // [null, null, 1]

var placeholder = '';

var assignWinner = function(){
    if(checkForWinner() === 0){
        alert('Ha guanyat Junts per Catalunya!!');
    }
    else if (checkForWinner() === 1){
        alert('Ha guanyat Esquerra Republicana de Catalunya!');
    }
    else {
        alert('Esteu empatant al 52%!');
    }
};


var checkRowWinner= function(){
    if (row1[0] != null && row1[1] != null && row1[2] != null) { // row 1 check
        console.log('row 1 check hit');
        if (row1[0] === 0 && row1[1] === 0 && row1[2] === 0) {
            console.log('0 wins');
            return 0;

        }
        else if (row1[0] === 1 && row1[1] === 1 && row1[2] === 1) {
            console.log('1 wins');
            return 1;
        }
    }
    else if (row2[0] != null && row2[1] != null && row1[2] != null) { // row 2 check
        console.log('row 2 check hit');
        if (row2[0] === 0 && row2[1] === 0 && row2[2] === 0){
            console.log('0 wins');
            return 0;
        }
        else if (row2[0] === 1 && row2[1] === 1 && row2[2] === 1) {
            console.log('1 wins');
            return 1;
        }
    }
    else if (row3[0] != null && row3[1] != null && row3[2] != null) { // row 3 check
        console.log('row 3 check hit');
        if (row3[0] === 0 && row3[1] === 0 && row3[2] === 0){
            console.log('0 wins');
            return 0;
        }
        else if (row3[0] === 1 && row3[1] === 1 && row3[2] === 1) {
            console.log('1 wins');
            return 1;
        }
    }
    else {
        console.log('no check row winner');
    }
};

var checkColumnWinner = function () {
    if (row1[0] != null && row2[0] != null && row3[0] != null) { // column 1 check
        console.log('column 1 check hit');
        if (row1[0] === 0 && row2[0] === 0 && row3[0] === 0){
            console.log('0 wins');
            return 0;
        }
        else if (row1[0] === 1 && row2[0] === 1 && row3[0] === 1) {
            console.log('1 wins');
            return 1;
        }

    }
    else if (row1[1] != null && row2[1] != null && row3[1] != null) { // column 2 check
        console.log('column 2 check hit')
        if (row1[1] === 0 && row2[1] === 0 && row3[1] === 0){
            console.log('0 wins');
            return 0;
        }
        else if (row1[1] === 1 && row2[1] === 1 && row3[1] === 1) {
            console.log('1 wins');
            return 1;
        }

    }
    else if (row1[2] != null && row2[2] != null && row3[2] != null) { // column 3 check
        console.log('column 3 check hit')
        if (row1[2] === 0 && row2[2] === 0 && row3[2] === 0){
            console.log('0 wins');
            return 0;
        }
        else if (row1[2] === 1 && row2[2] === 1 && row3[2] === 1) {
            console.log('1 wins');
            return 1;
        }

    }
    else {
        console.log('no check column winner');
    }
};

var checkDiagonalWinner = function () {
    if (row1[0] != null && row2[1] != null && row3[2] != null) { // diagonal left check
        if (row1[0] === 0 && row2[1] === 0 && row3[2] === 0){
            console.log('0 wins');
            return 0;
        }
        else if (row1[0] === 1 && row2[1] === 1 && row3[2] === 1) {
            console.log('1 wins');
            return 1;
        }

    }
    else if (row1[2] != null && row2[1] != null && row3[0] != null) { // diagonal right check
        if (row1[2] === 0 && row2[1] === 0 && row3[0] === 0){
            console.log('0 wins');
            return 0;
        }
        else if (row1[2] === 1 && row2[1] === 1 && row3[0] === 1) {
            console.log('1 wins');
            return 1;
        }
    }
    else {
        console.log('no check diagonal winner');
    }
};

// var checkForWinner = function() {
//     // horizontal rows x3
//     if (row1[0] != null && row1[1] != null && row1[2] != null) { // row 1 check
//         console.log('row 1 check hit');
//         if (row1[0] === 0 && row1[1] === 0 && row1[2] === 0){
//             return 0;
//
//         }
//         else if (row1[0] === 1 && row1[1] === 1 && row1[2] === 1) {
//             return 1;
//         }
//         else {
//             console.log("else 1 hit")
//         }
//     }
//     else if (row2[0] != null && row2[1] != null && row1[2] != null) { // row 2 check
//         console.log('row 2 check hit');
//         if (row2[0] === 0 && row2[1] === 0 && row2[2] === 0){
//             return 0;
//         }
//         else if (row2[0] === 1 && row2[1] === 1 && row2[2] === 1) {
//             return 1;
//         }
//
//     }
//     else if (row3[0] != null && row3[1] != null && row3[2] != null) { // row 3 check
//         console.log('row 1 check hit');
//         if (row3[0] === 0 && row3[1] === 0 && row3[2] === 0){
//             return 0;
//         }
//         else if (row3[0] === 1 && row3[1] === 1 && row3[2] === 1) {
//             return 1;
//         }
//
//     }
//     else if (row1[0] != null && row2[0] != null && row3[0] != null) { // column 1 check
//         console.log('column check hit');
//         if (row1[0] === 0 && row2[0] === 0 && row3[0] === 0){
//             return 0;
//         }
//         else if (row1[0] === 1 && row2[0] === 1 && row3[0] === 1) {
//             return 1;
//         }
//
//     }
//     else if (row1[1] != null && row2[1] != null && row3[1] != null) { // column 2 check
//         console.log('column 2 check hit')
//         if (row1[1] === 0 && row2[1] === 0 && row3[1] === 0){
//             return 0;
//         }
//         else if (row1[1] === 1 && row2[1] === 1 && row3[1] === 1) {
//             return 1;
//         }
//
//     }
//     else if (row1[2] != null && row2[2] != null && row3[2] != null) { // column 3 check
//         console.log('column 3 check hit')
//         if (row1[2] === 0 && row2[2] === 0 && row3[2] === 0){
//             return 0;
//         }
//         else if (row1[2] === 1 && row2[2] === 1 && row3[2] === 1) {
//             return 1;
//         }
//
//     }
//     else if (row1[0] != null && row2[1] != null && row3[2] != null) { // diagonal left check
//         if (row1[0] === 0 && row2[1] === 0 && row3[2] === 0){
//             return 0;
//         }
//         else if (row1[0] === 1 && row2[1] === 1 && row3[2] === 1) {
//             return 1;
//         }
//
//     }
//     else if (row1[2] != null && row2[1] != null && row3[0] != null) { // diagonal right check
//         if (row1[2] === 0 && row2[1] === 0 && row3[0] === 0){
//             return 0;
//         }
//         else if (row1[2] === 1 && row2[1] === 1 && row3[0] === 1) {
//             return 1;
//         }
//     }
//     else {
//         console.log('end hit');
//     }
// };
//
// checkForWinner();
