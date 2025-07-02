import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: '127.0.0.1',       
    user: 'root',           
    password: '0317',         
    database: 'web309'
});

export default pool;