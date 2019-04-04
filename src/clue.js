/* I had difficult to set an object CHARACHTER with all objects containing each charachter nested inside, 
so i did this unpractical way, i tested on other file the nested objects, but i didnt got to work properly */

var mrGreen = {
first_name: 'Jacob',
last_name: 'Green',
color: 'green',
description: 'He has a lot of connections',
age: 45,
image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
occupation: 'Entrepreneur'
}

var drOrchid = {
first_name: 'Doctor',
last_name: 'Orchid',
color: 'white',
description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
age: 26,
image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
occupation: 'Scientist',
}

var profPlum = {
first_name: 'Victor',
last_name: 'Plum',
color: 'purple',
description: 'Billionare video game designer',
age: 22,
image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
occupation: 'Designer',
}

var missScarlet = {
first_name: 'Kasandra',
last_name: 'Scarlet',
color: 'red',
description: 'She is an A-list movie star with a dark past',
age: 31,
image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
occupation: 'Actor',
}

var mrsPeacock = {
first_name: 'Eleanor',
last_name: 'Peacock',
color: 'blue',
description: 'She is from a wealthy family and uses her status and money to earn popularity',
age: 36,
image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
occupation: 'Socialité'
}

var mrMustard = {
first_name: 'Jack',
last_name: 'Mustard',
color: 'yellow',
description: 'He is a former football player who tries to get by on his former glory',
age: 62,
image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
occupation: 'Retired Football player'
}

var weapons = {
knife : 8,
rope : 10,
candlestick : 2,
dumbbell : 30,
poison : 2,
axe : 15,
bat : 13,
trophy : 25,
pistol : 20,
}

var rooms = {
room1 : 'Conservatory',
room2 : 'Kitchen',
room3 : 'Dinning Room',
room4 : 'Study',
room5 : 'Library',
room6 : 'Billiard Room',
room7 : 'Lounge',
room8 : 'Ballroom',
room9 : 'Hall',
room10 : 'Spa',
room11 : 'Living Room',
room12 : 'Observatory',
room13 : 'Theater',
room14 : 'Guest House',
room15 : 'Patio',
}

/*  */
var charactersArray = [];

charactersArray.push(mrGreen.first_name ,mrGreen.last_name);
charactersArray.push(drOrchid.first_name ,drOrchid.last_name);
charactersArray.push(profPlum.first_name ,profPlum.last_name);
charactersArray.push(missScarlet.first_name ,missScarlet.last_name);
charactersArray.push(mrsPeacock.first_name ,mrsPeacock.last_name);
charactersArray.push(mrMustard.first_name ,mrMustard.last_name);


var roomsArray = [];

for (room in rooms) {
  roomsArray = Object.values(rooms)
}

var weaponsArray = [];

for (kind in weapons) {
  weaponsArray = Object.keys(weapons)
}

var misteryEnvelope = [];

function randomSelector(array) {
  var someNum = Math.floor(Math.random() * array.length);
  return array[someNum];
}

function pickMistery() {
  misteryEnvelope.push(randomSelector(charactersArray));
  misteryEnvelope.push(randomSelector(weaponsArray));
  misteryEnvelope.push(randomSelector(roomsArray));
  return misteryEnvelope;

}





pickMistery();

/* This final function didnt work properly - im going to continue ... 
couldnt access the index the array like this, but im really tired! lol */

/* var finalSolution = []; */

function revealMistery(misteryEnvelope) {
  var finalSolution = [];
  return finalSolution = (misteryEnvelope[0], "killed Mr.Boddy using the ", misteryEnvelope[1], " in the ", misteryEnvelope[2],"!!!");
  
}

revealMistery();