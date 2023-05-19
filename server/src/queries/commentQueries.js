const moment = require('moment')

const createComment = (text, userId, parentCommentId) => {
    return `INSERT INTO "comment" (text, user_id, parent_comment_id, publish_date) `
    + `VALUES ('${text}', '${userId}', '${parentCommentId}', '${moment().format('YYYY-MM-D')}')`
}

module.exports = {
    createComment
}