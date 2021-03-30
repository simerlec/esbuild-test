# ESBUILD Test

Files at root level represent the files available inside a regular code module. When running `npm run es-build` esbuild will compile the linked `App.jsx` file (and all imported dependencies) into `App.js` and put the result into the `dist2` folder.

Afterwards we simply copy the needed `index.html` file and also the referenced `styles.css` file into the `dist2` folder which can then be served using `npm run serve-dist2`.
