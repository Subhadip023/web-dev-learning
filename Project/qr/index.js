import qr from 'qr-image';
import fs from 'fs';
import readlineSync from 'readline-sync';
import url from 'url';

const userInputUrl = readlineSync.question('Enter the URL: ');
const parsedUrl = url.parse(userInputUrl);

if (!parsedUrl.protocol) {
    console.error('Invalid URL. Please include the protocol (e.g., http:// or https://)');
    process.exit(1);
}

const qrImage = qr.image(userInputUrl, { type: 'jpg' });
const fileStream = fs.createWriteStream('qr_code.jpg');

qrImage.pipe(fileStream);

fileStream.on('finish', () => {
    console.log('QR code saved as qr_code.jpg');
});

fileStream.on('error', (err) => {
    console.error('Error saving QR code:', err);
});
