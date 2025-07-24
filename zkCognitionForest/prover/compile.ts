import { compile } from 'circom';
import * as fs from 'fs';
import * as path from 'path';

const circuitsDir = path.join(__dirname, '../circuits');
const outputDir = path.join(__dirname, '../circuits_compiled');

async function compileCircuits() {
    const circuitFiles = ['inclusion.circom', 'causal.circom'];

    for (const circuitFile of circuitFiles) {
        const circuitPath = path.join(circuitsDir, circuitFile);
        const outputFileName = circuitFile.replace('.circom', '');
        
        try {
            const { r1cs, wasm, zkey } = await compile(circuitPath);
            
            // Save the compiled artifacts
            fs.writeFileSync(path.join(outputDir, `${outputFileName}.r1cs`), r1cs);
            fs.writeFileSync(path.join(outputDir, `${outputFileName}.wasm`), wasm);
            fs.writeFileSync(path.join(outputDir, `${outputFileName}.zkey`), zkey);
            
            console.log(`Compiled ${circuitFile} successfully.`);
        } catch (error) {
            console.error(`Error compiling ${circuitFile}:`, error);
        }
    }
}

compileCircuits();