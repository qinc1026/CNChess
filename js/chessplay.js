var chessplay = chessplay || {}
chessplay.init = function(){
    chessplay.currplayer = 1;
    //chessplay.map = chessplay.initmap();
    chessplay.width = board.width;
    chessplay.height = board.height;
    chessplay.loadimage();
    // chessplay.chessboard = document.getElementsByClassName("board");
    // chessplay.chessboard.width = chessplay.width;
    // chessplay.chessboard.height = chessplay.height;

    chessplay.canvas =	document.getElementById("chess");
    chessplay.context = chessplay.canvas.getContext("2d") ;
    chessplay.canvas.width = chessplay.width + 300
    chessplay.canvas.height = chessplay.height + 300

    chessplay.xspace = 504/8;
    chessplay.yspace = 585/9;
    chessplay.xstart = 132;
    chessplay.ystart = 128;

    chessplay.context.clearRect(0, 0, chessplay.width, chessplay.height + 300);
    chessplay.context.drawImage(chessplay.background, 100,100);
    chessplay.context.drawImage(chessplay.king, chessplay.xstart - 25,chessplay.ystart - 25 + chessplay.yspace * 0,50,50);
    chessplay.context.drawImage(chessplay.king, chessplay.xstart - 25,chessplay.ystart - 25 + chessplay.yspace * 0,50,50);
}

var board = {
    width: 571,
    height : 640
}
chessplay.loadimage = function(){
    chessplay.background = new Image()
    chessplay.background.src = "img/" + "chess2.png"

    // chessplay.rook = new Image()
    // chessplay.rook.src = "img/rook.png"
    //
    // chessplay.knight = new Image()
    // chessplay.knight.src = "img/knight.png"
    //
    // chessplay.bishop = new Image()
    // chessplay.bishop.src = "img/bishop.png"
    //
    // chessplay.pawn = new Image()
    // chessplay.pawn.src = "img/pawn.png"
    //
    // chessplay.artillery = new Image()
    // chessplay.artillery.src = "img/artillery.png"
    //
    chessplay.king = new Image()
    chessplay.king.src = "img/king.png"
    //
    // chessplay.bodyguard = new Image()
    // chessplay.bodyguard.src = "img/bodyguard.png"

}

chessplay.init()