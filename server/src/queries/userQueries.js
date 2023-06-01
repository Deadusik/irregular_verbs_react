const createUser = (login, email, password, role) =>
    `INSERT INTO "user" (login, email, role, password) `
    + `VALUES ('${login}', '${email}', '${role}', '${password}')`

const getUserById = (id) =>
    `SELECT * FROM "user" WHERE id = ${id}`

const getUserByColVal = (col, val) =>
    `SELECT * FROM "user" WHERE ${col} = '${val}'`

const deleteUser = (id) =>
    `DELETE FROM "user" WHERE id = '${id}'`

module.exports = {
    createUser,
    getUserById,
    getUserByColVal,
    deleteUser
} 