
// Characters Collection
var charactersArray = [];

function createSuspect(first_name, last_name, color, description, age, image, occupation) {
  var suspect = {
    first_name,
    last_name,
    color,
    description,
    age,
    image,
    occupation
  }
  return suspect
}

var mrGreen = createSuspect('Jacob', 'Green',
  'green',
  'He has a lot of connections',
  45,
  'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  'Entrepreneur'
)

var drOrchid = createSuspect('Doctor', 'Orchid',
  'white',
  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  26,
  'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  'Scientist'
)

var profPlum = createSuspect('Victor',
  'Plum',
  'purple',
  'Billionare video game designer',
  22,
  'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg', 'designer');


var missScarlet = createSuspect('Kasandra',
  'Scarlet',
  'red',
  'She is an A-list movie star with a dark past',
  31,
  'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  'Actor'
);

let mrsPeacock = createSuspect('Eleanor',
  'Peacock',
  'blue',
  'She is from a wealthy family and uses her status and money to earn popularity',
  36,
  'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  'Socialité'
);


let mrMustard = createSuspect(
  'Jack',
  'Mustard',
  'yellow',
  'He is a former football player who tries to get by on his former glory',
  62,
  'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
  'Retired Football player'
);

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);

// Weapons Collection
var weaponsArray = [];

function createWeapon(name, weight) {
  let weapon = {
    name: name,
    weight: weight
  }
  return weapon
}

weaponsArray.push(createWeapon('rope', 10));
weaponsArray.push(createWeapon('knife', 8));
weaponsArray.push(createWeapon('candlestick', 2));
weaponsArray.push(createWeapon('dumbbell', 30));
weaponsArray.push(createWeapon('poison', 2));
weaponsArray.push(createWeapon('axe', 15));
weaponsArray.push(createWeapon('bat', 13));
weaponsArray.push(createWeapon('trophy', 25));
weaponsArray.push(createWeapon('pistol', 20));


// Rooms' Collection
var roomsArray = [];

function createRoom(name) {
  var room = {
    name
  }
  return room;
}
roomsArray.push(createRoom('Dinning Room'));
roomsArray.push(createRoom('Conservatory'));
roomsArray.push(createRoom('Kitchen'));
roomsArray.push(createRoom('Study'));
roomsArray.push(createRoom('Library'));
roomsArray.push(createRoom('Billiard Room'));
roomsArray.push(createRoom('Lounge'));
roomsArray.push(createRoom('Ballroom'));
roomsArray.push(createRoom('Hall'));
roomsArray.push(createRoom('Spa'));
roomsArray.push(createRoom('Living Room'));
roomsArray.push(createRoom('Observatory'));
roomsArray.push(createRoom('Theater'));
roomsArray.push(createRoom('Guest House'));
roomsArray.push(createRoom('Patio'));


function randomSelector(arrayToSelect) {
  if (arrayToSelect.length === 0) {
    return undefined;
  }
  var arrayLength = arrayToSelect.length
  var randomNumber = Math.floor((Math.random() * arrayLength));
  return arrayToSelect[randomNumber]
}


function pickMistery() {
  var character = randomSelector(charactersArray);
  var room = randomSelector(roomsArray);
  var weapon = randomSelector(weaponsArray);

  return [character, weapon, room];

}

var misteryEnvelope = pickMistery();

function revealMistery(misteryEnvelope) {


  var character = misteryEnvelope[0];
  var weapon = misteryEnvelope[1];
  var room = misteryEnvelope[2];

  return `${character.first_name} ${character.last_name} killed Mr.Boddy using the ${weapon.name} in the ${room.name}!!!!`

}


