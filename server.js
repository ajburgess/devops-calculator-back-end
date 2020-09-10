const app = require('./api');

const port = 8001;

app.listen(port,
    () => console.log(`Listening on port: ${port}...`));