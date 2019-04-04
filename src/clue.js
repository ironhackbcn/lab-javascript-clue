// ITERATION 1

// Characters

var mrGreen = {
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur",
}

var drOrchid = {
first_name:   "Doctor",
last_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
occupation:   "Scientist",
}

var profPlum = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer",
}

var missScarlet = {
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor",
}

var mrsPeacock = {
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité",
}

var mrMustard = {
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player",
}

// Weapons

var rope        = {
    weapon: "rope",
    weight: 10,}

var knife       = {
    weapon: "knife",
    weight: 8,}

var candlestick = {
    weapon: "candlestick",
    weight: 2,}

var dumbbell    = {
    weapon: "dumbbell",
    weight: 30,}

var poison      = {
    weapon: "poison",
    weight: 2,}

var axe         = {
    weapon: "axe",
    weight: 15,}

var bat         = {
    weapon: "bat",
    weight: 13,}

var trophy      = {
    weapon: "trophy",
    weight: 25,}
    
var pistol      = {
    weapon: "pistol",
    weight: 20,}

// Rooms

var rooms = {
room: "Dinning Roomroom: ",
room: "Conservatoryroom: ",
room: "Kitchenroom: ",
room: "Studyroom: ",
room: "Libraryroom: ",
room: "Billiard Roomroom: ",
room: "Loungeroom: ",
room: "Ballroomroom: ",
room: "Hallroom: ",
room: "Sparoom: ",
room: "Living Roomroom: ",
room: "Observatoryroom: ",
room: "Theaterroom: ",
room: "Guest Houseroom: ",
room: "Patio",
}

// Characters Collection
var charactersArray = [];

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);
console.log(charactersArray);


// Rooms' Collection
var roomsArray = [];

roomsArray.push(rooms);
console.log(roomsArray);


// Weapons Collection
var weaponsArray = [];

weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);
console.log(weaponsArray);


// ITERATION 2

/* Create a method randomSelector to randomly select one element from a card stack.
The method should receive an array as an argument,
and return randomly one of the elements of the array */

function randomSelector (array) {
    var randomNum = Math.floor(Math.random() * array.length);
    return array[randomNum];
};

console.log(randomSelector(weaponsArray))
console.log(randomSelector(roomsArray))
console.log(randomSelector(charactersArray))
    

/* We need to create a pickMistery method that will call randomSelector for each card stack,
and return an array with the 3 picked cards, a character, a weapon and a room. 
Our mystery should be stored on a misteryEnvelope variable. */

function pickMistery (randomSelector())




// Iteration 3 - Revealing the mistery

/*Finally, we need to reveal the mystery. Create a revealMistery method, that will receive our
misteryEnvelope array as an argument and return the revealed mystery like this:
<FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!! */

revealMistery 