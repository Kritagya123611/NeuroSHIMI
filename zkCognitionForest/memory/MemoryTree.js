"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryTree = void 0;
var merkletreejs_1 = require("merkletreejs");
var poseidon_hash_1 = require("poseidon-hash");
var MemoryTree = /** @class */ (function () {
    function MemoryTree() {
        this.leaves = [];
        this.tree = new merkletreejs_1.MerkleTree(this.leaves, poseidonHashPair, { sortPairs: true });
    }
    MemoryTree.prototype.addLeaf = function (data) {
        var leafHash = poseidonHashPair(BigInt(0), BigInt(data)); // Consistent with Poseidon(2)
        this.leaves.push(leafHash);
        this.tree = new merkletreejs_1.MerkleTree(this.leaves, poseidonHashPair, { sortPairs: true });
    };
    MemoryTree.prototype.getProof = function (index) {
        return this.tree.getProof(this.leaves[index]);
    };
    MemoryTree.prototype.getRoot = function () {
        return BigInt('0x' + this.tree.getRoot().toString('hex')).toString();
    };
    MemoryTree.prototype.getLeaf = function (index) {
        return BigInt('0x' + this.leaves[index].toString('hex')).toString();
    };
    return MemoryTree;
}());
exports.MemoryTree = MemoryTree;
// Hash helper for two inputs
function poseidonHashPair(a, b) {
    var hash = (0, poseidon_hash_1.poseidon)([a, b]);
    var hex = hash.toString(16).padStart(64, '0');
    return Buffer.from(hex, 'hex');
}
