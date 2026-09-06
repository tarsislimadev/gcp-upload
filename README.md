# GCP Upload

A simple Node.js utility to upload files to Google Cloud Storage.

## Features

- Uploads local files to a specified GCP bucket.
- Configurable via a central configuration file.
- Uses the official `@google-cloud/storage` library.

## Prerequisites

- [Node.js](https://nodejs.org/) installed.
- A Google Cloud Project with a Storage bucket created.
- A Service Account key file (`.json`) with permissions to upload to the bucket.

## Getting Started

### 1. Installation

Install the dependencies using npm:

```bash
npm install
```

### 2. Configuration

Update `config.js` with your project details:

```javascript
export const gcpConfig = {
  projectId: 'your-project-id',
  bucketName: 'your-bucket-name',
  keyFilename: './service-account-key.json', 
};
```

Place your `service-account-key.json` file in the root directory of the project.

### 3. Usage

By default, `index.js` is configured to upload `./local-image-01.jpg` to the bucket. You can modify the `filePath` and `destFileName` variables in `index.js` to suit your needs.

Run the script using:

```bash
node index.js
```

## License

[MIT](./LICENSE)
