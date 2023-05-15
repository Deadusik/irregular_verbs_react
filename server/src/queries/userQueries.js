const createUser = (login, email, password) => 
`INSERT INTO "user" (login, email, role, password) `
+ `VALUES ('${login}', '${email}', 'user', '${password}')` 

const getUserById = (id) => 
`SELECT * FROM "user" WHERE id = ${id}`

const getUserByColVal = (col, login) => 
`SELECT * FROM "user" WHERE ${col} = '${login}'`

const deleteUser = (id) => 
`DELETE FROM "user" WHERE id = '${id}'`

module.exports = {
    createUser, 
    getUserById,
    getUserByColVal,
    deleteUser
} 