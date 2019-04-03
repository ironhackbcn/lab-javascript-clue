
// Rooms' Collection
var rooms = [
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

// Weapons Collection
var weaponsObject = {
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

// Characters Collection
var charactersArray = [

  drOrchid = {
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation:   "Scientist",
  },

  profPlum = {
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer",
  },

  missScarlet = {
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor",
  },

  mrsPeacock = {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité",
  },

  mrMustard = {
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player"
  }
];

var randomCard;
function randomSelector (para) {
if (para.length === 0) {
  return undefined;
}
var indexOfCard = Math.floor(Math.random() * para.length)
randomCard = para[indexOfCard];
return randomCard;

}


function pickMistery (randomSelector) {
  var misteryEnvelope = [];
  misteryEnvelope.push(randomSelector(rooms));
  misteryEnvelope.push(randomSelector(charactersArray));
  misteryEnvelope.push(randomSelector(weaponsObject));
  return misteryEnvelope;
}

function revealMistery (misteryEnvelope) {
  var weapon = misteryEnvelope.pop();
  var character = misteryEnvelope.pop();
  var place = misteryEnvelope.pop();
  var misterySentence = character +  "killed Mr.Boddy using the" + weapon + "in the" + place;
  return misterySentence;
}