var colors=["red","yellow","green","magenta","pink","blue","violet","purple","aqua","lime"]
function setup() {
  createCanvas(5000,1000);
}

function draw() 
{
 
  if (keyDown("1")){
    background("red")
    
  }
  if (keyWentUp("1")){
    background("red")
  }
   
  if (keyDown("2")){
    background("yellow")
    
  }
  if (keyWentUp("2")){
    background("yellow")
  }
  if (keyDown("3")){
    background("green")
    
  }
  if (keyWentUp("3")){
    background("green")
  }
  if (keyDown("4")){
    background("magenta")
    
  }
  if (keyWentUp("4")){
    background("magenta")
  }
  if (keyDown("5")){
    background("pink")
    
  }
  if (keyWentUp("5")){
    background("pink")
  }
  if (keyDown("6")){
    background("blue")
    
  }
  if (keyWentUp("6")){
    background("blue")
  }
  if (keyDown("7")){
    background("aqua")
    
  }
  if (keyWentUp("7")){
    background("aqua")
  }
  if (keyDown("8")){
    background("lime")
    
  }
  if (keyWentUp("8")){
    background("lime")
  }
  if (keyDown("9")){
    background("violet")
    
  }
  if (keyWentUp("9")){
    background("violet")
  }
  textSize(25)
  text("press numbers on your keyboard to change background color",500,500)
}



//function mousePressed(){
  //background(colors[(Math.round(Math.random(0,colors.length)))]);
//}

