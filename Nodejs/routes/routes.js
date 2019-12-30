const router = app => {
  // Load the MySQL pool connection
  const pool = require('../database/config');
  // Display all users
  app.get('/users', (request, response) => {
    pool.query('SELECT * FROM users', (error, result) => {
      if (error) throw error;

      response.send(result);
    });
  });
}
// Export the router
module.exports = router;