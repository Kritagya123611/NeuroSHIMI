import { MerkleTree } from 'merkletreejs'
import { poseidon } from 'poseidon-hash'

export class MemoryTree {
  private tree: MerkleTree
  private leaves: Buffer[]

  constructor() {
    this.leaves = []
    this.tree = new MerkleTree(this.leaves, poseidonHashPair, { sortPairs: true })
  }

  addLeaf(data: string | number) {
    const leafHash = poseidonHashPair(BigInt(0), BigInt(data)) // Consistent with Poseidon(2)
    this.leaves.push(leafHash)
    this.tree = new MerkleTree(this.leaves, poseidonHashPair, { sortPairs: true })
  }

  getProof(index: number) {
    return this.tree.getProof(this.leaves[index])
  }

  getRoot(): string {
    return BigInt('0x' + this.tree.getRoot().toString('hex')).toString()
  }

  getLeaf(index: number): string {
    return BigInt('0x' + this.leaves[index].toString('hex')).toString()
  }
}

// Hash helper for two inputs
function poseidonHashPair(a: bigint, b: bigint): Buffer {
  const hash = poseidon([a, b])
  const hex = hash.toString(16).padStart(64, '0')
  return Buffer.from(hex, 'hex')
}
