export interface ICurrentLocation {
  lat: number;
  lon: number;
};

// default to Paris, France
const defaultPosition = {
  lat: 48.866667, 
  lon: 2.333333,
}

const geolocationService = {
  getCurrentLocation: (navigator: Navigator): Promise<ICurrentLocation | null> =>
    new Promise((resolve, reject) => {
      if (!("geolocation" in navigator)) {
        reject(defaultPosition)
      } else {
        navigator.geolocation.getCurrentPosition(
          (pos: any) => {
            resolve({
              lat: pos.coords.latitude,
              lon: pos.coords.latitude,
            })
          },
          (err: any) => {
            console.log(err);
            reject(defaultPosition)
        })
      }

    })
}

export default geolocationService;