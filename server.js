var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one':{
        title:'Article One | Hannah',
        heading:'Article One',
        date:'Aug 15, 2017',
        content:`<p>
                        This is the content of my first article. This is the content of my first article. This is the content of my first article. 
                        This is the content of my first article. This is the content of my first article. This is the content of my first article.
                        This is the content of my first article. This is the content of my first article. This is the content of my first article.
                    </p>`
    },
    'article-two':{
        title:'Article Two | Hannah',
        heading:'Article Two',
        date:'Aug 15, 2017',
        content:`<p>
                        This is the content of my second article.
                    </p>`
    },
    'article-three':{
        title:'Article Three | Hannah',
        heading:'Article Three',
        date:'Aug 15, 2017',
        content:`<p>
                        This is the content of my third article.
                    </p>`
    }
};


function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;

        var htmlTemplate=`
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
                </div>
            </body>
        </html>
        `;
        return htmlTemplate;
}

app.get('/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
