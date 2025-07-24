import { poseidon } from "../circuits/utils/poseidon"; // Import Poseidon hashing function

export class MemoryTree {
    private leaves: string[]; // Array to store leaves of the Merkle tree
    private root: string; // Merkle root

    constructor() {
        this.leaves = [];
        this.root = "";
    }

    // Method to add a leaf to the Merkle tree
    public addLeaf(leaf: string): void {
        this.leaves.push(leaf);
        this.root = this.generateMerkleRoot(); // Update the root after adding a leaf
    }

    // Method to generate the Merkle root from the leaves
    private generateMerkleRoot(): string {
        if (this.leaves.length === 0) return ""; // Return empty if no leaves

        let currentLevel = this.leaves.map(leaf => poseidon([leaf])); // Hash leaves

        while (currentLevel.length > 1) {
            const nextLevel: string[] = [];
            for (let i = 0; i < currentLevel.length; i += 2) {
                if (i + 1 < currentLevel.length) {
                    // Hash pairs of nodes
                    nextLevel.push(poseidon([currentLevel[i], currentLevel[i + 1]]));
                } else {
                    // If odd number of nodes, carry the last one to the next level
                    nextLevel.push(currentLevel[i]);
                }
            }
            currentLevel = nextLevel; // Move to the next level
        }

        return currentLevel[0]; // The remaining node is the Merkle root
    }

    // Method to get the current Merkle root
    public getMerkleRoot(): string {
        return this.root;
    }
}