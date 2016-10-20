#!/usr/bin/env node

var deviceName = Math.round( Math.random() * 100000 ).toString();

if ( process.argv.length === 3 ) {
    deviceName = process.argv[ 2 ];
}

var io = require( 'socket.io-client' );
var socket = io( 'http://sockethooks.garrows.com?name=' + deviceName );

socket.on( 'connected', function ( data ) {
    console.log( 'SocketHook ready. Go to', data.url );
} );

socket.on( 'data', function ( data ) {
    console.log( 'Your sockethook was hit:', data );
    process.exit();
} );
