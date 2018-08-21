export default function(number, callback) {
    setTimeout(function() {
        if (typeof number !== 'number') {
            callback('Input needs to be an number');
        }

        callback(null, number % 1 === 0);
    }, 3000)
}