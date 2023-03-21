var dbQuery = require('../db.config');

// Display list of all Contact Instances.
async function contact_list (req, res) {
  return await 
  dbQuery().query("SELECT * FROM contact", function (error,results) {
      if (error) throw error;
      res.json(results);
    });
};

module.exports = {contact_list}