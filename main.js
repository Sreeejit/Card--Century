function preload(){
    img=loadImage('https://media.istockphoto.com/vectors/happy-birthday-greeting-card-design-template-with-cute-wreath-vector-id637316620')
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