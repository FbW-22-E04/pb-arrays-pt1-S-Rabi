const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const euroSecondCity = euroCities.slice(1, 2);
console.log("This is eurosecondary city", euroSecondCity);
console.log(euroCities);
euroCities.splice(0, 1, "Berlin");
console.log(euroCities);
console.log(euroCities.length);
euroCities.pop();
console.log(euroCities);
euroCities[4] = "Budapest";
console.log(euroCities);
const asianCities = ["Tashkent", "Jakarta", "Istanbul", "Bangkok", "Astana"];
const worldCities = euroCities.concat(asianCities);
console.log(worldCities);

console.log("---------------------------------------------");

console.log(worldCities.reverse());
console.log(euroCities.splice(2, 1));
// 10: should be solved
console.log(asianCities[(1, 4)]);

worldCities.splice(2, 1, "Toronto");
console.log(worldCities);
console.log(worldCities.splice(1, 0, "Washington"));

console.log(worldCities.join());
console.log(worldCities.join("+"));

const hello = ["Hello", "World"];
console.log(hello.reverse());

console.log("---------------------------------------");
// Extra practice:
const myFavSingers = ["Madina Aknazarov", "KH", "Salman Ali", "Ahmad Zahir"];
const myBestFriends = ["Jamal", "Z Behroz"];
const myFavorites = myFavSingers.concat(myBestFriends);
console.log(myFavorites);
myBestFriends.push("Zabi");
console.log(myFavorites.reverse());
console.log(myFavorites.length);
