function drawMario(){
    // var xPosition = 0;
    // var yPosition = 0;
    // var scale = 0.4;
    // draw.save();
    // draw.scale(scale,scale);
    // draw.translate(xPosition,YPosition);
    // x();
    // draw.restore();
   drawFace();
   drawBody();
}
function x(){
    draw.fillStyle = 'black';
    draw.fillRect(5*unit,0*unit,6*unit,1*unit);
    draw.fillRect(4*unit,1*unit,10*unit,1*unit);
    draw.fillRect(4*unit,2*unit,7*unit,1*unit);
    draw.fillRect(3*unit,3*unit,10*unit,1*unit);
    draw.fillRect(3*unit,4*unit,11*unit,1*unit);
    draw.fillRect(3*unit,5*unit,10*unit,1*unit);
    draw.fillRect(5*unit,6*unit,7*unit,1*unit);
    draw.fillRect(4*unit,7*unit,6*unit,1*unit);
    draw.fillRect(3*unit,8*unit,10*unit,1*unit);
    draw.fillRect(2*unit,9*unit,12*unit,1*unit);
    draw.fillRect(2*unit,10*unit,12*unit,1*unit);
    draw.fillRect(2*unit,11*unit,12*unit,1*unit);
    draw.fillRect(2*unit,12*unit,12*unit,1*unit);
    draw.fillRect(4*unit,13*unit,3*unit,1*unit);
    draw.fillRect(9*unit,13*unit,3*unit,1*unit);
    draw.fillRect(3*unit,14*unit,3*unit,1*unit);
    draw.fillRect(2*unit,15*unit,4*unit,1*unit);
    draw.fillRect(10*unit,14*unit,3*unit,1*unit);
    draw.fillRect(10*unit,15*unit,4*unit,1*unit);
}
   
   
 
    

// draw.fillStyle = 'rgb(161,61,46)'; // red
// draw.fillRect(5*unit,0*unit,6*unit,1*unit);
// draw.fillRect(4*unit,1*unit,10*unit,1*unit);
// draw.fillRect(6*unit,7*unit,1*unit,3*unit);
// draw.fillRect(9*unit,8*unit,1*unit,2*unit);
// draw.fillRect(7*unit,9*unit,2*unit,4*unit);
// draw.fillRect(5*unit,10*unit,1*unit,4*unit);
// draw.fillRect(4*unit,12*unit,3*unit,2*unit);
// draw.fillRect(5*unit,11*unit,6*unit,2*unit);
// draw.fillRect(10*unit,10*unit,1*unit,4*unit);
// draw.fillRect(9*unit,12*unit,3*unit,2*unit);

// draw.fillStyle = 'rgb(106,106,32)'; // green
// draw.fillRect(4*unit,2*unit,3*unit,1*unit);
// draw.fillRect(5*unit,2*unit,1*unit,3*unit);
// draw.fillRect(5*unit,4*unit,2*unit,1*unit);
// draw.fillRect(3*unit,3*unit,1*unit,3*unit);
// draw.fillRect(3*unit,5*unit,2*unit,1*unit);
// draw.fillRect(9*unit,2*unit,1*unit,2*unit);
// draw.fillRect(9*unit,5*unit,4*unit,1*unit);
// draw.fillRect(10*unit,4*unit,1*unit,1*unit);
// draw.fillRect(4*unit,7*unit,2*unit,3*unit);
// draw.fillRect(3*unit,8*unit,1*unit,2*unit);
// draw.fillRect(2*unit,9*unit,1*unit,1*unit);
// draw.fillRect(4*unit,10*unit,1*unit,1*unit);
// draw.fillRect(7*unit,7*unit,2*unit,2*unit);
// draw.fillRect(8*unit,7*unit,2*unit,1*unit);
// draw.fillRect(10*unit,15*unit,4*unit,1*unit);
// draw.fillRect(10*unit,14*unit,3*unit,1*unit);
// draw.fillRect(3*unit,14*unit,3*unit,1*unit);
// draw.fillRect(2*unit,15*unit,4*unit,1*unit);
// draw.fillRect(10*unit,8*unit,3*unit,2*unit);
// draw.fillRect(11*unit,10*unit,1*unit,1*unit);
// draw.fillRect(13*unit,9*unit,1*unit,1*unit);
// draw.fillStyle = 'rgb(215,159,66)'; // brown peach
// draw.fillRect(7*unit,2*unit,2*unit,5*unit);
// draw.fillRect(6*unit,3*unit,1*unit,1*unit);
// draw.fillRect(9*unit,4*unit,1*unit,1*unit);
// draw.fillRect(10*unit,2*unit,1*unit,2*unit);
// draw.fillRect(11*unit,3*unit,2*unit,2*unit);
// draw.fillRect(13*unit,4*unit,1*unit,1*unit);
// draw.fillRect(5*unit,5*unit,2*unit,2*unit);
// draw.fillRect(9*unit,6*unit,3*unit,1*unit);
// draw.fillRect(4*unit,3*unit,1*unit,2*unit);
// draw.fillRect(12*unit,10*unit,2*unit,3*unit);
// draw.fillRect(11*unit,11*unit,1*unit,1*unit);
// draw.fillRect(9*unit,10*unit,1*unit,1*unit);
// draw.fillRect(6*unit,10*unit,1*unit,1*unit);
// draw.fillRect(2*unit,10*unit,2*unit,3*unit);
// draw.fillRect(4*unit,11*unit,1*unit,1*unit);
// drawFace()

function drawFace(){
    draw.fillStyle = 'rgb(161,61,46)'; // red
    draw.fillRect(5*unit,0*unit,6*unit,1*unit);
    draw.fillRect(4*unit,1*unit,10*unit,1*unit);

    draw.fillStyle = 'rgb(106,106,32)'; // green
    draw.fillRect(4*unit,2*unit,3*unit,1*unit);
    draw.fillRect(5*unit,2*unit,1*unit,3*unit);
    draw.fillRect(5*unit,4*unit,2*unit,1*unit);
    draw.fillRect(3*unit,3*unit,1*unit,3*unit);
    draw.fillRect(3*unit,5*unit,2*unit,1*unit);
    draw.fillRect(9*unit,2*unit,1*unit,2*unit);
    draw.fillRect(9*unit,5*unit,4*unit,1*unit);
    draw.fillRect(10*unit,4*unit,1*unit,1*unit);

    draw.fillStyle = 'rgb(215,159,66)'; // brown peach
     draw.fillRect(7*unit,2*unit,2*unit,5*unit);
    draw.fillRect(6*unit,3*unit,1*unit,1*unit);
    draw.fillRect(9*unit,4*unit,1*unit,1*unit);
    draw.fillRect(10*unit,2*unit,1*unit,2*unit);
    draw.fillRect(11*unit,3*unit,2*unit,2*unit);
    draw.fillRect(13*unit,4*unit,1*unit,1*unit);
    draw.fillRect(5*unit,5*unit,2*unit,2*unit);
    draw.fillRect(9*unit,6*unit,3*unit,1*unit);
    draw.fillRect(4*unit,3*unit,1*uniit,1*unit);
}
function drawBody(){
    draw.fillStyle = 'rgb(106,106,32)'; // green
    draw.fillRect(4*unit,7*unit,2*unit,3*unit);
    draw.fillRect(3*unit,8*unit,1*unit,2*unit);
    draw.fillRect(2*unit,9*unit,1*unit,1*unit);
    draw.fillRect(4*unit,10*unit,1*unit,1*unit);
    draw.fillRect(7*unit,7*unit,2*unit,2*unit);
    draw.fillRect(8*unit,7*unit,2*unit,1*unit);
    draw.fillRect(10*unit,15*unit,4*unit,1*unit);
    draw.fillRect(10*unit,14*unit,3*unit,1*unit);
    draw.fillRect(3*unit,14*unit,3*unit,1*unit);
    draw.fillRect(2*unit,15*unit,4*unit,1*unit);
    draw.fillRect(10*unit,8*unit,3*unit,2*unit);
    draw.fillRect(11*unit,10*unit,1*unit,1*unit);
    draw.fillRect(13*unit,9*unit,1*unit,1*unit);

    // draw.fillStyle = 'rgb(215,159,66)'; // brown peach
    // draw.fillRect(12*unit,10*unit,2*unit,3*unit);
    // draw.fillRect(11*unit,11*unit,1*unit,1*unit);
    // draw.fillRect(9*unit,10*unit,1*unit,1*unit);
    // draw.fillRect(6*unit,10*unit,1*unit,1*unit);
    // draw.fillRect(2*unit,10*unit,2*unit,3*unit);
    // draw.fillRect(4*unit,11*unit,1*unit,1*unit);

    // draw.fillStyle = 'rgb(161,61,46)'; // red
    // draw.fillRect(6*unit,7*unit,1*unit,3*unit);
    // draw.fillRect(9*unit,8*unit,1*unit,2*unit);
    // draw.fillRect(7*unit,9*unit,2*unit,4*unit);  
    // draw.fillRect(5*unit,10*unit,1*unit,4*unit);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    // draw.fillRect(4*unit,12*unit,3*unit,2*unit);
    // draw.fillRect(5*unit,11*unit,6*unit,2*unit);
    // draw.fillRect(10*unit,10*unit,1*unit,4*unit);
    // draw.fillRect(9*unit,12*unit,3*unit,2*unit);
}