// test/testMemoryTree.ts

import { MemoryTree } from '../memory/MemoryTree'

const memory = new MemoryTree()

// Add some memory entries (e.g., numbers or stringified facts)
memory.addLeaf("42")
memory.addLeaf("1337")
memory.addLeaf("99")

console.log("🔗 Merkle Root:", memory.getRoot())
console.log("🌿 Leaves:", memory.getLeaves())

// Get and print Merkle proof for the second leaf (index 1)
const proof = memory.getProof(1)
console.log("🧾 Merkle Proof for index 1:")
console.log(proof)
