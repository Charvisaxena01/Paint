last_position_of_y=0;
last_position_of_x=0;
var canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="red";
//ctx.beginPath();
//ctx.strokeStyle=color;
 //ctx.lineWidth="2";
 //ctx.arc(250, 250,100 ,0 ,360);
//ctx.stroke();


canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
MouseEvent="mouseUp";
console.log(MouseEvent);
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    MouseEvent="mouseleave";
    console.log(MouseEvent);
}


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    MouseEvent="mousedown";
    console.log(MouseEvent);
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft; 
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
 console.log(current_position_of_mouse_x + " " +current_position_of_mouse_y);
   if(MouseEvent=="mousedown") {
       ctx.beginPath();
       ctx.strokeStyle="purple";
       ctx.lineWidth= 3;
       ctx.moveTo(last_position_of_x , last_position_of_y);
ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y );
ctx.stroke();

   }
   last_position_of_x= current_position_of_mouse_x;
last_position_of_y=current_position_of_mouse_y;
}
function clearArea() {
     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
     }

var width= screen.width;
var height= screen.height;
var new_width= screen.width-100;
var new_height= screen.height-300;
 if(width<992){
 document.getElementById("myCanvas").width=new_width;
 document.getElementById("myCanvas").height=new_height;
 document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart",TouchStart)
function TouchStart(e){
    last_position_of_mouse_x= e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_mouse_y= e.touches[0].clientY-canvas.offsetTop;
}





canvas.addEventListener("touchmove",TouchMove)
function TouchMove(e){
    current_position_of_x = e.touches[0].clientX - canvas.offsetLeft; 
    current_position_of_y = e.touches[0].clientY - canvas.offsetTop;
 console.log(current_position_of_x + " " +current_position_of_y);
  
       ctx.beginPath();
       ctx.strokeStyle="purple";
       ctx.lineWidth= 3;
       ctx.moveTo(last_position_of_mouse_x , last_position_of_mouse_y);
ctx.lineTo(current_position_of_x,current_position_of_y );
ctx.stroke();
last_position_of_mouse_x = current_position_of_x;
    last_position_of_mouse_y = current_position_of_y;

   }
   