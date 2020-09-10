const app = require('./api');

require('dotenv').config();
const port = process.env.PORT || 8001;

app.listen(port,
    () => console.log(`Listening on port: ${port}...`));