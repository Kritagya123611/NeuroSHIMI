import { MemoryTree } from './MemoryTree';

export class MemoryForest {
    private trees: Map<string, MemoryTree>;

    constructor() {
        this.trees = new Map();
    }

    public createMemoryTree(domain: string): MemoryTree {
        const tree = new MemoryTree();
        this.trees.set(domain, tree);
        return tree;
    }

    public getMemoryTree(domain: string): MemoryTree | undefined {
        return this.trees.get(domain);
    }

    public addLeaf(domain: string, leaf: string): boolean {
        const tree = this.getMemoryTree(domain);
        if (tree) {
            tree.addLeaf(leaf);
            return true;
        }
        return false;
    }

    public getMerkleRoot(domain: string): string | undefined {
        const tree = this.getMemoryTree(domain);
        return tree ? tree.getMerkleRoot() : undefined;
    }

    public generateProof(domain: string, leaf: string): any {
        const tree = this.getMemoryTree(domain);
        if (tree) {
            return tree.generateProof(leaf);
        }
        return null;
    }
}