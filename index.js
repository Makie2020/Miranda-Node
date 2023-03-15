var app = require('./app')
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

app.listen(port, function() {
  console.log(`Server running on port ${port}`);
});