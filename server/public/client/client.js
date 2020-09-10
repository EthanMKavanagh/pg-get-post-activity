$( document ).ready( onReady );

function onReady(){
    onRefreshBooks();
    $( document ).on( 'click', '#addBookIn', onAddBooks );
} // end onReady

function onAddBooks(){
    let objectToSend = {
        title: $( '#titleIn' ).val(),
        author: $( '#authorIn' ).val(),
        published: $( '#publishedIn' ).val()
    } // end objectToSend
    $.ajax( {
        method: 'POST',
        url: '/books',
        data: objectToSend
    } ).then( function( response ){
        console.log( 'Got a response from POST:', response );
        onRefreshBooks();

        // Clear Inputs!!!
        $( '#titleIn' ).val( '' );
        $( '#authorIn' ).val( '' );
        $( '#publishedIn' ).val( '' );

    } ).catch( function( err ){
        alert( 'Error in client POST' );
        console.log( err );
    } ); // end ajax POST
} // end onAddBooks

function onRefreshBooks(){
    $.ajax( {
        method: 'GET',
        url: '/books'
    } ).then( function( response ){
        let el = $( '#booksOut' );
        el.empty();
        for( let i = 0; i < response.length; i++ ){
            $( '#booksOut' ).append( `
                <li>
                    ${ response[ i ].title } —
                    By: ${ response[ i ].author }
                    ${ response[ i ].published.split( 'T' )[ 0 ] }
                </li>
            ` ); // end append
        } // end for
    } ).catch( function( err ){
        alert( 'Error in client GET' );
        console.log( err );
    } ); // end ajax GET
} // end onRefreshBooks