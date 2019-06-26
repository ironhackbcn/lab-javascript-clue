// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
first_name:   Doctor
last_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
occupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
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
// Characters
var mrGreen = {
    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
}
var drOrchid = {
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"
}

var profPlum = {
    first_name: "Victor",
    last_name: "Plum",
    color: " purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
}


var missScarlet = {
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"
}


var mrsPeacock = {
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"

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

// weapons
var rope = {
    weapon: 'Rope',
    weight: 10
}

var knife = {
    weapon: 'Knife',
    weight: 8
}
var candlestick = {
    weapon: 'Candlestick',
    weight: 2
}
var dumbbell = {
    weapon: 'Dumbbell',
    weight: 30
}
var poison = {
    weapon: 'Poison',
    weight: 2,
}

var axe = {
    weapon: 'Axe',
    weight: 15
}
var bat = {
    weapon: 'Bat',
    weight: 13,
}
var trophy = {
    weapon: 'Trophy',
    weight: 25,
}
var pistol = {
    weapon: 'Pistol',
    weight: 20,
}
// rooms
var dinningRoom ={
    room: "Dinning Room"
};
var conservatory ={
    room: "Conservatory"
};
var kitchen ={
    room: "Kitchen"
};
var study ={
    room: "Study"
};
var library ={
    room: "Library"
};
var billiardRoom ={
    room: "Billiard Room"
};
var lounge ={
    room: "Lounge"
};
var ballroom ={
    room: "Ball Room"
};
var hall ={
    room: "Hall"
};
var spa ={
    room: "Spa"
};
var livingRoom ={
    room: "Living Room"
};
var observatory ={
    room: "Observatory"
};
var theater ={
    room: "Theater"
};
var guestHouse ={
    room: "Guest House"
};
var patio ={
    room: "Patio"
};
// Characters Colle

var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms' Collection
var roomsArray = [dinningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];

// Weapons Collection
var weaponsArray = [rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol];

function randomSelector(arr){  
    var random = Math.floor(Math.random() * arr.length );
    return arr[random];
}

function pickMistery(){
    var character = randomSelector(charactersArray);
    var room = randomSelector(roomsArray);
    var weapon = randomSelector(weaponsArray);

    var fullArray = [character,weapon, room]
    return fullArray;
}
var misteryEnvelope = pickMistery();

function revealMistery(misteryEnvelope){
    var arrFull = []
    for(var i = 0; i < misteryEnvelope.length; i++){
        arrFull.push(misteryEnvelope[i]); 
    }
    var result = arrFull[0].first_name + " " + arrFull[0].last_name + " killed Mr.Boddy using the " + arrFull[1].weapon + " in the " + arrFull[2].room + "!!!!";
    console.log(result)
    return result;
}
revealMistery(misteryEnvelope);