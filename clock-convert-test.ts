module( 'convert' );

function functionalTest ( fnName, paramResults, precision ) {
    var fn = window[ fnName ];
    var pow10 = typeof precision === 'undefined' ? 0 : Math.pow( 10, precision || 1 );
    test( fnName + '()', function () {
        for ( var i = 0; i < paramResults.length; i++ ) {
            var paramResult = paramResults[i];
            var param = paramResult[0];
            var expectedResult = paramResult[1];
            var actualResult = fn( param );

            //if precision is specified, this part cuts down the fractional part of results in order to avoid Javascript number comparison erros for small differences
            if ( pow10 ) {
                expectedResult = Math.round( expectedResult * pow10 ) / pow10;
                actualResult = Math.round( actualResult * pow10 ) / pow10;
            }

            deepEqual( actualResult, expectedResult, fnName + '( ' + param + ' )  = ' + expectedResult );
        }
    });
}

test( 'Pi and other constants', function () {
    deepEqual( PI, Math.PI, 'PI is correct' );
    deepEqual( PIx2, Math.PI * 2, 'PI * 2 is correct' );
    deepEqual( PIx180, Math.PI * 180, 'PI * 180 is correct' );

    deepEqual( PI_2,  Math.PI / 2,  'PI / 2 is correct' );
    deepEqual( PI_3,  Math.PI / 3,  'PI / 3 is correct' );
    deepEqual( PI_4,  Math.PI / 4,  'PI / 4 is correct' );
    deepEqual( PI_6,  Math.PI / 6,  'PI / 6 is correct' );
    deepEqual( PI_30, Math.PI / 30, 'PI / 30 is correct' );
    deepEqual( PI_180, Math.PI / 180, 'PI / 180 is correct' );
});

test( 'angleFromCenter', function () {
    deepEqual( angleFromCenter( 50, 50, 100 ), 0 );

    deepEqual( angleFromCenter( 100, 50, 100 ), 0 );
    deepEqual( angleFromCenter( 50, 0, 100 ), PI_2 );
    deepEqual( angleFromCenter( 0, 50, 100 ), PI );
    deepEqual( angleFromCenter( 50, 100, 100 ), -PI_2 );
});

functionalTest( 'rad2deg', [
    [ -9 * PI_4, -405 ],
    [ -8 * PI_4, -360 ],
    [ -7 * PI_4, -315 ],
    [ -6 * PI_4, -270 ],
    [ -5 * PI_4, -225 ],
    [ -4 * PI_4, -180 ],
    [ -3 * PI_4, -135 ],
    [ -2 * PI_4,  -90 ],
    [ -1 * PI_4,  -45 ],
    [  0 * PI_4,    0 ],
    [  1 * PI_4,   45 ],
    [  2 * PI_4,   90 ],
    [  3 * PI_4,  135 ],
    [  4 * PI_4,  180 ],
    [  5 * PI_4,  225 ],
    [  6 * PI_4,  270 ],
    [  7 * PI_4,  315 ],
    [  8 * PI_4,  360 ],
    [  9 * PI_4,  405 ]
], 5 );

functionalTest( 'deg2rad', [
    [ -405, -9 * PI_4 ],
    [ -360, -8 * PI_4 ],
    [ -315, -7 * PI_4 ],
    [ -270, -6 * PI_4 ],
    [ -225, -5 * PI_4 ],
    [ -180, -4 * PI_4 ],
    [ -135, -3 * PI_4 ],
    [  -90, -2 * PI_4 ],
    [  -45, -1 * PI_4 ],
    [    0,  0 * PI_4 ],
    [   45,  1 * PI_4 ],
    [   90,  2 * PI_4 ],
    [  135,  3 * PI_4 ],
    [  180,  4 * PI_4 ],
    [  225,  5 * PI_4 ],
    [  270,  6 * PI_4 ],
    [  315,  7 * PI_4 ],
    [  360,  8 * PI_4 ],
    [  405,  9 * PI_4 ]
], 5 );

functionalTest( 'radNorm', [
    [  16 * PI_4,  0 * PI_4 ],
    [  15 * PI_4, -1 * PI_4 ],
    [  14 * PI_4, -2 * PI_4 ],
    [  13 * PI_4, -3 * PI_4 ],
    [  12 * PI_4,  4 * PI_4 ],
    [  11 * PI_4,  3 * PI_4 ],
    [  10 * PI_4,  2 * PI_4 ],
    [   9 * PI_4,  1 * PI_4 ],
    [   8 * PI_4,  0 * PI_4 ],
    [   7 * PI_4, -1 * PI_4 ],
    [   6 * PI_4, -2 * PI_4 ],
    [   5 * PI_4, -3 * PI_4 ],
    [   4 * PI_4,  4 * PI_4 ],
    [   3 * PI_4,  3 * PI_4 ],
    [   2 * PI_4,  2 * PI_4 ],
    [   1 * PI_4,  1 * PI_4 ],
    [   0 * PI_4,  0 * PI_4 ],
    [  -1 * PI_4, -1 * PI_4 ],
    [  -2 * PI_4, -2 * PI_4 ],
    [  -3 * PI_4, -3 * PI_4 ],
    [  -4 * PI_4, -4 * PI_4 ],
    [  -5 * PI_4,  3 * PI_4 ],
    [  -6 * PI_4,  2 * PI_4 ],
    [  -7 * PI_4,  1 * PI_4 ],
    [  -8 * PI_4,  0 * PI_4 ],
    [  -9 * PI_4, -1 * PI_4 ],
    [ -10 * PI_4, -2 * PI_4 ],
    [ -11 * PI_4, -3 * PI_4 ],
    [ -12 * PI_4, -4 * PI_4 ],
    [ -13 * PI_4,  3 * PI_4 ],
    [ -14 * PI_4,  2 * PI_4 ],
    [ -15 * PI_4,  1 * PI_4 ],
    [ -16 * PI_4,  0 * PI_4 ]
], 5 );

functionalTest( 'minNorm', [
    [ -120,  0 ],
    [ -110, 10 ],
    [ -100, 20 ],
    [  -90, 30 ],
    [  -80, 40 ],
    [  -70, 50 ],
    [  -60,  0 ],
    [  -50, 10 ],
    [  -40, 20 ],
    [  -30, 30 ],
    [  -20, 40 ],
    [  -10, 50 ],
    [    0,  0 ],
    [   10, 10 ],
    [   20, 20 ],
    [   30, 30 ],
    [   40, 40 ],
    [   50, 50 ],
    [   60, 60 ],
    [   70, 10 ],
    [   80, 20 ],
    [   90, 30 ],
    [  100, 40 ],
    [  110, 50 ],
    [  120, 60 ]
], 5 );

functionalTest( 'min2radNorm', [
    [ -25, -4 * PI_6 ],
    [ -20, -5 * PI_6 ],
    [ -15,  6 * PI_6 ],
    [ -10,  5 * PI_6 ],
    [  -5,  4 * PI_6 ],
    [   0,  3 * PI_6 ],
    [   5,  2 * PI_6 ],
    [  10,  1 * PI_6 ],
    [  15,  0 * PI_6 ],
    [  20, -1 * PI_6 ],
    [  25, -2 * PI_6 ],
    [  30, -3 * PI_6 ],
    [  35, -4 * PI_6 ],
    [  40, -5 * PI_6 ],
    [  45, -6 * PI_6 ],
    [  50,  5 * PI_6 ],
    [  55,  4 * PI_6 ],
    [  60,  3 * PI_6 ],
    [  65,  2 * PI_6 ],
    [  70,  1 * PI_6 ],
    [  75,  0 * PI_6 ]
], 5 );

functionalTest( 'rad2minNorm', [
    [   9 * PI_6, 30 ],
    [   8 * PI_6, 35 ],
    [   7 * PI_6, 40 ],
    [   6 * PI_6, 45 ],
    [   5 * PI_6, 50 ],
    [   4 * PI_6, 55 ],
    [   3 * PI_6,  0 ],
    [   2 * PI_6,  5 ],
    [   1 * PI_6, 10 ],
    [   0 * PI_6, 15 ],
    [  -1 * PI_6, 20 ],
    [  -2 * PI_6, 25 ],
    [  -3 * PI_6, 30 ],
    [  -4 * PI_6, 35 ],
    [  -5 * PI_6, 40 ],
    [  -6 * PI_6, 45 ],
    [  -7 * PI_6, 50 ],
    [  -8 * PI_6, 55 ],
    [  -9 * PI_6, 60 ],
    [ -10 * PI_6,  5 ],
    [ -11 * PI_6, 10 ],
    [ -12 * PI_6, 15 ]
], 5 );

test( 'putInRange', function () {
    deepEqual( putInRange( -10, 0, 10 ), 0, 'Smaller value' );
    deepEqual( putInRange( 100, 0, 10 ), 10, 'Larger value' );
    deepEqual( putInRange( 0, 0, 10 ), 0, 'On lower border' );
    deepEqual( putInRange( 10, 0, 10 ), 10, 'On higher border' );
    deepEqual( putInRange( 5, 0, 10 ), 5, 'In between 5' );
    deepEqual( putInRange( 9.5, 0, 10 ), 9.5, 'In between 9.5' );
    deepEqual( putInRange( 0.5, 0, 10 ), 0.5, 'In between 0.5' );
});