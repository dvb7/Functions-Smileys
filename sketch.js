function setup() { 
	createCanvas(600, 200);
	noStroke();
} 

function draw() { 
	background('rgb(131,175,155)'); //Jade
   
   drawHappyFace(300, 100, false);
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
};

