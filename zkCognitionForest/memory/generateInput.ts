import fs from 'fs'
import { MemoryTree } from './MemoryTree' // adjust path if needed

const tree = new MemoryTree()

// Add some values
tree.addLeaf(1)
tree.addLeaf(2)
tree.addLeaf(3)
tree.addLeaf(4)

const index = 2 // you want to prove inclusion of value 3
const proof = tree.getProof(index)

const input = {
  leaf: tree.getLeaf(index),
  pathElements: proof.map(p => BigInt('0x' + p.data.toString('hex')).toString()),
  pathIndices: proof.map(p => (p.position === 'left' ? '0' : '1')),
  root: tree.getRoot()
}

fs.writeFileSync('build/input.json', JSON.stringify(input, null, 2))
console.log('✅ input.json created:', input)
