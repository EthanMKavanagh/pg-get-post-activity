$( document ).ready( onReady );

function onReady(){
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
    } ).catch( function( err ){
        alert( 'Error in client POST' );
        console.log( err );
    } ); // end ajax POST
} // end onAddBooks