const knex = require("../db/connection");

function list() {
  // your solution here
  return knex('comments').select('*')
}

function listCommenterCount() {
  // your solution here
  return knex('comments as c')
    .join('users as u', 'c.commenter_id', 'u.user_id')
    .count('c.comment_id')
    .select('u.user_email as commenter_email')
    .groupBy('commenter_email')
    .orderBy('commenter_email')
}

function read(commentId) {
  // your solution here
}

module.exports = {
  list,
  listCommenterCount,
  read,
};
