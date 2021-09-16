function preload(){
    img=loadImage('https://www.happybirthdaymsg.com/wp-content/uploads/2016/01/happy-birthday-image-10.jpg');
}

function setup(){
    canvas = createCanvas(650,450);
    canvas.position(500,250);
   
}

function draw(){
    
    image(img, 300, 220, 150, 120);
    
    fill('green');
    stroke('green');
    rect(600,150,20,250);

    
    fill('green');
    stroke('green');
    rect(150,150,20,250);

    
    fill('green');
    stroke('green');
    rect(150,150,450,20);

    
    fill('green');
    stroke('green');
    rect(150,400,450,20);

    fill('blue');
stroke('blue')
ellipse(160, 160, 55, 55);
  
fill('blue');
stroke('blue');
ellipse(610, 160, 55, 55);

fill('blue');
stroke('blue');
ellipse(610, 410, 55, 55);
  
fill('blue');
stroke('blue');
ellipse(160, 410, 55, 55);
}

function take_snapshot(){
 save('image-cardCentury.png');
}