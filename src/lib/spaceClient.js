import { S3Client } from "@aws-sdk/client-s3";

const spaceClient = new S3Client({
    //Get the endpoint from the DO website for your space
    forcePathStyle: false,
    endpoint: "https://ams3.digitaloceanspaces.com",
    region: "us-east-1",
    bucket: 'mcdm-resources/nextapp',
    //Create a credential using DO Spaces API key (https://cloud.digitalocean.com/account/api/tokens)
    credentials: {
        accessKeyId: process.env.SPACES_KEY,
        secretAccessKey: process.env.SPACES_SECRET
    }
});

export { spaceClient };