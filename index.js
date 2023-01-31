const express = require('express');

const app = express();

app.use(() => {
  console.log('Hello Server...');
  console.log('Hello Lagi...');
  console.log('Hello Tiga');
});

app.listen(4000);
