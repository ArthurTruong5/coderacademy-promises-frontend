import utils from './utils';

export default function(index) {
    const bodyUrl = `/api/body/${utils.randomNumber(4)}`;
    const eyesUrl = `/api/eye/${utils.randomNumber(15)}`;
    const mouthUrl = `/api/mouth/${utils.randomNumber(12)}`;
    
    utils.callbackRequest(bodyUrl, index, function(err, image1) {
        if (err) {
            console.log(err);
        }

        utils.callbackRequest(eyesUrl, index, function (err, image2) {
            if (err) {
                console.log(err);
            }
    
            utils.callbackRequest(mouthUrl, index, function (err, image3) {
                if (err) {
                    console.log(err);
                }
                
                console.log(typeof image1, typeof image2, typeof image3);
            });
        });
    });
}