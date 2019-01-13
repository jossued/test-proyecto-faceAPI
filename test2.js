'use strict';

const request = require('request');

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = '3eb3b47165d34440a6cb3937b62605d0';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = 'https://brazilsouth.api.cognitive.microsoft.com/face/v1.0/verify';

/*
const imageUrl =
    'https://upload.wikimedia.org/wikipedia/commons/3/37/Dagestani_man_and_woman.jpg';
*/

const faceId1= '0cc69c7d-7b72-4ca0-81ee-713e89ce8a22';
const faceId2= 'c81f5119-8e13-4180-9aa8-73c1950950f6';

// Request parameters.
const params = {
    // 'returnFaceId': 'true',
    // 'returnFaceLandmarks': 'false',
    // 'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
    //     'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
};

const options = {
    uri: uriBase,
    qs: params,
    body: '{"faceId1": ' + '"' + faceId1 + '",' +
        '"faceId2": ' + '"' + faceId2+'"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};

request.post(options, (error, response, body) => {
    if (error) {
        console.log('Error: ', error);
        return;
    }
    let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
    console.log('JSON Response\n');
    console.log(jsonResponse);
});