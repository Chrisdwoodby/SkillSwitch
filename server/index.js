const express = require('express');
const app = express();
const port = 6009;

app.use(express.json());
app.use(express.static(__dirname + "/../dist"))

app.listen(port, () => {
    console.log(`Application is listening on port ${port}`)
});