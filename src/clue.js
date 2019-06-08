const charactersArray = [{
    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
  },

  {
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"
  },

  {
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
  },

  {
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"
  },

  {
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
  },

  {
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"
  }
];

const weaponsArray = [{
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
const roomsArray = [{
    name: "Dinning Room"
  },
  {
    name: "Conservatory"
  },
  {
    name: "Kitchen"
  },
  {
    name: "Study"
  },
  {
    name: "Library"
  },
  {
    name: "Billiard Room"
  },
  {
    name: "Lounge"
  },
  {
    name: "Ballroom"
  },
  {
    name: "Hall"
  },
  {
    name: "Spa"
  },
  {
    name: "Living Room"
  },
  {
    name: "Observatory"
  },
  {
    name: "Theater"
  },
  {
    name: "Guest House"
  },
  {
    name: "Patio"
  }
];

var aaa = [1, 2, 3, 4, 5, 6, 7, 8]

function randomSelector(arr) {
  if (arr.length == 0) {
    return undefined;
  } else if (arr.length == 1) {
    return arr[0];
  } else {
    numRandomArray = Math.floor(Math.random() * arr.length);
    return arr[numRandomArray];
  }
}

function pickMistery() {
  let arrMistery = []
  arrMistery.push(randomSelector(charactersArray));
  arrMistery.push(randomSelector(weaponsArray));
  arrMistery.push(randomSelector(roomsArray));
  console.log(arrMistery);

  if ((arrMistery.length != 0) || (arrMistery.length == 3)) {
    return arrMistery;
  }
}

function revealMistery(arr) {

  let character = arr[0];
  let weapon = arr[1];
  let room = arr[2]

  return `${character.first_name} ${character.last_name} killed Mr.Boddy using the ${weapon.name} in the ${room.name}!!!!`

}