interface LocationInterface {
  readonly latitude: number;
  longitude ?: number;

  getLocation: (address: string) => {
    lat: number,
    long ?: number
  };
}

class Localization implements LocationInterface {
  readonly latitude: number;
  longitude ?: number;

  constructor(la: number, lg ?: number) {
    this.latitude = la;
    this.longitude = lg;
  }

  getLocation (address: string): {
    lat: number,
    long ?: number
  } {
    return {
      lat: this.latitude,
      long: this.longitude
    }
  };
}

let location = new Localization(123, 321);

const getLocation = (location: LocationInterface): string => {
  return `${location.latitude} ${location.longitude}`;
}

console.log(getLocation(location));

export {}
