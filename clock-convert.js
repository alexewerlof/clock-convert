var PI = Math.PI;
var PIx2 = 2 * PI;
var PIx180 = PI * 180;
var PI_2 = PI / 2;
var PI_3 = PI / 3;
var PI_4 = PI / 4;
var PI_6 = PI / 6;
var PI_30 = PI / 30;
var PI_180 = PI / 180;
/** converts radian to degree */
function rad2deg(rad) {
    //Note: don't use PIx180 constant because it reduces accuracy
    return rad / PI * 180;
}
exports.rad2deg = rad2deg;
/** converts degree to radian */
function deg2rad(deg) {
    //Note: don't use PI_180 constant because it reduces accuracy
    return deg / 180 * PI;
}
exports.deg2rad = deg2rad;
/** calculates the angle from the center for a point ( x, y ) in a square with width and height 'w' */
function angleFromCenter(x, y, w) {
    var w_2 = w / 2;
    return Math.atan2(w_2 - y, x - w_2);
}
exports.angleFromCenter = angleFromCenter;
/** Normalizes a radian value to be between -PI..PI
 * @see minNorm for more info about how the algorithm works.
 */
function radNorm(rad) {
    //TODO: optimize this function
    while (rad < -PI) {
        rad += PIx2;
    }
    while (rad > PI) {
        rad -= PIx2;
    }
    return rad;
}
exports.radNorm = radNorm;
/** Normalizes a minute value to be between 0..60.
 * If the minute is a negative value it'll be increased by 60 until it becomes 0 or above 0.
 * If the minute is bigger than 60 it'll be decreased by 60 until it becomes 60 or below 60.
 * So -120 becomes 0 but 120 becomes 60.
 */
function minNorm(min) {
    //TODO: optimize this function
    while (min < 0) {
        min += 60;
    }
    while (min > 60) {
        min -= 60;
    }
    return min;
}
exports.minNorm = minNorm;
/** convert a radian to minue */
function rad2min(rad) {
    return (PI_2 - rad) / PI_30;
}
exports.rad2min = rad2min;
/** converts a minute to radian */
function min2rad(min) {
    return PI_2 - (PI_30 * min);
}
exports.min2rad = min2rad;
/** normalizes and then convert a radian to minue */
function rad2minNorm(rad) {
    return minNorm(rad2min(rad));
}
exports.rad2minNorm = rad2minNorm;
/**
 * determines the rotation angle of the minute hand in clockwise system
 * normalizes and then converts a minute to radian
 */
function min2radNorm(min) {
    return radNorm(min2rad(min));
}
exports.min2radNorm = min2radNorm;
/** converts an angle from clockwise system to anticlockwise system.
 * Anticlockwise system is used by Canvas and CSS
 */
function clockwise2anticlockwise(a) {
    return -a;
}
exports.clockwise2anticlockwise = clockwise2anticlockwise;
/** converts an angle from anticlockwise system to clockwise system
 * Anticlockwise system is used by Canvas and CSS
 */
function anticlockwise2clockwise(a) {
    return -a;
}
exports.anticlockwise2clockwise = anticlockwise2clockwise;
/**
 * Maps a value from one space to another.
 * @param srcMin {number} minimum possible value in the source space
 * @param srcMax {number} maximum possible value in the source space
 * @param dstMin {number} minimum possible value in the destination space
 * @param dstMax {number} maximum possible value in the destination space
 * @param x {number} the value of x in the source space
 * @return {number} the value of x in the destination space
 */
function map(srcMin, srcMax, dstMin, dstMax, x) {
    return (x - srcMin) * (dstMax - dstMin) / (srcMax - srcMin) + dstMin;
}
exports.map = map;
/**
 * Puts a numerical value in the specified range
 */
function putInRange(val, min, max) {
    if (val > max) {
        return max;
    }
    else if (val < min) {
        return min;
    }
    else {
        return val;
    }
}
exports.putInRange = putInRange;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2stY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsb2NrLWNvbnZlcnQudHMiXSwibmFtZXMiOlsicmFkMmRlZyIsImRlZzJyYWQiLCJhbmdsZUZyb21DZW50ZXIiLCJyYWROb3JtIiwibWluTm9ybSIsInJhZDJtaW4iLCJtaW4ycmFkIiwicmFkMm1pbk5vcm0iLCJtaW4ycmFkTm9ybSIsImNsb2Nrd2lzZTJhbnRpY2xvY2t3aXNlIiwiYW50aWNsb2Nrd2lzZTJjbG9ja3dpc2UiLCJtYXAiLCJwdXRJblJhbmdlIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ25CLElBQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDcEIsSUFBTSxNQUFNLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUV4QixJQUFNLElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLElBQU0sSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDcEIsSUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNwQixJQUFNLElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLElBQU0sS0FBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDdEIsSUFBTSxNQUFNLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUV4QixnQ0FBZ0M7QUFDaEMsaUJBQTBCLEdBQVc7SUFDakNBLDZEQUE2REE7SUFDN0RBLE1BQU1BLENBQUNBLEdBQUdBLEdBQUdBLEVBQUVBLEdBQUdBLEdBQUdBLENBQUNBO0FBQzFCQSxDQUFDQTtBQUhlLGVBQU8sVUFHdEIsQ0FBQTtBQUVELGdDQUFnQztBQUNoQyxpQkFBMEIsR0FBVztJQUNqQ0MsNkRBQTZEQTtJQUM3REEsTUFBTUEsQ0FBQ0EsR0FBR0EsR0FBR0EsR0FBR0EsR0FBR0EsRUFBRUEsQ0FBQ0E7QUFDMUJBLENBQUNB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