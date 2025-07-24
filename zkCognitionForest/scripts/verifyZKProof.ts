import { verifyProof } from '../prover/verifyProof';
import * as fs from 'fs';

const main = async () => {
    const proofFilePath = process.argv[2];
    const verificationKeyFilePath = process.argv[3];

    if (!proofFilePath || !verificationKeyFilePath) {
        console.error('Usage: ts-node verifyZKProof.ts <proofFilePath> <verificationKeyFilePath>');
        process.exit(1);
    }

    try {
        const proof = JSON.parse(fs.readFileSync(proofFilePath, 'utf-8'));
        const verificationKey = JSON.parse(fs.readFileSync(verificationKeyFilePath, 'utf-8'));

        const isValid = await verifyProof(verificationKey, proof);
        if (isValid) {
            console.log('Proof is valid.');
        } else {
            console.log('Proof is invalid.');
        }
    } catch (error) {
        console.error('Error verifying proof:', error);
    }
};

main();