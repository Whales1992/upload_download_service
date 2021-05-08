import aws from 'aws-sdk';
import path from 'path';
const upload = (req) => {
  return new Promise((resolved, rejected) => {
    const s3 = new aws.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    });

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Body: req.file.path,
      Key: `${req.body.fileName}${path.extname(req.file.originalname)}`,
    };

    s3.upload(params, function (err, data) {
      if (err !== null) rejected({ data: err });
      else resolved({ data });
    });
  });
};

export { upload };
