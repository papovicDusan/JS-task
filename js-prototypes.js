function Character() {

    if (new.target === Character) {
      throw new Error("This is abstract class");
    }

   this.x = Character.prototype.getRandomNumber();
   this.y = Character.prototype.getRandomNumber();

    Character.prototype.checkIfOutOfBound(this.x, this.y);
  

    Character.numberOfCharacter++;
}

Character.numberOfCharacter = 0;

Character.prototype.getRandomNumber = function() {
 return Math.floor(Math.random() * 20) + 1;
}

Character.prototype.checkIfOutOfBound = function(x,y) {
   if (x > 10 || x < 1 || y < 1 || y > 10) {
      throw new Error("out of bounds " + x + "," + y);
    }
}

Character.prototype.coordinates = function(points) {
    Character.prototype.checkIfOutOfBound(points[0], points[1]);
    this.x = points[0];
    this.y = points[1];
}

// Character.prototype.toString = function() {
//      return `{ x: ${this.x} y:${this.y} `;
// }


function PlayerCharacter() {
  Character.call(this);
}

PlayerCharacter.prototype = Object.create(Character.prototype);
PlayerCharacter.prototype.constructor = Character;

function NonPlayerCharacter() {
     Character.call(this);
}

NonPlayerCharacter.prototype = Object.create(Character.prototype);
NonPlayerCharacter.prototype.constructor = Character;

try {
  let nonPlayer = new NonPlayerCharacter();
  console.log(nonPlayer);
  nonPlayer.coordinates([1,1]);
  console.log(nonPlayer);
  // console.log(nonPlayer.toString());
} catch (error) {
  console.log("desio se error", error);
}

//   try {
//     let player1 = new PlayerCharacter();
//     console.log(player1);
//   } catch (error) {
//     console.log("desio se error", error);
//   }

//   try {
//     let player2 = new PlayerCharacter();
//     player2.coordinates = [1, 1];
//     console.log(player2);
//   } catch (error) {
//     console.log("desio se error", error);
//   }

console.log("Broj kreiranih karakter ", Character.numberOfCharacter);
