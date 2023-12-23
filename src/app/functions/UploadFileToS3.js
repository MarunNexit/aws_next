import { Amplify } from 'aws-amplify';
import config from '../../amplifyconfiguration.json';
import { getAuthorManuscripts } from '@/app/functions/manuscripts/GetAuthorManuscripts';
Amplify.configure(config);
import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: 'AKIAQKONVYXNYIOVUIDT',
    secretAccessKey: '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',
    region: 'eu-central-1',
});

export async function UploadFileToS3(file) {
    try {
        const s3 = new AWS.S3();
        const bucketName = 'filespublishhouse';
        const filePath = 'image_manuscripts/' + file.name;

        const uploadParams = {
            Bucket: bucketName,
            Key: filePath, // Use the full file path as the Key
            Body: file, // Use the file directly as the Body
        };

        s3.upload(uploadParams, (err, data) => {
            if (err) {
                console.error("Error uploading file:", err);
            } else {
                console.log("File uploaded successfully. S3 Location:", data.Location);
            }
        });

    } catch (error) {
        console.log('UploadFileToS3 failed: ', error);
    }
}
