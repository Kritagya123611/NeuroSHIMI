pragma circom 2.0.0;

include "poseidon.circom";

template MerkleProof(depth) {
    signal input leaf;
    signal input pathElements[depth];
    signal input pathIndices[depth];
    signal output root;

    signal hash[depth + 1];
    signal left[depth];
    signal right[depth];

    signal selector0[depth];
    signal selector1[depth];

    signal a_left[depth];
    signal b_left[depth];
    signal a_right[depth];
    signal b_right[depth];

    component hashers[depth];

    hash[0] <== leaf;

    for (var i = 0; i < depth; i++) {
        // Selectors
        selector0[i] <== 1 - pathIndices[i];
        selector1[i] <== pathIndices[i];
        selector0[i] * selector1[i] === 0;

        // Compute left and right values for hashing
        a_left[i] <== selector0[i] * hash[i];
        b_left[i] <== selector1[i] * pathElements[i];
        left[i] <== a_left[i] + b_left[i];

        a_right[i] <== selector0[i] * pathElements[i];
        b_right[i] <== selector1[i] * hash[i];
        right[i] <== a_right[i] + b_right[i];

        // Hash left and right using Poseidon
        hashers[i] = Poseidon(2);
        hashers[i].inputs[0] <== left[i];
        hashers[i].inputs[1] <== right[i];
        hash[i + 1] <== hashers[i].out;
    }

    root <== hash[depth];
}
