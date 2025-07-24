import { compileCircuit } from '../prover/compile';
import { generateProof } from '../prover/generateProof';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

async function generateZKProof(circuitFile: string, inputFile: string, outputFile: string) {
    try {
        // Compile the circuit
        const circuit = await compileCircuit(circuitFile);
        
        // Read input data
        const inputData = JSON.parse(readFileSync(inputFile, 'utf-8'));
        
        // Generate proof
        const proof = await generateProof(circuit, inputData);
        
        // Write proof to output file
        writeFileSync(outputFile, JSON.stringify(proof, null, 2));
        
        console.log(`Proof generated successfully and saved to ${outputFile}`);
    } catch (error) {
        console.error('Error generating ZK proof:', error);
    }
}

// Command line arguments
const [circuitFile, inputFile, outputFile] = process.argv.slice(2);

if (!circuitFile || !inputFile || !outputFile) {
    console.error('Usage: ts-node generateZKProof.ts <circuitFile> <inputFile> <outputFile>');
    process.exit(1);
}

// Generate the proof
generateZKProof(resolve(__dirname, circuitFile), resolve(__dirname, inputFile), resolve(__dirname, outputFile));