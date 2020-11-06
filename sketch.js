function setup() { 
	createCanvas(windowWidth, windowHeight);
	noStroke();
} 

let vomPos = 0;
let vomIsSet = false;
let vommanIsThere = false;
let mousepress = false;

function mousePressed() {
   if (mouseButton === LEFT) {
      mousepress = true
   }
}

function vomprob(){
   let i = random(0,1)

   if (i <= 0.1) {
      return false
   } else {
      return true
   }
}

function draw() { 
   background('rgb(131,175,155)'); //Jade
   
   if (mousePress) {
      drawHappyFace(mouseX, mouseY, vomprob())
      mousepress = false
   }
   
}



function drawHappyFace(x, y, emo){
   
   //Face
   if (emo) {
      fill('rgb(135,206,250)');//Healthy Blue
   } 
   else {
      fill('rgb(60,179,113)');//Sick Green
   }
   ellipse(x, y, 100, 100);

   //Eyes
   if (emo) {
      //Wonky Eye 1
      fill(30);//dark gray
      ellipse(x-25, y-10, 10, 10);

      //Wonky Eye 2
      ellipse(x+25, y-20, 10, 10);
   } 
   else {
      //Sick Eye 1
      stroke(30);//dark gray
      strokeWeight(10);//Thicc
      line(x-25, y-10, x-15, y-20)

      //Sick Eye 2
      line(x+15, y-20, x+25, y-10)

      noStroke();
   }

   //Mouth
   if (emo) {
      fill(252,157,154);//light pink
      arc(x, y+25, 30, 30, 0, radians(180), PIE); 
   }
   else {
      fill(252,157,154);//light pink
      arc(x, y+25, 30, 30, radians(180), 0, PIE); 
   }

   //Vomit and state that vom man is present
   if (emo == false) {
      vomit(x, y+25);
      vommanIsThere = true
   }
};

function vomit(x, y) {

   if (vomIsSet == false) {
      vomPos = y
      vomIsSet = true
   }

   fill('rgb(50,205,50)'); //Lime Green
   ellipse(x, vomPos, 20, 20);

   vomPos++;

   if (vomPos > height/2+20) {
      vomPos = y
   }

}

