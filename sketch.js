const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rock , stone_image;
var ax , ax_image;
var gun , gun_image;
var bungla , bungla_image;
var background , background_image;

function preload(){
 stone_image = loadImage("Image/Stone.png");
 gun_image = loadImage("Images/Gun.png");
 bungla_image = loadImage("Images/Bungla.jpg");
 ax_image = loadImage("Images/AX.png");
 background_image = loadImage("Images/Background.jpg");
}
    function draw(){
    createCanavas = (diplayWidht,displayHeight);
    rock = createSprite(150,50,20,30);
    Stone.addImage(stone_image);
    rock.velocityX = 60;
    gun = createSprite(490,50,10,10);
    Gun.addImage(gun_image);
    Gun.velocityX = 50;
    ax = createSprite(450,80,40,40);
    Ax.addImage(ax_image);
    ax.velocityX = 60;
}