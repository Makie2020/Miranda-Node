const userData = require('../DummyData/usersData')

// Display list of allUserInstances.
async function usersList (req, res) {
  return res.json({users: userData})
};
// Handle userInstance create on POST.
async function create_user (req, res) {
  return res.json({success: true, room: req.body})
};

module.exports = {
  usersList,
  create_user,
}