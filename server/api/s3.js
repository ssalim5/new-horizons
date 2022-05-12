const router = require("express").Router();
const aws = require("aws-sdk");
const fs = require("fs")
const path = require("path")
const { config } = require("chai");
require('dotenv').config();
module.exports = router

const S3_BUCKET = process.env.S3_BUCKET

aws.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID || config.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || config.AWS_SECRET_ACCESS_KEY
})

router.get('/', (req, res) => {
  let s3 = new aws.S3()
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: "estimatedRatings.json"
  }
  s3.getObject(s3Params, (error, data) => {
      if (error !== null){
        res.send(error)
      } else {
        res.send(data.Body)
      }
  })
})

router.post('/', async(req, res) => {
  const s3 = new aws.S3()
  const filePath = path.join(__dirname, "../../estimatedRatings.json")
  const file = fs.createReadStream(filePath);

  const uploadParams = {
    Bucket: S3_BUCKET,
    Key: path.basename(filePath),
    Body: file,
    ACL: 'public-read'
  };

  try {
    const data = await s3.putObject(uploadParams).promise();
    console.log("Success", data);
    res.json(file); // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
})

// Accessing from CLIENT side - get SignedURL
router.get('/sign-s3', (req, res) => {
  const s3 = new aws.S3();
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 120,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    res.write(JSON.stringify(returnData));
    res.end();
  });
});

// function getSignedRequest(file){
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', `/api/s3/sign-s3?file-name=${file.name}&file-type=${file.type}`);
//   xhr.onreadystatechange = () => {
//     if(xhr.readyState === 4){
//       if(xhr.status === 200){
//         const response = JSON.parse(xhr.responseText);
//         uploadFile(file, response.signedRequest, response.url);
//       }
//       else{
//         alert('Could not get signed URL.');
//       }
//     }
//   };
//   xhr.send();
// }

// function uploadFile(file, signedRequest, url){
//   const xhr = new XMLHttpRequest();
//   xhr.open('PUT', signedRequest);
//   xhr.onreadystatechange = () => {
//     if(xhr.readyState === 4){
//       if(xhr.status === 200){
//       }
//       else{
//         alert('Could not upload file.');
//       }
//     }
//   };
//   xhr.send(file);
// }
