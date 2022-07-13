interface LocationMapInterface {
  readonly latitude: number;
  longitude: number;
}

const getLocation = (location: LocationMapInterface): string => {
  return `${location.latitude} ${location.longitude}`;
}

let location1 = {
  latitude: 12313,
  longitude: 321312,
}
location1.latitude = 999;
console.log(getLocation(location1));


let location2: LocationMapInterface = {
  latitude: 12313,
  longitude: 321312,
}
// location2.latitude = 2312;
console.log(getLocation(location2));
