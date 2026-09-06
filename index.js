import { Storage } from '@google-cloud/storage'
import { gcpConfig } from './config.js'

const { bucketName } = gcpConfig
const destFileName = 'uploaded-image-01.jpg'
const filePath = './local-image-01.jpg'

const storage = new Storage({ projectId: gcpConfig.projectId });

async function uploadFile() {
  await storage.bucket(bucketName).upload(filePath, { destination: destFileName, });
  console.log(`${destFileName} uploaded to ${bucketName}`);
}

uploadFile().catch(console.error);
