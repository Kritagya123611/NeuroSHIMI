pragma circom 2.0.0;

include "poseidon.circom";
include "lib/merkle.circom";

template MerkleInclusion(depth) {
    signal input leaf;
    signal input root;
    signal input pathElements[depth];
    signal input pathIndices[depth];

    component proof = MerkleProof(depth);
    proof.leaf <== leaf;

    for (var i = 0; i < depth; i++) {
        proof.pathElements[i] <== pathElements[i];
        proof.pathIndices[i] <== pathIndices[i];
    }

    root === proof.root;
}

component main = MerkleInclusion(3);
