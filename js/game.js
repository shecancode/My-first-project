var whosTurnIsItAnyway = "player1";



var Game = function() {
  this.cards = [];
  this.characters = [];
  this.shuffledCards = [];
  this.player1 = {};
  this.player2 = {};
}

Game.prototype.gameOver = function (){
  if(this.player1.health <= 0) {
  
    // return "Player2 Won!!!, You have claimed the Iron Throne"
    alert("Player 1 has sadly deceased... player 2 wins")
  } else if (this.player2.health <= 0) {  // else if (this.player2.health <= 0) {
    
    
    alert("Player 2 has sadly deceased... player 2 wins")
  
}
}

Game.prototype.dealCards = function(){ 
  this.player1.playerHand.forEach(function (eachCard, index) {
    console.log(eachCard);
    //the image
  $('.first-row .card img').eq(index).prop("src", "./images/"+ eachCard.image);
//the name
  $('.first-row .card .name span').eq(index).text(eachCard.name);
  //description
  $('.first-row .card .description span').eq(index).text(eachCard.description)
  //attackpoints
  $('.first-row .card .damage span').eq(index).text(eachCard.attackPoints)

  });

  this.player2.playerHand.forEach(function (eachCard, index) {
    console.log(eachCard);
    //the image
  $('.second-row .card img').eq(index).prop("src", "./images/"+ eachCard.image);
//the name
  $('.second-row .card .name span').eq(index).text(eachCard.name);
  //description
  $('.second-row .card .description span').eq(index).text(eachCard.description)
  //attackpoints
  $('.second-row .card .damage span').eq(index).text(eachCard.attackPoints)

  });
  
}


function Player(name) {
  this.playerHand = [];
  this.health = 150; 
  this.name = name;
}

function updateHealth(){
  $('.first-row .player-health p').text(theGame.player1.health);
  $('.second-row .player-health p').text(theGame.player2.health);

}

function updateTurn(){
  if(whosTurnIsItAnyway === "player1"){
    $(".whos-turn").text("It's player one's turn")
  } else if (whosTurnIsItAnyway === "player2") {
    $(".whos-turn").text("It's player two's turn")
  }
}


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

  theGame.drawCards();

  theGame.dealCards()

  // console.log("player 1 hand",theGame.player1.playerHand);
  // console.log("player 2 hand",theGame.player2.playerHand);

  updateHealth()
  
  var shuffledCards = _.shuffle(theGame.cards);
  theGame.shuffledCards = shuffledCards
  
  
  document.getElementById("start").onclick = function(e) {
    e.currentTarget
    startGame();
  }




  $(".first-row .card").click(function(){
    if(whosTurnIsItAnyway === "player1"){
 
      var cardThatJustGotClicked = $(this);
      var damageDiv = cardThatJustGotClicked.find( ".damage span" );
      var damagePoints = parseInt( damageDiv.text());
      
      
      theGame.player2.recieveDamage(damagePoints)
      
      updateHealth()
      
      theGame.gameOver()
      whosTurnIsItAnyway = "player2";
      updateTurn();
    }
      
  });

  $(".second-row .card").click(function(){
    if(whosTurnIsItAnyway === "player2"){
    var cardThatJustGotClicked = $(this);
    var damageDiv = cardThatJustGotClicked.find( ".damage span" );
    var damagePoints = parseInt( damageDiv.text());


    theGame.player1.recieveDamage(damagePoints)

    updateHealth()


    theGame.gameOver()
    whosTurnIsItAnyway = "player1";
    updateTurn();

    }

  });




}

function startGame() {
  theGame.drawCards();

}


 Game.prototype.drawCards = function(){
  // theGame.cards is all the possible cards

  this.shuffledCards = _.shuffle(this.cards);
  
  for (var i = 0; i < 5; i++) {
    this.player1.playerHand.push(this.shuffledCards[i]);
  }
    this.shuffledCards = _.shuffle(this.cards);

  for (var i = 0; i < 5; i++) {
    this.player2.playerHand.push(this.shuffledCards[i]);
  }

  // console.log(this.player1.playerHand);
  // console.log(this.player2.playerHand);
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
  new Card("battleAxe","axe.jpg", "a worn battle axe", 10,),
  new Card("dagger","dagger.jpg", "a rusted dagger made of steel", 10,),
  new Card("arakh","arakh.jpg", "a dothraki blade", 12,),
  new Card("catsPaw","catsPaw.jpg", "an assassins blade", 16,),
  new Card("dragon","drogon.jpg", "a powerful fire breathing dragon", 25,),
  new Card("iceBlade","iceblade.jpg", "a dagger made of ice from beyond the wall", 12,),
  new Card("wight","wight.jpg", "a reanimated corpse", 14,),
  new Card("direWolf","direwolf.jpg", "an unusually large and intelligent species of wolf" , 18,),
  new Card("bear","bear.jpg", "a brown bear" , 19,),
  new Card("wightBear","wightbear.png", "a reanimated bear" , 20,),
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



  




