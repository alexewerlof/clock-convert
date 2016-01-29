const PI = Math.PI;
const PIx2 = 2 * PI;
const PIx180 = PI * 180;

const PI_2 = PI / 2;
const PI_3 = PI / 3;
const PI_4 = PI / 4;
const PI_6 = PI / 6;
const PI_30 = PI / 30;
const PI_180 = PI / 180;

/** converts radian to degree */
export function rad2deg ( rad: number ): number {
    //Note: don't use PIx180 constant because it reduces accuracy
    return rad / PI * 180;
}

/** converts degree to radian */
export function deg2rad ( deg: number ): number {
    //Note: don't use PI_180 constant because it reduces accuracy
    return deg / 180 * PI;
}

/** calculates the angle from the center for a point ( x, y ) in a square with width and height 'w' */
export function angleFromCenter ( x: number , y: number, w: number ): number {
    var w_2 = w / 2;
    return Math.atan2( w_2 - y, x - w_2 );
}

/** Normalizes a radian value to be between -PI..PI
 * @see minNorm for more info about how the algorithm works.
 */
export function radNorm ( rad: number ): number {
    //TODO: optimize this function
    while ( rad < -PI ) {
        rad += PIx2;
    }
    while ( rad > PI ) {
        rad -= PIx2;
    }
    return rad;
}

/** Normalizes a minute value to be between 0..60.
 * If the minute is a negative value it'll be increased by 60 until it becomes 0 or above 0.
 * If the minute is bigger than 60 it'll be decreased by 60 until it becomes 60 or below 60.
 * So -120 becomes 0 but 120 becomes 60.
 */
export function minNorm ( min: number ): number {
    //TODO: optimize this function
    while ( min < 0 ) {
        min += 60;
    }
    while ( min > 60 ) {
        min -= 60;
    }
    return min;
}

/** convert a radian to minue */
export function rad2min ( rad: number ) : number{
    return ( PI_2 - rad ) / PI_30;
}

/** converts a minute to radian */
export function min2rad ( min: number ): number {
    return PI_2 - ( PI_30 * min );
}

/** normalizes and then convert a radian to minue */
export function rad2minNorm ( rad: number ): number {
    return minNorm( rad2min( rad ) );
}

/**
 * determines the rotation angle of the minute hand in clockwise system
 * normalizes and then converts a minute to radian
 */
export function min2radNorm ( min: number ): number {
    return radNorm( min2rad( min ) );
}

/** converts an angle from clockwise system to anticlockwise system.
 * Anticlockwise system is used by Canvas and CSS
 */
export function clockwise2anticlockwise ( a: number ): number {
    return -a;
}

/** converts an angle from anticlockwise system to clockwise system
 * Anticlockwise system is used by Canvas and CSS
 */
export function anticlockwise2clockwise ( a: number ): number {
    return -a;
}

/**
 * Maps a value from one space to another.
 * @param srcMin {number} minimum possible value in the source space
 * @param srcMax {number} maximum possible value in the source space
 * @param dstMin {number} minimum possible value in the destination space
 * @param dstMax {number} maximum possible value in the destination space
 * @param x {number} the value of x in the source space
 * @return {number} the value of x in the destination space
 */
export function map ( srcMin: number, srcMax: number, dstMin: number, dstMax: number, x: number ): number {
    return ( x - srcMin ) * ( dstMax - dstMin ) / ( srcMax - srcMin ) + dstMin;
}

/**
 * Puts a numerical value in the specified range
 */
export function putInRange ( val: number, min: number, max: number ): number {
    if ( val > max ) {
        return max;
    } else if ( val < min ) {
        return min;
    } else {
        return val;
    }
}