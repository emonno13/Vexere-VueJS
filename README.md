# VEXERE VUEJS

## HEROKU DEPLOY
yarn add express

yarn build -> create file dist

create server.js file at root project

server.js :

```
const express = require('express');
const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res){
    res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port)
```



$ heroku login

$ cd my-project/

$ git init

$ heroku git:remote -a vexere-vuejs

$ git rm yarn.lock || git rm package-lock.json ( should )

$ git add .

$ git commit -am "make it better"

$ git push heroku master


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

