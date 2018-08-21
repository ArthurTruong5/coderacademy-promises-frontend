import utils from './utils';

export default function(index) {
    const bodyUrl = `/api/body/${utils.randomNumber(4)}`;
    const eyesUrl = `/api/eye/${utils.randomNumber(15)}`;
    const mouthUrl = `/api/mouth/${utils.randomNumber(12)}`;

    return utils.promiseRequest(bodyUrl, index)
        .then(function(image1) { 
            return utils.promiseRequest(eyesUrl, index) 
        })
        .then(function(image2) { 
            return utils.promiseRequest(mouthUrl, index) 
        })
        .then(function(image3) { 
            console.log(typeof image1, typeof image2, typeof image3);
        })
        .catch(function(err) { console.log(err) })
}