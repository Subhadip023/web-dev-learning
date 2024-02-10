import qr from 'qrcode';
import fs from 'fs';
import readlineSync from 'readline-sync';

// Function to take input from the user for the URL
const getInputUrl = () => {
    return readlineSync.question('Enter the URL: ').trim(); // Remove leading/trailing whitespaces
};

// Main function
const main = async () => {
    const url = getInputUrl();

    // File name to save QR code
    const fileName = 'qr_code.png';

    // Generate QR code for the URL
    try {
        await qr.toFile(fileName, url);
        console.log('QR code generated successfully!');
    } catch (error) {
        console.error('Error generating QR code:', error);
    }
};

// Execute main function
main();
