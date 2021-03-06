var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content = {
    title : 'article-mohit | mohit soni',
    heading : 'javascript',
    date : '14 sep,2017',
    content :`      <p> this is some paragraph about the page.this is some paragraph about the page.this is some paragraph about the page.this is some paragraph about the page.this is some paragraph about the page.</p>
       <p> this is some paragraph about the page.this is some paragraph about the page.this is some paragraph about the page.this is some paragraph about the page.this is some paragraph about the page.</p>
       <p> this is some paragraph about the page.this is some paragraph about the page.this is some paragraph about the page.this is some paragraph about the page.this is some paragraph about the page.</p>
       <p> this is some paragraph about the page.this is some paragraph about the page.this is some paragraph about the page.this is some paragraph about the page.this is some paragraph about the page.</p>` 
};

function createTemplate (data){

var title = data.title;
var date = data.date;
var heading= data.heading;
var content = data.content;
var htmlTemplate =`<html>
    <head>
        ${title}
         <meta name="viewport" content="width=device-width.initial-scale=1"/>
               <link href="/ui/style.css" rel="stylesheet" />
         <style>
  
         </style>
    </head>
   <body>
       <div class="container">
           <a href="www.google.com">for some query click here</a>
       <div>
      ${heaading}
      ${date}
       </div>
       ${content}
      
      
<a href="/"> home</a>
</div>
   </body>
</html>`;
return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
 var counter =0;
app.get('/counter' , function (req , res){
    counter = counter + 1;
    res.send(counter.tostring());
})
app.get('/article-mohit', function (req,res) {
    res.send(createTemplate(article-mohit));
});
app.get('/zm', function (req,res) {
  res.sendFile(path.join(__dirname, 'ui', 'zm.html'));
});
app.get('/article-two', function (req,res){
    res.send('article two requested and will be served here');
});
app.get('/article-three', function (req,res){
    res.send('article three requested and will be served here');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
