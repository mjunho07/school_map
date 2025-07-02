import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: '127.0.0.1',       
    user: 'mjh',           
    password: '0317',         
    database: 'web309',        
    connectionLimit : 5
});

export default pool;