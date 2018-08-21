import utils from './utils';

export default async function(index) {
    const bodyUrl = `/api/body/${utils.randomNumber(4)}`;
    const eyesUrl = `/api/eye/${utils.randomNumber(15)}`;
    const mouthUrl = `/api/mouth/${utils.randomNumber(12)}`;
    
    const image1 = await utils.promiseRequest(bodyUrl, index);
    const image2 = await utils.promiseRequest(eyesUrl, index);
    const image3 = await utils.promiseRequest(mouthUrl, index);

    console.log(typeof image1, typeof image2, typeof image3);
}