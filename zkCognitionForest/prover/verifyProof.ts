import { groth16 } from 'snarkjs';
import { readFileSync } from 'fs';

async function verifyProof(proofFile: string, publicSignalsFile: string, verificationKeyFile: string): Promise<boolean> {
    // Read the proof and public signals from the specified files
    const proof = JSON.parse(readFileSync(proofFile, 'utf8'));
    const publicSignals = JSON.parse(readFileSync(publicSignalsFile, 'utf8'));
    
    // Read the verification key
    const verificationKey = JSON.parse(readFileSync(verificationKeyFile, 'utf8'));

    // Verify the proof
    const isValid = await groth16.verify(verificationKey, publicSignals, proof);
    return isValid;
}

// Export the verifyProof function
export default verifyProof;