class Character {
    static numberOfCharacter = 0;
  
    constructor() {
      if (this.constructor === Character) {
        throw new Error("This is abstract class");
      }
  
      let x = Character.getRandomNumber();
      let y = Character.getRandomNumber();
  
      Character.checkIfOutOfBound(x, y);
  
      this.x = x;
      this.y = y;
  
      Character.numberOfCharacter++;
    }
  
    static getRandomNumber() {
      return Math.floor(Math.random() * 20) + 1;
    }
  
    static checkIfOutOfBound(x, y) {
      if (x > 10 || x < 1 || y < 1 || y > 10) {
        throw new Error("out of bounds " + x + "," + y);
      }
    }
  
    set coordinates(points) {
      Character.checkIfOutOfBound(points[0], points[1]);
  
      this.x = points[0];
      this.y = points[1];
    }
  }

  class PlayerCharacter extends Character {
    constructor() {
      super();
    }
  }
  
  class NonPlayerCharacter extends Character {
  
    constructor() {
      super();
    }
  }

  try {
    let nonPlayer = new NonPlayerCharacter();
    console.log(nonPlayer);
    nonPlayer.coordinates = [1, 1];
    console.log(nonPlayer);
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
