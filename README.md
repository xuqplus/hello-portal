### hello-portal
#### express
```
npx express-generator server --view=ejs --css=less

http://expressjs.com/en/starter/generator.html
```

#### introduce ts
```
npm run tsc -- --init
npm i --save-dev @types/express
npm i --save-dev @types/http-errors
npm i --save-dev @types/less-middleware
npm i --save-dev @types/cookie-parser

find server client -name *.js | xargs rm
find server client -name *.js.map | xargs rm
find server client -name *.css | xargs rm

https://github.com/BrianDGLS/express-ts
```

#### introduce bower & js frameworks/utils
```
git config url."https://".insteadOf git://
bower init
bower install jquery bootstrap --save

https://bower.io/
```

##### angularjs
###### introduce angularjs
```
bower install angular --save

https://code.angularjs.org/1.8.2/docs/tutorial
https://github.com/angular/angular-phonecat
```
###### work with angularjs
```
mkdir client & touch app.ts & reference bundle.js in server/views/angular.ejs

tsconfig -> https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
```

#### introduce grunt
```
npm i -g grunt-cli
grunt --help && grunt clean && grunt

https://www.npmjs.com/package/grunt-contrib-clean
https://gruntjs.com/getting-started
```

#### work with ts-node (in development)
`npm i -g ts-node && ts-node start-script`

#### build & run
`npm install && npm run clean && npm run compile && npm start`
