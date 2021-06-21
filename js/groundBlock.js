
function drawBlock() {
 
    draw.fillStyle = 'black'; 
    draw.fillRect(0*unit,3*unit,15*unit,1*unit);
    draw.fillRect(15*unit,0*unit,1*unit,4*unit);
    draw.fillRect(7*unit,0*unit,1*unit,3*unit);
    draw.fillRect(3*unit,3*unit,1*unit,4*unit);
    draw.fillRect(11*unit,4*unit,1*unit,4*unit);
    draw.fillRect(0*unit,7*unit,16*unit,1*unit);
    draw.fillRect(7*unit,8*unit,1*unit,4*unit);
    draw.fillRect(15*unit,8*unit,1*unit,4*unit);
    draw.fillRect(0*unit,11*unit,15*unit,1*unit);
    draw.fillRect(3*unit,12*unit,1*unit,4*unit);
    draw.fillRect(11*unit,12*unit,1*unit,4*unit);
    
    draw.fillRect(0*unit,15*unit,16*unit,1*unit);
    
    //draw.fillRect(*unit,*unit,*unit,*unit);

   
   
    draw.fillStyle = 'rgb(184,84,37)'; // brick
    draw.fillRect(0*unit,0*unit,7*unit,3*unit);
    draw.fillRect(8*unit,0*unit,7*unit,3*unit);
    draw.fillRect(0*unit,4*unit,3*unit,3*unit);
    draw.fillRect(4*unit,4*unit,7*unit,3*unit);
    draw.fillRect(12*unit,4*unit,4*unit,3*unit);
    draw.fillRect(0*unit,8*unit,7*unit,3*unit);
    draw.fillRect(8*unit,8*unit,7*unit,3*unit);
    draw.fillRect(0*unit,12*unit,3*unit,3*unit);
    draw.fillRect(4*unit,12*unit,7*unit,3*unit);
    draw.fillRect(12*unit,12*unit,4*unit,3*unit);
    //draw.fillRect(*unit,*unit,*unit,*unit);
    
  
}
// 1. Initializing a variable for the loop.
// 2. condition (qustion) to loop
// 3. update the variable
function drawBlocks() {
    yPositin = 2180;
    magnify = 0.2
    numBlock = 21;
    for (column = 0; column < numBlock; column++) {
        draw.save();
        draw.scale(magnify,magnify);
        draw.translate(column*unit*16,yPositin)
        drawBlock();
        draw.restore();
    }
}