var canvas;
var dog1Image;
var dog2Image;
var dog;
var count;
var life;
var bottle1, bottle2, bottle3, bottle4, bottle5, bottle6, bottle7, bottle8, bottle9, bottle10, bottle11,bottle12,bottle13,bottle14,bottle15,bottle16,bottle17,bottle18,bottle19,bottle20;
function preload() {
	dog1Image = loadImage("images/dogImg.png");
	dog2Image = loadImage("images/dogImg1.png");
}

function setup() {
	canvas = createCanvas(800, 700);
	dog = createSprite(400, 350, 20, 30);
	dog.scale = 0.3;
	dog.addImage("dog1Image", dog1Image);
	count = 20;
	life = 20;
}


function draw() {
	background("green");
	if (keyCode === 32) {
		count -= 1;
		life += 1
		text("Dog lived", 0, 15);
		background("blue");
		dog.addImage("dog2Image", dog2Image);
	}
	if (keyCode === 49) {
		count += 1;
		life -= 1;
		world.add(World, bottle20);
	}
	if (count <=0) {
    
		textColor = "yellow";
		text("Dog died", 0, 15);
		background("yellow");
	}
	drawSprites();
	canvas.color = "green";
}