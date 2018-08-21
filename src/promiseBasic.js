export default function(number) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (typeof number !== 'number') {
                reject('Input needs to be an number');
            }

            resolve(number % 1 === 0);
        }, 3000)
    });
}