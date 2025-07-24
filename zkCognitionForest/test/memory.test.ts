import { MemoryTree } from '../memory/MemoryTree';
import { generateProof } from '../prover/generateProof';
import { verifyProof } from '../prover/verifyProof';

describe('MemoryTree Tests', () => {
    let memoryTree: MemoryTree;

    beforeEach(() => {
        memoryTree = new MemoryTree();
    });

    test('Add leaves to MemoryTree', () => {
        const leaf1 = 'leaf1';
        const leaf2 = 'leaf2';

        memoryTree.addLeaf(leaf1);
        memoryTree.addLeaf(leaf2);

        expect(memoryTree.getRoot()).toBeDefined();
        expect(memoryTree.getLeaves()).toContain(leaf1);
        expect(memoryTree.getLeaves()).toContain(leaf2);
    });

    test('Generate and verify proof for memory inclusion', async () => {
        const leaf = 'leaf1';
        memoryTree.addLeaf(leaf);
        const proof = await generateProof(memoryTree, leaf);

        expect(proof).toBeDefined();
        const isValid = await verifyProof(proof);
        expect(isValid).toBe(true);
    });
});