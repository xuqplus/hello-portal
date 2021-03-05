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

find server -name *.js | xargs rm
find server -name *.js.map | xargs rm
find server -name *.css | xargs rm

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
```
bower install angular --save

https://code.angularjs.org/1.8.2/docs/tutorial
https://github.com/angular/angular-phonecat
```

#### build & run
npm install && npm start
