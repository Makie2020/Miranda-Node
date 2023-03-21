var dbQuery = require('../db.config');
const bcrypt = require("bcrypt");

// Display list of allUserInstances.
async function usersList (req, res) {
  return await 
  dbQuery().query("SELECT * FROM users", function (error,results) {
      if (error) throw error;
      res.json(results);
    });
};
// Handle userInstance create on POST.
async function create_user (req, res) {
  const sql = 'INSERT INTO users SET ?';
  const hash = await bcrypt.hash(req.body.password, 10)
  const userObj = {
    photo: req.body.photo,
    full_name: req.body.full_name,
    email: req.body.email,
    start_date: req.body.start_date,
    description: req.body.description,
    phone_number: req.body.phone_number,
    status: req.body.status,
    password: hash
  };

  dbQuery().query(sql, userObj, error => {
    if (error) throw error;
    res.send(`User ${id} created!`);
  });
};

module.exports = {
  usersList,
  create_user,
}