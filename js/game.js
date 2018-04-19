
var Game = function() {
  this.cards = [];
  this.characters = [];
  this.player1 = {};
  this.player2 = {};
}


function Player(name) {
  this.cardsArray = [];
  this.health = 1000; 
  this.name = name;
}

var Card = function(theName,image, cardDescription, attack){
  this.name = theName
  this.image = image
  this.description = cardDescription
  this.attackPoints = attack
} 


var Character = function(theName, health ){
  this.name = theName;
  this.health = health;
  
} 

window.onload = function(){

  var theGame = new Game();
  var firstPlayer = new Player("Crystal");
  var secondPlayer = new Player("charactersArray.name");
  theGame.cards = cardsArray;
  theGame.characters = charactersArray;
  theGame.player1 = firstPlayer;
  theGame.player2 = secondPlayer;
}

//create for loop up to 10 
Game.prototype.drawCards = function(){
  // theGame.cards is all the possible cards
  
  for (var i = 0; i < cardsArray.length; i++) {
    this.shuffledCards = player1;
    this.shuffledCards = player2;

  }
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
  
  
  new Card("sword","","a random sword made of steel",5,),
  new Card("longClaw","","a fine sword made of valyrian steel",15,),
  new Card("bow","","a short bow",15,),
  new Card("ygrittes","", "a long bow that never misses its target", 15,),
  new Card("battleAxe","", "a long bow that never misses its target", 10,),
  new Card("dagger","", "a rusted dagger made of steel", 10,),
  new Card("arakh","", "a dothraki blade", 12,),
  new Card("catsPaw","", "an assassins blade", 16,),
  new Card("dragon","", "a powerfull fire breathing dragon named Drogon", 25,),
  new Card("iceBlade","", "a dagger made of ice from beyond the wall", 12,),
  new Card("wight","", "a reanimated corpse", 14,),
  new Card("direWolf","", "an unusually large and intelligent species of wolf" , 18,),
  new Card("bear","", "a brown bear" , 19,),
  new Card("barrel","", "a barrel filled with wildfir" , 19 * 2,),
  new Card("iceSpear","", "a spear made of ice from beyond the wall" , 25,),

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
        new Character ("Sir Davos", 100),
      ];

// var player1 = [];
// var player2 = [];

var name = charactersArray.name;









Player.prototype.attack = function(player) {
  if(player1.attackPoints > player2.attackPoints){
    return player2.recieveDamage;
  } else  {
   return this.player1 = recieveDamage;
  }
  return this.cardsArray[i].attackPoints;
};




//  var cardsArray = [1,2,3,4,5]

//  //var shuffledBlah = _.shuffle();

//  var shuffledCards = _.shuffle(cardsArray);

//  shuffledCards.push(cardsArray);


Game.prototype.shuffledCards = function (cardsArray) {
  var cardsArray = [1,2,3,4,5]
  var shuffledCards = _.shuffle(cardsArray);
}


Game.prototype.selectedCard = function(cardsArray) {
  var card = cardsArray;
  this.player.cards = cardsArray[Math.floor(Math.random() * cardsArray.length)];
  return card.splice(card, 1);
};

// this.player.card.attackPoints;
// this.player.card.name;
// this.player.card.description;
// this.player.card.image;


Game.prototype.recieveDamage = function(attack){
  this.player2.health - this.player1.health.attackPoints;
  if (this.health > 150){
    return this.name + " has received " + attackPoints + " points of damage";
  } else if (this.player2.health > 150){

    return this.name + " has recieved " + attackPoints + "points of damage";
  }

}



Game.prototype.gameOver = function (){
  if(this.player1.health <= 0) {
    player1 = "Lost";
    player2 = "Won";
    return "player2 Won!!!, You have claimed the Iron Throne"
  } else if (this.player2.health <= 0) {
    player2 = "Lost";
    player1 = "Won";
    return "player1 Won!!! You have claimed the Iron Throne"
  }
}






$(document).ready(function() {
  $('#card').flip();
  $('#card2').flip();
});










 

  
  