"use strict";

 let getArrayFunc = (lengthArray, number) => {
  let arr = [];
  for (let i = 0; i < lengthArray; i++) {
    arr.push(Math.floor(Math.random() * (number + 1)));
  }
  return arr;
};

console.log(getArrayFunc(6, 100)); 

 


let deleteElementArr = (arr, stringDelete) => {
  let indexString = arr.indexOf(stringDelete);
  for (let i = 0; i < arr.length; i++) {
    if (indexString > -1) {
      arr.splice(indexString, 1);
    }
    return arr;
  }
};

console.log(deleteElementArr(["Patria", "o", "muerte"], "muerte")); 



let createSimpleArr = () => {
  let emptyArr = [];
  let enterArr;
  do {
    enterArr = prompt("enter your words");
    if (enterArr < Infinity && enterArr !== null) {
      emptyArr.push(+enterArr);
    } else if (
      typeof enterArr === "string" &&
      enterArr !== "undefined" &&
      enterArr !== "null" &&
      enterArr !== "true" &&
      enterArr !== "false"
    ) {
      emptyArr.push(enterArr);
    } else if (enterArr == "undefined") {
      emptyArr.push(undefined);
    } else if (enterArr == "null") {
      emptyArr.push(null);
    } else if (enterArr == "true") {
      emptyArr.push(true);
    } else if (enterArr == "false") {
      emptyArr.push(false);
    }
  } while (enterArr !== null);

  return emptyArr;
};

console.log(createSimpleArr());






let arrayOfPersons = [
  {
    name: "Ferdinant",
    surname: "Foch",
    age: 54,
    nationality: "French",
    skill: "Military management",
    zodiacSign: undefined,
    height: 173,
    isAlive: false,
  },
  {
    name: "Jackson",
    surname: "Bricks",
    age: 20,
    nationality: "USA",
    skill: "farmer",
    height: 187,
    specialTrait: "mechanical arms",
    isFictionalCharacter: true,
  },
  {
    name: "Hideo",
    surname: "Kozima",
    age: 56,
    nationality: "USA",
    skill: "game developer",
    height: 173,
    specialTrait: "genius",
    actualGames: ["Death Stranding", "Metal Gear"],
    isAlive: true,
  },
  {
    name: "Kim",
    surname: "Kardashian",
    age: 39,
    nationality: "USA",
    skill: "model",
    height: 159,
    zodiacSign: "scorpio",
  },
  {
    name: "Mia",
    surname: "Khalifa",
    age: 27,
    nationality: "Lebanon",
    skill: "actress",
    height: 157,
    zodiacSign: "saggitarius",
    specialTrait: "very exspressionable",
    isAlive: true,
    isFictionalCharacter: false,
  },
  {
    name: "Herman",
    surname: "Hesse",
    age: 85,
    nationality: "Germany",
    skill: "writer",
    zodiacSign: undefined,
    isAlive: false,
    isFictionalCharacter: false,
    bibliography: ["Der Steppen Wolf", "Das Glasperlenspiel"],
  },
  {
    name: "Fedor",
    surname: "Dostoevsky",
    age: 60,
    nationality: "Russia",
    skill: "writer",
    isAlive: false,
    isFictionalCharacter: false,
    bibliography: ["The demons", "The Crime and Punishment", "The Idiot"],
  },
  {
    name: "Doomguy",
    surname: undefined,
    age: undefined,
    nationality: undefined,
    skill: "demon slayer",
    zodiacSign: undefined,
    isFictionalCharacter: true,
    specialTrait: "Angry a bit",
  },
  {
    name: "Sonic",
    surname: "The Hedgehog",
    age: 13,
    nationality: undefined,
    zodiacSign: undefined,
    isFictionalCharacter: true,
    specialTrait: "Fast as f#@k",
  },
  {
    name: "Bruce",
    surname: "Wayne",
    age: 12,
    isFictionalCharacter: true,
  },
  {
    name: "Ella",
    surname: "Fitzgerald",
    age: 79,
    isFrictionalCharacter: false,
    isAlive: false,
    specialTrait: "Amazing voice",
    signatureSongs: [
      "Cry Me a river",
      "Hello Dolly",
      "Summertime",
      "In a sentimental mood",
    ],
  },
];

 let nullValues = arrayOfPersons
.forEach(item=>{
  for(let key in item){
    if(item[key] === undefined){
      item[key] = null
    }
  }
  })

console.log(arrayOfPersons); 





let filteredAndChangePersons = arrayOfPersons
  .map(function (item) {
      return {
        name: item.name,
        surname: item.surname,
        age: item.age,
      };
  })
  .sort(function (a, b) {
    if (a.surname > b.surname) return 1;
    if (a.surname < b.surname) return -1;
  })
  

console.log(filteredAndChangePersons);  





 let callBackForFilter = function (item) {
  let keyEight = Object.keys(item).length >= 8;
  return keyEight
};

let resultOfFilter = arrayOfPersons
  .filter(callBackForFilter)
  .sort(function(a,b){
if(Object.keys(a).length > Object.keys(b).length) return -1;
if(Object.keys(a).length < Object.keys(b).length) return 1;
  })

console.log(resultOfFilter); 





let sortAge = arrayOfPersons
.sort(function(a,b){
  if(a.age > b.age) return 1;
  if(a.age < b.age) return -1;
    })

console.log(sortAge) 




let findZodiac = arrayOfPersons.filter(function(item){
     return item.zodiacSign
   })

console.log(findZodiac) 

 



let checkObject = function (item) {
  for (let key in item) {
      if (typeof item[key] === 'object' && item[key] !== null) {
          return -1
      }
  }
  return 1
};

const sortObj = arrayOfPersons.sort(checkObject) 

console.log(sortObj) 




let callBackForMapRandomId = function (item) {
    item.id = Math.floor(Math.random(item) * 1000) - 1
    return item
};

let resultOfMapRandomNumberId = arrayOfPersons.map(callBackForMapRandomId);

console.log(resultOfMapRandomNumberId) 






let callBackForMapIsFictionalCharacter = function (item) {
    if (item.isFictionalCharacter) {
      item.fictionalUniverse = null
      return item
};
}
let resultOfMapIsFictionalCharacter = arrayOfPersons.filter(callBackForMapIsFictionalCharacter);

console.log(resultOfMapIsFictionalCharacter)

