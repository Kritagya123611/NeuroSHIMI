import { compileCircuit } from './compile';
import { generateProof as zkGenerateProof } from 'snarkjs';
import { readFileSync } from 'fs';

export async function generateProof(circuitName: string, input: object): Promise<any> {
    // Compile the circuit
    const circuit = await compileCircuit(circuitName);
    
    // Load the compiled circuit artifacts
    const { proof, publicSignals } = await zkGenerateProof(circuit, input);
    
    return { proof, publicSignals };
}