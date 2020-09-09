const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const pg = require( 'pg' );
const PORT = 3000;
const Pool = pg.Pool;

app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.listen( PORT, () => {
    console.log( 'Listening on', PORT );
} );