$(document).ready(function() {
  var maze = buildMaze();
  var mouse = initMouse(maze);
  var cheese = initCheese(maze);

  var moveToSquare = $('#0-1');

  // mouse = moveMouseTo(maze, mouse, moveToSquare);
  try {
    mouse = moveMouseTo(maze, mouse, moveToSquare);
  }
  catch(err) {
      alert('CAUGHT IT FAM');
  }

  // setTimeout(function(){
  //   var moveToSquare = $('#0-1');
  //   mouse = moveMouseTo(maze, mouse, moveToSquare);
  // }, 3000);

  // setTimeout(function(){
  //   var moveToSquare = $('#0-0');
  //   mouse = moveMouseTo(maze, mouse, moveToSquare);
  // }, 6000);

});

function initCheese(maze) {
  sq = $('#5-5');
  var x = sq[0].x.baseVal.value;
  var y = sq[0].y.baseVal.value;
  var width = sq[0].width.baseVal.value;
  var height = sq[0].height.baseVal.value;
  var cheese = maze.image('assets/cheese.png', x, y, width, height);

  sq[0].hasCheese = true;
  console.log(sq);
  return cheese;

}

function buildMaze() {
  var docWidth = 1400;
  var docHeight = 600;

  var xroot = docWidth/4;
  var yroot = docHeight/8;
  var canvasWidth = docWidth-(xroot*2);
  var canvasHeight = canvasWidth;
  var squareSize = canvasWidth/8;
  var paper = Raphael(xroot, yroot, canvasWidth, canvasHeight);

  for (var i = 0; i < canvasWidth; i+= squareSize) {
    for (var j = 0; j < canvasHeight; j += squareSize) {
      var r = paper.rect(i, j, squareSize, squareSize);
      x = i/squareSize;
      y = j/squareSize;
      r[0].id=x+'-'+y;
      r[0].xcoord = x;
      r[0].ycoord = y;
      r[0].hasCheese = false;
    }
  }
  return paper;
}

function initMouse(maze) {
  sq = $('#0-0');
  var x = sq[0].x.baseVal.value;
  var y = sq[0].y.baseVal.value;
  var width = sq[0].width.baseVal.value;
  var height = sq[0].height.baseVal.value;
  var mouse = maze.image('assets/mouse.png', x, y, width, height);
  mouse[0].xcoord = x;
  mouse[0].ycoord = y;
  return mouse;
}

// The mouse can only move to adjacent squares.
// The mouse also cannot move diagonally.
function validateMove(mouse, sq) {
  var current = [mouse[0].xcoord, mouse[0].ycoord];
  var dest = [sq[0].xcoord, sq[0].ycoord];
  if(Math.abs(current[0] - dest[0]) + Math.abs(current[1] - dest[1]) == 1)
  {
    return true;
  }
  else {
    return false;
  }
}

function moveMouseTo(maze, mouse, sq) {
  if (!validateMove(mouse, sq)) {
    throw "illegal move!";
    return;
  }

  var x = sq[0].x.baseVal.value;
  var y = sq[0].y.baseVal.value;
  var width = sq[0].width.baseVal.value;
  var height = sq[0].height.baseVal.value;
  mouse.remove();
  var mouse = maze.image('assets/mouse.png', x, y, width, height);
  mouse[0].x = sq[0].xcoord;
  mouse[0].y = sq[0].ycoord;
  return mouse;
}

function coordsToId(xcoord, ycoord) {
  return '#'+xcoord+'-'+ycoord
}
