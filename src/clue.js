// Characters
/*
mrGreen
firstName:   Jacob
lastName:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
firstName:   Doctor
lastName:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
occupation:   Scientist

profPlum
firstName:   Victor
lastName:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
firstName:   Kasandra
lastName:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
firstName:   Eleanor
lastName:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
firstName:   Jack
lastName:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

// Characters Collection
const charactersArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"
  },

  {
    firstName: "Victor",
    lastName: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
  },

  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"
  },

  {
    firstName: "Eleanor",
    lastName: "Peacock",
    color: "blue",
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
  },

  {
    firstName: "Jack",
    lastName: "Mustard",
    color: "yellow",
    description:
      "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"
  }
];

var mrGreen = charactersArray[0];
var mrOrchid = charactersArray[1];
var mrsScarlet = charactersArray[2];
var mrsPeacock = charactersArray[3];
var mrMustard = charactersArray[4];

// Rooms' Collection
var roomsArray = [
  { name: "Dinning Room" },
  { name: "Conservatory" },
  { name: "Kitchen" },
  { name: "Study" },
  { name: "Library" },
  { name: "Billiard Room" },
  { name: "Lounge" },
  { name: "Ballroom" },
  { name: "Hall" },
  { name: "Spa" },
  { name: "Living Room" },
  { name: "Observatory" },
  { name: "Theater" },
  { name: "Guest House" },
  { name: "Patio" }
];

var dinningRoom = roomsArray[0];
var conservatory = roomsArray[1];
var kitchen = roomsArray[2];
var study = roomsArray[3];
var library = roomsArray[4];
var billiardRoom = roomsArray[5];
var lounge = roomsArray[6];
var ballroom = roomsArray[7];
var hall = roomsArray[8];
var spa = roomsArray[9];
var livingRoom = roomsArray[10];
var observatory = roomsArray[11];
var theater = roomsArray[12];
var guestHouse = roomsArray[13];
var patio = roomsArray[14];

// Weapons Collection
var weaponsArray = [
  {
    name: "rope",
    weight: 10
  },
  {
    name: "knife",
    weight: 8
  },
  {
    name: "candlestick",
    weight: 2
  },
  {
    name: "dumbbell",
    weight: 30
  },
  {
    name: "poison",
    weight: 2
  },
  {
    name: "axe",
    weight: 15
  },
  {
    name: "bat",
    weight: 13
  },
  {
    name: "trophy",
    weight: 25
  },
  {
    name: "pistol",
    weight: 20
  }
];

var rope = weaponsArray[0];
var knife = weaponsArray[1];
var candlestick = weaponsArray[3];
var dumbbell = weaponsArray[4];
var poison = weaponsArray[5];
var axe = weaponsArray[6];
var bat = weaponsArray[7];
var trophy = weaponsArray[8];
var pistol = weaponsArray[9];

function randomSelector(array) {
  var randomNumber = Math.floor(Math.random() * array.length);
  let element = array[randomNumber];
  return element;
}

console.log(randomSelector(roomsArray));

function pickMistery() {
  var misteryEnvelope = [];
  var pickedcharactersArray = "";
  var pickedroomsArray = "";
  var pickedweaponsArray = "";
  pickedcharactersArray = randomSelector(charactersArray);
  pickedroomsArray = randomSelector(roomsArray);
  pickedweaponsArray = randomSelector(weaponsArray);
  misteryEnvelope.push(
    pickedcharactersArray,
    pickedweaponsArray,
    pickedroomsArray
  );
  return misteryEnvelope;
}
console.log(pickMistery());

function revealMistery(misteryEnvelope) {
  return `${misteryEnvelope[0].firstName} ${
    misteryEnvelope[0].lastName
  } killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${
    misteryEnvelope[2].name
  }`;

  // <FIRST NAME> misteryEnvelope[0][firstName]
  // <LAST NAME> misteryEnvelope[0][lastName]
  // killed Mr.Boddy using the
  // <WEAPON> misteryEnvelope[1].name
  // in the
  // <PLACE> misteryEnvelope[2].name
}

console.log(revealMistery(pickMistery()));
