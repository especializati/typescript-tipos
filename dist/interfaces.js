"use strict";
const getLocation = (location) => {
    return `${location.latitude} ${location.longitude}`;
};
let location1 = {
    latitude: 12313,
    longitude: 321312,
};
location1.latitude = 999;
console.log(getLocation(location1));
let location2 = {
    latitude: 12313,
    longitude: 321312,
};
// location2.latitude = 2312;
console.log(getLocation(location2));
