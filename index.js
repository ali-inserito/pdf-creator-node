const express = require("express");
const app = express();
const port = 3000;
const pdf = require("pdf-creator-node");
const bodyParser = require("body-parser");

app.use(bodyParser.json());


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


app.get('/name', (req,res) => {
  res.send('My name is Ali Abdullah Azhar')
});

app.post("/pdf", (req, res) => {

  console.log('req body :', req.body)
  const parsedBody = JSON.parse(req.body);
  const document = parsedBody.document;
  const options = parsedBody.options;

  pdf
  .create(document, options)
  .then((pdf) => {
    res.status(200).json(pdf)
  })
  .catch((error) => {
    res.status(500).json(error)
  });

})
