// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: 'http://localhost:3001/',
  firebase: {
    apiKey: 'AIzaSyBchLs1Yc4AZfrbeclfVB0NCWrcVBy35lc',
    authDomain: 'almusal-4a9d3.firebaseapp.com',
    databaseURL: 'https://almusal-4a9d3.firebaseio.com',
    projectId: 'almusal-4a9d3',
    storageBucket: '',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};

// var firebaseConfig = {
//   apiKey: "AIzaSyBchLs1Yc4AZfrbeclfVB0NCWrcVBy35lc",
//   authDomain: "almusal-4a9d3.firebaseapp.com",
//   databaseURL: "https://almusal-4a9d3.firebaseio.com",
//   projectId: "almusal-4a9d3",
//   storageBucket: "",
//   messagingSenderId: "10368406853",
//   appId: "1:10368406853:web:4d7861ee43f54caf335a2c"
// };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
