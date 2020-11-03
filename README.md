# VEXERE VUEJS

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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
"# Vexere-VueJS" 
npm run build

xóa dist trong file git ignore

npm install express

tạo server.js tại thư mục gốc

gõ dòng lệnh này vào

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
$ cd my-project/
$ git init
$ heroku git:remote -a vexere-vuejs

$ git add .
$ git commit -am "make it better"
$ git push heroku master

trong cmd : gõ heroku login

heroku git: remote -a 'project name'

git push heroku master
