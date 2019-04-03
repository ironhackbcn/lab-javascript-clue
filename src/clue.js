// // Characters

var characters = {
  mrGreen: {
    first_var: "Jacob",
    last_var: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
  },
  mrOrchid: {
    first_var: "Doctor",
    last_var: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"
  },
  profPlum: {
    first_var: "Victor",
    last_var: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
  },
  missScarlet: {
    first_var: "Kasandra",
    last_var: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"
  },
  mrsPeacock: {
    first_var: "Eleanor",
    last_var: "Peacock",
    color: "blue",
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
  },
  mrMustard: {
    first_var: "Jack",
    last_var: "Mustard",
    color: "yellow",
    description:
      "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"
  }
};
var weapons = {
  rope: 10,
  knife: 8,
  candlestick: 2,
  dumbbell: 30,
  poison: 2,
  axe: 15,
  bat: 13,
  trophy: 25,
  pistol: 20
};

// --------------------------------------------------

//cards
var charactersArray = [];
var weaponsArray = [];
var roomsArray = [
  "Dinning Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio"
];




createSuspectCards(charactersArray);
createWeaponsCards(weaponsArray);
var misteryEnvelope = pickMistery(charactersArray,weaponsArray,roomsArray);
revealMistery(misteryEnvelope);

function createSuspectCards(suspectCards) {
  // Characters Collection

  for (suspect in characters) {
    suspectCards.push(suspect);
  }
  console.log(suspectCards);
}

function createWeaponsCards(weaponCards){
  for (w in weapons) {
    weaponCards.push(w);
  }
  console.log(weaponCards);
}



function randomSelector(stack,n) {
  // console.log(randomNumber + " " + stack.lenght + " " + suspect.lenght); //wtf, lost the array type??
  var randomCard = stack[n];
  console.log("randomCard: " + randomCard);
  return randomCard;
}

function pickMistery(suspects, weapons, rooms) {
  var randomSuspect = randomSelector(suspects,Math.floor(Math.random()* suspects.length));// I know, don't kick me out of the class...
  var randomWeapon = randomSelector(weapons,Math.floor(Math.random()* weapons.length));// I know, don't kick me out of the class...
  var randomRoom = randomSelector(rooms,Math.floor(Math.random()* rooms.length));// I know, don't kick me out of the class...

  var misteryOutput = {
    suspects: randomSuspect,
    weapons: randomWeapon,
    rooms: randomRoom
  };
  return misteryOutput;
}

function revealMistery(misteryEnvelope) {
  console.log(

    Object.keys(misteryEnvelope) +
    misteryEnvelope.suspects +
      " " +
      misteryEnvelope.suspects.last_var +
      " " +
      "killed Mr.Boddy using the" +
      misteryEnvelope.weapons +
      " in the " +
      misteryEnvelope.room +
      " !!!!"
  );
}

// var misteryEnvelope = pickMistery(charactersArray, weaponsArray, roomsArray);
// revealMistery(misteryEnvelope);

