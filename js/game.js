
var Game = function() {
  this.cards = [];
  this.characters = [];
  this.shuffledCards = [];
  this.player1 = {};
  this.player2 = {};
}


function Player(name) {
  this.playerHand = [];
  this.health = 1000; 
  this.name = name;
}

// Game.prototype.recieveDamage = function(attack){
//   this.player2.health - this.player1.health.attackPoints;
//   if (this.health > 150){
//     return this.name + " has received " + attackPoints + " points of damage";
//   } else if (this.player2.health > 150){

//     return this.name + " has recieved " + attackPoints + "points of damage";
//   }

// }

Player.prototype.recieveDamage = function(damagePoints){
 this.health -= damagePoints
}


var Card = function(name,image, description, attackPoints){
  this.name = name
  this.image = image
  this.description = description
  this.attackPoints = attackPoints
} 

Card.prototype.attack = function(){
 return this.attackPoints;

}

// Player.prototype.attack = function(player, attackPoints) {
//   if(player1.attackPoints > player2.attackPoints){
//     return player2.recieveDamage;
//   } else  {
//    return this.player1 = recieveDamage;
//   }
//   return this.cardsArray[i].attackPoints;
// };


var Character = function(theName, health ){
  this.name = theName;
  this.health = health;
  
} 

var theGame;

window.onload = function(){

  theGame = new Game();
  var firstPlayer = new Player("Crystal");
  var secondPlayer = new Player("Ragnar");
  theGame.cards = cardsArray;
  theGame.characters = charactersArray;
  theGame.player1 = firstPlayer;
  theGame.player2 = secondPlayer;
  
  var shuffledCards = _.shuffle(theGame.cards);
  theGame.shuffledCards = shuffledCards
  
  
  document.getElementById("start").onclick = function(e) {
    e.currentTarget
    startGame();
  }
}

function startGame() {
  theGame.drawCards();

}


 Game.prototype.drawCards = function(){
  // theGame.cards is all the possible cards
  
  for (var i = 0; i < 10; i++) {
    this.player1.playerHand.push(this.shuffledCards[i]);
  }
    this.shuffledCards = _.shuffle(this.cards);

  for (var i = 0; i < 10; i++) {
    this.player2.playerHand.push(this.shuffledCards[i]);
  }

  console.log(this.player1.playerHand);
  console.log(this.player2.playerHand);
}

//  this.cardsArray is the deck of cards in the players hand



//this is what gets created by the constructor
// var blah = new Card("lalala", "images/boom.png")
// blah = {
//   name: "lalala",
//   image: "images/boom.jpg",
//   description: undefined,
//   attackpoints: undefined
// }



var cardsArray = [
  new Card("sword","sword.jpg","a random sword made of steel",5,),
  new Card("longClaw","longclaw.jpg","a fine sword made of valyrian steel",15,),
  new Card("bow","shortbow.jpg","a short bow",5,),
  new Card("ygritte's bow","longbow.jpg", "a long bow that never misses its target", 15,),
  new Card("battleAxe","axe.jpg", "a long bow that never misses its target", 10,),
  new Card("dagger","dagger.jpg", "a rusted dagger made of steel", 10,),
  new Card("arakh","arakh.jpg", "a dothraki blade", 12,),
  new Card("catsPaw","catsPaw.jpg", "an assassins blade", 16,),
  new Card("dragon","drogon.jpg", "a powerfull fire breathing dragon named Drogon", 25,),
  new Card("iceBlade","iceblade.jpg", "a dagger made of ice from beyond the wall", 12,),
  new Card("wight","wight.jpg", "a reanimated corpse", 14,),
  new Card("direWolf","direwolf.jpg", "an unusually large and intelligent species of wolf" , 18,),
  new Card("bear","bear.jpg", "a brown bear" , 19,),
  new Card("wightBear","wightbear.png", "a reanimated bear" , 19,),
  new Card("iceSpear","icespear.jpg", "a spear made of ice from beyond the wall" , 25,)
 ];

var charactersArray = [
    new Character ("khaleesi", 125),
    new Character ("Jon Snow", 120),
    new Character ("Cersei", 110),
    new Character ("Joffrey", 100),
    new Character ("Red Witch", 118),
    new Character ("Ice king", 150),
    new Character ("Bran", 100),
    new Character ("Tormund Giantsbane", 117),
    new Character ("Sir Davos", 100)
  ];

// var player1 = [];
// var player2 = [];

var name = charactersArray.name;




//  $(".start").click (function(){
//   var card = '';
//   theGame.cards.forEach(function (pic, index) {
//     card += '<div class= "card" id="card_' + pic.name + '">';
//     card += '    name="'       + pic.image +  '">';
//     card += '</div>';
//     card += '<div class="front" ';
//     card += 'style="background: url(images/' + pic.image + ') no-repeat">';
//     card += '</div>'; 
//  });
 


//  var cardsArray = [1,2,3,4,5]

//  //var shuffledBlah = _.shuffle();

//  var shuffledCards = _.shuffle(cardsArray);

//  shuffledCards.push(cardsArray);




// Game.prototype.shuffledCards = function (cardsArr) {
   
//   this.cardsArray = _.shuffle(cardsArr);
// }


// Game.prototype.selectedCard = function(cardsArray) {
//   var card = cardsArray;
//   this.player.cards = cardsArray[Math.floor(Math.random() * cardsArray.length)];
//   return card.splice(card, 1);
// };

// this.player.card.attackPoints;
// this.player.card.name;
// this.player.card.description;
// this.player.card.image;






Game.prototype.gameOver = function (){
  if(this.player1.health <= 0) {
    player1 = "Lost";
    player2 = "Won";
    return "Player2 Won!!!, You have claimed the Iron Throne"
  } else if (this.player2.health <= 0) {  // else if (this.player2.health <= 0) {
    player2 = "Lost";
    player1 = "Won";
    return "Player1 Won!!! You have claimed the Iron Throne"
  }
}






// $(document).ready(function() {
//   $('#card').flip();
//   $('#card2').flip();
// });