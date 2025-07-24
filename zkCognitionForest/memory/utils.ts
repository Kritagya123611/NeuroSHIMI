import { poseidon } from 'circomlibjs';
import { BigNumber } from 'ethers';

export function hashLeaf(data: string): string {
    const leaf = poseidon([BigNumber.from(data).toBigInt()]);
    return leaf.toString();
}

export function hashPair(left: string, right: string): string {
    const pairHash = poseidon([BigNumber.from(left).toBigInt(), BigNumber.from(right).toBigInt()]);
    return pairHash.toString();
}

export function hashRoot(roots: string[]): string {
    const rootHash = poseidon(roots.map(root => BigNumber.from(root).toBigInt()));
    return rootHash.toString();
}