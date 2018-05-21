// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig:{
  	apiKey: "AIzaSyCnJckkdwO8596p1SuRtxZtcqFcCKxo0TI",
    authDomain: "loginapp-56d3e.firebaseapp.com",
    databaseURL: "https://loginapp-56d3e.firebaseio.com",
    projectId: "loginapp-56d3e",
    storageBucket: "",
    messagingSenderId: "552977761574"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
