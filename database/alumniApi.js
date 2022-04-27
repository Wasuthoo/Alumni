const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sql = require('mssql');

const PORT = 5500;
const HOST = '0.0.0.0';

const config = {
    server : 'mysqlserver2002.database.windows.net',
    database : 'OsDatabase',
    user : 'oudomying',
    password : 'Os05506007',
    options : {
        encrypt : true
    }
}

let pool
async function SQLExecute(command)
{
    let result;
    try
    {
        result = await pool.request()
        .query(`${command}`);
    }
    catch(err)
    {
        pool.close();
        console.log(err);
    }
    
    result = result.recordset;
    console.log(result);
    return result;
}

let server = express();
server.use(express.json());
server.use(morgan('dev')); 
server.use(cors()); 

const searchHandle = async(req, res) => {
    let queries ={};
    queries["string"] = req.query.queries || ""; 
    queries["location"] = req.query.location || "";

    command = `
        SELECT StudentID,FName,LName,RegName AS Located
        From Alumni
        INNER JOIN REGION ON Alumni.located = Region.RegCode
        `
    if(queries["string"] !== "")
    {
        queries["string"] = decodeURI(queries["string"]);
        queries["string"] = queries["string"].split(" ");
        queries["string"] = queries["string"].map(
            query => `(CONCAT(Title,FName,' ',Lname) LIKE '%${query}%' OR StudentID LIKE '%${query}%')`
            ).join(" AND ");
    }
    else
    {
        queries["string"] = "1=1";
    }
    if(queries["location"] !== "")
    {
        queries["location"] = `RegCode = '${queries["location"]}'`;
    }
    else
    {
        queries["location"] = "1=1";
    }

    try
    {
        
        let data = await SQLExecute(command + `WHERE ${queries["string"]} AND ${queries["location"]}`);
        console.log(data);
        
        return res.status(200).json({
            code: 1,
            message: 'OK',
            data: data
        })
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({
            code: 0,
            message: 'Internal Server Error',
        })
    }
}

let userHandle = async(req, res) => {
    const {userid} = req.params;
    command = `
        SELECT StudentID,FName,LName,RegName AS Located
        From Alumni
        INNER JOIN REGION ON Alumni.located = Region.RegCode
        WHERE StudentID = '${userid}'
        `
    try
    {
        let data = await SQLExecute(command);
        console.log(data);
        return res.status(200).json({
            code: 1,
            message: 'OK',
            data: data
        })
    }
    catch(err)
    {
        return res.status(500).json({
            code: 0,
            message: 'Internal Server Error',
        })
    }
}
server.get('/user', searchHandle); 
server.get('/user/:userid', userHandle);

server.listen(PORT,HOST,async function () {
    try 
    {
        pool = await sql.connect(config);
        console.log("Connected to database");
    }
    catch(err)
    {
        console.log(err);
    }
    console.log('Server Listen at http://localhost:5500');
});
