const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {
    const params = Array(
        request.body.title,
        request.body.description
    );

    const query = "INSERT INTO db_tasks(title, description) VALUES(?,?)";

    connection.query(query, params, (err, results) => {
        if(result) {
            response
            .status(201)
            .json({
                success: true,
                message: "Sucesso!",
                data: results
            })
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Ops, deu problema!"
            })
        }
    })
}

module.exports = {
    storeTask
}