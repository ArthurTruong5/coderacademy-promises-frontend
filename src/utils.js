import axios from 'axios';
import mergeImages from 'merge-images';

const randomNumber = (max) => {
    return Math.floor(Math.random() * max) + 1;
}

const callbackRequest = (url, index, callback) => {
    axios.get(url, { responseType:"blob" })
        .then(res =>  {
            let imageArray = [URL.createObjectURL(res.data)];
            const currentImage = document.querySelector('#i'+index).src;

            if (currentImage) {
                imageArray.unshift(currentImage);
            }

            return mountImage(imageArray, index);
        })
        .then(image => callback(null, image))
        .catch(callback);
}

const promiseRequest = (url, index) => {    
    return new Promise(function(resolve, reject) {
        callbackRequest(url, index, function(err, newImage) {
            if (err) {
                reject(err);
            }

            resolve(newImage);
        })
    });
}

const mountImage = (imageArray, index) => {
    return mergeImages(imageArray)
        .then(b64 => document.querySelector('#i'+index).src = b64);
}

export default {
    randomNumber,
    callbackRequest,
    promiseRequest,
    mountImage
}