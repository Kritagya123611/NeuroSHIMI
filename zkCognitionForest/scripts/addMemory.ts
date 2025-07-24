import { MemoryTree } from '../memory/MemoryTree';
import { readFileSync, writeFileSync } from 'fs';

const addMemory = (memoryData: string) => {
    const memoryTree = new MemoryTree();
    
    // Assuming memoryData is a JSON string representing the memory leaf
    const memoryLeaf = JSON.parse(memoryData);
    
    // Add the memory leaf to the tree
    memoryTree.addLeaf(memoryLeaf);
    
    // Save the updated Merkle root to the database
    const rootsDbPath = '../data/roots.db';
    const currentRoots = JSON.parse(readFileSync(rootsDbPath, 'utf-8') || '{}');
    
    currentRoots[memoryTree.getRoot()] = memoryTree.getRoot();
    writeFileSync(rootsDbPath, JSON.stringify(currentRoots, null, 2));
    
    console.log('Memory added successfully. Current Merkle root:', memoryTree.getRoot());
};

const memoryData = process.argv[2];
if (!memoryData) {
    console.error('Please provide memory data as a JSON string.');
    process.exit(1);
}

addMemory(memoryData);