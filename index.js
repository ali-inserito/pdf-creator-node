const express = require("express");
const app = express();
const port = 3000;
const pdf = require("pdf-creator-node");
const bodyParser = require("body-parser");

app.use(bodyParser.json({ limit: '50mb' }))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


app.get('/name', (req,res) => {
  res.send('My name is Ali Abdullah Azhar')
});

app.post("/pdf", (req, res) => {

const document = req.body.document;
const options = req.body.options;

  pdf
  .create(document, options)
  .then((pdf) => {
    res.status(200).json(pdf)
  })
  .catch((error) => {
    res.status(500).json(error)
  });

})
