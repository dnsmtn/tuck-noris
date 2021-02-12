# Tuck Norris jokes

This is a MVP application based on [Chuck Norris IO](https://chucknorris.io/), created with `Create react app`.
I tried to imagine a business behind the app, the two areas interested in this MVP are fictional departments they are `retention` wich controls who likes and dislikes the companies jokes, to keep the users in the app and the `writing` department wich is responsible for the jokes itself. Therefore, the architecture is Domain Driven Design based. The initial screen shows a random joke within teh specified category, the likes pagfes shows and allows the user to remove it's likes and the settings pages that has jokes category selection.

## Development mode
To run development mode, run `npm start`. This will open *localhost:3000* on your default browser as soon as the app files are loaded and compiled.

## Tests
Tests are not filling coverage yet, but there are examples on how to test all components using `Jest` and `React Testing Library`. To run them, simply use `npm run test` command. To run development tests the command is `npm run test:dev`, this will collect coverage and keep watching test files.

## Production build
The command `npm run build` will build a production ready version to the `build` directory.
