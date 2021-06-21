var draw;
var unit = 20;
var x = 0;
var y = 0;
var scale = 1;
var characterX = 0;
var direction = 1;
const scaleChange = 0.1;
window.onload = init;
// When there is a key that has been pressed, run the checkkey function
document.onkeydown = checkKey;
function init() {
    var canvas = document.getElementById("myCanvas");
    draw = canvas.getContext("2d");
    draw.canvas.width = 1300;
    draw.canvas.height = 500;
    updateUI();
    
      
}
function checkKey(e) {

    if (e.keyCode == '32') { // space
        x = 0;
        y = 0;  
       draw.resetTransform();
    }
    if (e.keyCode == '37') { // left arrow
        x--; 
        draw.translate(-unit,0);
    }
    if(e.keyCode == '38') { // up arrow
        y--;
        draw.translate(0,-unit);
    }
    if (e.keyCode == '39') { // right arrow
        x++;
        draw.translate(unit,0);
    }
    if (e.keyCode == '40') { // down arrow
        y++;
        draw.translate(0,unit);
    }
    if (e.keyCode == '65') { // a
        characterX--;
        direction = -1;
        updateCharacter();
    }
    if (e.keyCode == '68') { // d
        characterX++;
        direction = 1;
    updateCharacter();
    
    }
    if (e.keyCode == '187') { // +
        draw.scale(1/scale,1/scale);
        scale += scaleChange;
        draw.scale(scale,scale);
    }
    if (e.keyCode == '189') { // -
        draw.scale(1/scale,1/scale);
        scale -= scaleChange;
        draw.scale(scale,scale);
    }

    updateUI();
    
    
}

function updateCharacter(){
    clear();
    drawBackground();
    drawMario(characterX) 
    
}
function updateUI() {
    document.getElementById("xTranslate").innerHTML = "x : " + x;
        document.getElementById("yTranslate").innerHTML = "y : " + y;
        document.getElementById("scale").innerHTML = "scale : " +  scale;
}
function drawBackground() {
    draw.fillStyle ='rgb(153,217,234)'; //sky
    draw.fillRect(0,0,100*unit,100*unit);
    drawBlocks();
    
}

function clear(){
    draw.clearRect(0,0,draw.canvas.width,draw.canvas.height);
}
function drawGlasses(){
    draw.fillStyle = 'black';
    draw.fillRect(5*unit,0,unit,unit);
    draw.fillRect(4*unit,1*unit,unit,unit);
    draw.fillRect(3*unit,2*unit,unit,unit);
    draw.fillRect(2*unit,3*unit,unit,unit);
    draw.fillRect(1*unit,4*unit,unit,unit);
    draw.fillRect(0*unit,5*unit,unit,unit);
    draw.fillRect(0,6*unit,29*unit,unit);
    draw.fillRect(0*unit,7*unit,13*unit,1*unit); 
    draw.fillRect(16*unit,7*unit,13*unit,1*unit);
    draw.fillRect(1*unit,8*unit,2*unit,1*unit);
    draw.fillRect(4*unit,8*unit,1*unit,1*unit);
    draw.fillRect(6*unit,8*unit,7*unit,1*unit);
    draw.fillRect(2*unit,9*unit,2*unit,1*unit);
    draw.fillRect(5*unit,9*unit,1*unit,1*unit);
    draw.fillRect(7*unit,9*unit,5*unit,1*unit);
    draw.fillRect(3*unit,10*unit,2*unit,1*unit);
    draw.fillRect(6*unit,10*unit,1*unit,1*unit);
    draw.fillRect(8*unit,10*unit,3*unit,1*unit);
     draw.fillRect(4*unit,11*unit,5*unit,1*unit);
     draw.fillRect(28*unit,5*unit,1*unit,1*unit);
     draw.fillRect(29*unit,4*unit,1*unit,1*unit);
     draw.fillRect(30*unit,3*unit,1*unit,1*unit);
     draw.fillRect(31*unit,2*unit,1*unit,1*unit);
     draw.fillRect(32*unit,1*unit,1*unit,1*unit);
     draw.fillRect(33*unit,0*unit,1*unit,1*unit);
     draw.fillRect(16*unit,8*unit,2*unit,1*unit);
     draw.fillRect(17*unit,8*unit,1*unit,1*unit);
     draw.fillRect(19*unit,8*unit,1*unit,1*unit);
     draw.fillRect(21*unit,8*unit,7*unit,1*unit);
     draw.fillRect(17*unit,9*unit,2*unit,1*unit);
     draw.fillRect(20*unit,9*unit,1*unit,1*unit);
     draw.fillRect(22*unit,9*unit,5*unit,1*unit);
     draw.fillRect(18*unit,10*unit,2*unit,1*unit);
     draw.fillRect(21*unit,10*unit,1*unit,1*unit);
     draw.fillRect(23*unit,10*unit,3*unit,1*unit);
     draw.fillRect(19*unit,11*unit,6*unit,1*unit);
}
function drawCursor(){
            draw.fillStyle = 'black';
     draw.fillRect(40*unit,19,unit,17*unit,1*unit);
     draw.fillRect(41*unit,16*unit,1*unit,1*unit);
     draw.fillRect(41*unit,2*unit,1*unit,1*unit);
     draw.fillRect(42*unit,3*unit,1*unit,1*unit);
     draw.fillRect(42*unit,15*unit,1*unit,1*unit);
     draw.fillRect(43*unit,14*unit,2*unit,1*unit);
     draw.fillRect(43*unit,4*unit,1*unit,1*unit);
     draw.fillRect(44*unit,5*unit,1*unit,1*unit);
     draw.fillRect(45*unit,6*unit,1*unit,1*unit);
     draw.fillRect(46*unit,7*unit,1*unit,1*unit);
     draw.fillRect(47*unit,8*unit,1*unit,1*unit);
     draw.fillRect(48*unit,9*unit,1*unit,1*unit);
     draw.fillRect(49*unit,10*unit,1*unit,1*unit);
     draw.fillRect(50*unit,11*unit,1*unit,1*unit);
     draw.fillRect(47*unit,12*unit,5*unit,1*unit);
     draw.fillRect(44*unit,13*unit,1*unit,1*unit);
     draw.fillRect(45*unit,15*unit,1*unit,2*unit);
     draw.fillRect(47*unit,13*unit,1*unit,2*unit);
     draw.fillRect(46*unit,17*unit,1*unit,2*unit);
     draw.fillRect(47*unit,19*unit,1*unit,2*unit);
     draw.fillRect(48*unit,21*unit,2*unit,1*unit);
     draw.fillRect(48*unit,15*unit,1*unit,2*unit);
     draw.fillRect(49*unit,17*unit,1*unit,2*unit);
     draw.fillRect(50*unit,19*unit,1*unit,2*unit);
    }
    
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);
     //draw.fillRect(*unit,*unit,*unit,*unit);

     function drawCharmander(){
    draw.fillStyle = 'black';
    draw.fillRect(0*unit,4*unit,1*unit,3*unit);
    draw.fillRect(1*unit,2*unit,1*unit,2*unit);
    draw.fillRect(2*unit,1*unit,1*unit,1*unit);
    draw.fillRect(3*unit,0*unit,1*unit,1*unit);
    draw.fillRect(4*unit,1*unit,1*unit,3*unit);
    draw.fillRect(5*unit,4*unit,1*unit,3*unit);
    draw.fillRect(1*unit,7*unit,2*unit,1*unit);
    draw.fillRect(2*unit,8*unit,1*unit,2*unit);
    draw.fillRect(3*unit,10*unit,1*unit,2*unit);
    draw.fillRect(4*unit,12*unit,1*unit,1*unit);
    draw.fillRect(5*unit,13*unit,2*unit,1*unit);
    draw.fillRect(4*unit,7*unit,1*unit,2*unit);
    draw.fillRect(5*unit,9*unit,1*unit,1*unit);
    draw.fillRect(6*unit,10*unit,3*unit,1*unit);
    draw.fillRect(7*unit,10*unit,1*unit,5*unit);
    draw.fillRect(8*unit,14*unit,1*unit,4*unit);
    draw.fillRect(9*unit,17*unit,3*unit,1*unit);
    draw.fillRect(12*unit,16*unit,1*unit,1*unit);
    draw.fillRect(11*unit,15*unit,3*unit,1*unit);
    draw.fillRect(9*unit,15*unit,1*unit,1*unit);
    draw.fillRect(14*unit,14*unit,3*unit,1*unit);
    draw.fillRect(15*unit,13*unit,1*unit,1*unit);
    draw.fillRect(17*unit,13*unit,1*unit,1*unit);
    draw.fillRect(16*unit,10*unit,1*unit,3*unit);
    draw.fillRect(15*unit,10*unit,3*unit,1*unit);
    draw.fillRect(8*unit,9*unit,1*unit,2*unit);
    draw.fillRect(9*unit,8*unit,1*unit,1*unit);
    draw.fillRect(10*unit,6*unit,1*unit,2*unit);
    draw.fillRect(11*unit,4*unit,1*unit,2*unit);
    draw.fillRect(12*unit,2*unit,1*unit,2*unit);
    draw.fillRect(13*unit,1*unit,1*unit,1*unit);
    draw.fillRect(14*unit,0*unit,4*unit,1*unit);
    draw.fillRect(18*unit,1*unit,1*unit,1*unit);
    draw.fillRect(19*unit,2*unit,1*unit,2*unit);
    draw.fillRect(20*unit,4*unit,1*unit,1*unit);
    draw.fillRect(21*unit,5*unit,1*unit,3*unit);
    draw.fillRect(20*unit,8*unit,1*unit,1*unit);
    draw.fillRect(18*unit,9*unit,2*unit,1*unit);
    draw.fillRect(12*unit,10*unit,1*unit,1*unit);
    draw.fillRect(13*unit,11*unit,1*unit,1*unit);
    draw.fillRect(11*unit,12*unit,2*unit,1*unit);
    draw.fillRect(15*unit,5*unit,1*unit,3*unit);
    draw.fillRect(16*unit,6*unit,1*unit,2*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
//draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    draw.fillStyle = 'rgb(244,67,54)'; // red
    draw.fillRect(3*unit,1*unit,1*unit,5*unit);
    draw.fillRect(2*unit,2*unit,1*unit,3*unit);
    draw.fillRect(1*unit,4*unit,1*unit,3*unit);
    draw.fillRect(4*unit,4*unit,1*unit,3*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);

    draw.fillStyle = 'rgb(243,119,53)'; // Orange
    draw.fillRect(3*unit,8*unit,1*unit,2*unit);
    draw.fillRect(4*unit,9*unit,1*unit,3*unit);
    draw.fillRect(5*unit,10*unit,1*unit,3*unit);
    draw.fillRect(6*unit,11*unit,1*unit,2*unit);
    draw.fillRect(14*unit,1*unit,4*unit,1*unit);
    draw.fillRect(13*unit,2*unit,6*unit,1*unit);
    draw.fillRect(13*unit,3*unit,6*unit,1*unit);
    draw.fillRect(12*unit,4*unit,8*unit,1*unit);
    draw.fillRect(12*unit,5*unit,3*unit,1*unit);
    draw.fillRect(11*unit,6*unit,4*unit,1*unit);
    draw.fillRect(11*unit,7*unit,4*unit,1*unit);
    draw.fillRect(10*unit,8*unit,10*unit,1*unit);
    draw.fillRect(9*unit,9*unit,9*unit,1*unit);
    draw.fillRect(9*unit,10*unit,3*unit,1*unit);
    draw.fillRect(8*unit,11*unit,5*unit,1*unit);
    draw.fillRect(8*unit,12*unit,3*unit,1*unit);
    draw.fillRect(8*unit,13*unit,4*unit,1*unit);
    draw.fillRect(9*unit,14*unit,3*unit,1*unit);
    draw.fillRect(10*unit,14*unit,1*unit,3*unit);
    draw.fillRect(17*unit,4*unit,1*unit,4*unit);
    draw.fillRect(18*unit,4*unit,1*unit,4*unit);
    draw.fillRect(19*unit,4*unit,1*unit,4*unit);
    draw.fillRect(20*unit,5*unit,1*unit,3*unit);
    draw.fillStyle = 'rgb(255,235,59)'; // yellow
    draw.fillRect(2*unit,5*unit,1*unit,2*unit);
    draw.fillRect(3*unit,6*unit,1*unit,2*unit);
    draw.fillRect(13*unit,10*unit,2*unit,1*unit);
    draw.fillRect(14*unit,11*unit,2*unit,1*unit);
    draw.fillRect(13*unit,12*unit,3*unit,1*unit);
    draw.fillRect(12*unit,13*unit,3*unit,1*unit);
    draw.fillRect(12*unit,14*unit,2*unit,1*unit);
  
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);


}
function drawMyname(){
    draw.save();
    draw.translate(51*unit,34*unit);
    draw.scale(0.5,0.5)
        draw.fillRect(0*unit,0*unit,1*unit,7*unit);
    draw.fillRect(0*unit,3*unit,4*unit,1*unit);
    draw.fillRect(4*unit,0*unit,1*unit,7*unit);
    draw.fillRect(7*unit,0*unit,3*unit,1*unit);
    draw.fillRect(6*unit,1*unit,1*unit,6*unit);
    draw.fillRect(10*unit,1*unit,1*unit,6*unit);
    draw.fillRect(6*unit,3*unit,4*unit,1*unit);
    draw.fillRect(12*unit,0*unit,1*unit,7*unit);
    draw.fillRect(12*unit,0*unit,4*unit,1*unit);
    draw.fillRect(12*unit,3*unit,4*unit,1*unit);
    draw.fillRect(16*unit,1*unit,1*unit,2*unit);
    draw.fillRect(14*unit,3*unit,1*unit,2*unit);
    draw.fillRect(15*unit,5*unit,1*unit,1*unit);
    draw.fillRect(16*unit,6*unit,1*unit,1*unit);
    draw.fillRect(12*unit,0*unit,1*unit,7*unit);
    draw.fillRect(12*unit,0*unit,4*unit,1*unit);
    draw.fillRect(12*unit,3*unit,4*unit,1*unit);
    draw.fillRect(16*unit,1*unit,1*unit,2*unit);
    draw.fillRect(14*unit,3*unit,1*unit,2*unit);
    draw.fillRect(15*unit,5*unit,1*unit,1*unit);
    draw.fillRect(18*unit,0*unit,1*unit,7*unit);
    draw.fillRect(18*unit,0*unit,4*unit,1*unit);
    draw.fillRect(18*unit,3*unit,4*unit,1*unit);
    draw.fillRect(22*unit,1*unit,1*unit,2*unit);
    draw.fillRect(20*unit,4*unit,1*unit,1*unit);
    draw.fillRect(21*unit,5*unit,1*unit,1*unit);
    draw.fillRect(22*unit,6*unit,1*unit,1*unit);
    draw.fillRect(24*unit,0*unit,1*unit,2*unit);
    draw.fillRect(25*unit,2*unit,1*unit,1*unit);
    draw.fillRect(26*unit,3*unit,1*unit,4*unit);
    draw.fillRect(27*unit,2*unit,1*unit,1*unit);
    draw.fillRect(28*unit,0*unit,1*unit,2*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);


    //draw.fillRect(*unit,*unit,*unit,*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    draw.restore();

    draw.fillStyle ='rgb(153,217,234)'; //sky
    draw.fillRect(0,0,100*unit,100*unit);
}  



