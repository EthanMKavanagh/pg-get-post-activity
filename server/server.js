const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const pg = require( 'pg' );
const PORT = 3000;
const Pool = pg.Pool;

app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

const pool = new Pool( {
    database: "bookstore",
    host: "localhost",
    post: "5432",
    max: "10",
    idleTimeoutMillis: 20000
} ); // end pool

app.get( '/books', ( req, res ) => {
    const queryString = 'SELECT * FROM "books";';
    pool.query( queryString ).then( ( results ) => {
        res.send( results.rows );
    } ).catch( ( err ) => {
        console.log( err );
        res.sendStatus( 500 );
    } ); // end query
} ); // end /books GET

app.listen( PORT, () => {
    console.log( 'Listening on', PORT );
} ); // end listen