// eslint-disable-next-line @typescript-eslint/no-require-imports
const express = require('express');
const app = express();
const port = 8000;

let increment = 0;

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log(increment++);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
