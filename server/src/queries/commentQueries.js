const createComment = (text, userId, parentCommentId) => {
    return `INSERT INTO "comment" (text, user_id, parent_comment_id) `
    + `VALUES ('${text}', '${userId}', '${parentCommentId}')`
}

module.exports = {
    createComment
}