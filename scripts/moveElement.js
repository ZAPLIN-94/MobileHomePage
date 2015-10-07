function moveElement(elementID,final_x,final_y,interval){
    //if(!document.getElementById) return false;
    //if(!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if(xpos == final_x && ypos == final_y){
        return true;
    }
    if(xpos < final_x){
        xpos+=2;
    }
    if(xpos > final_x){
        xpos-=2;
    }
    if(ypos < final_y){
        ypos+=2;
    }
    if(ypos > final_y){
        ypos-=2;
    }
    elem.style.left = xpos +"px";
    elem.style.top = ypos +"px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
   elem.movement = setTimeout(repeat,interval);
}
