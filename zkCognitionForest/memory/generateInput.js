"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var MemoryTree_1 = require("./MemoryTree"); // adjust path if needed
var tree = new MemoryTree_1.MemoryTree();
// Add some values
tree.addLeaf(1);
tree.addLeaf(2);
tree.addLeaf(3);
tree.addLeaf(4);
var index = 2; // you want to prove inclusion of value 3
var proof = tree.getProof(index);
var input = {
    leaf: tree.getLeaf(index),
    pathElements: proof.map(function (p) { return BigInt('0x' + p.data.toString('hex')).toString(); }),
    pathIndices: proof.map(function (p) { return (p.position === 'left' ? '0' : '1'); }),
    root: tree.getRoot()
};
fs_1.default.writeFileSync('build/input.json', JSON.stringify(input, null, 2));
console.log('✅ input.json created:', input);
