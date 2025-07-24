// This file contains a Circom circuit that proves a causal link between trees.

pragma circom 2.0.0;

template CausalLink() {
    // Inputs
    signal input root1; // Merkle root of the first tree
    signal input root2; // Merkle root of the second tree
    signal input proof1; // Proof of inclusion for the first tree
    signal input proof2; // Proof of inclusion for the second tree
    signal input leaf1; // Leaf node in the first tree
    signal input leaf2; // Leaf node in the second tree

    // Intermediate signals
    signal isValid1; // Validity of the first proof
    signal isValid2; // Validity of the second proof

    // Constraints for the first tree
    isValid1 <== (root1 === hash(leaf1)); // Check if the root matches the hash of the leaf
    isValid1 === 1 ==> proof1; // If valid, the proof must hold

    // Constraints for the second tree
    isValid2 <== (root2 === hash(leaf2)); // Check if the root matches the hash of the leaf
    isValid2 === 1 ==> proof2; // If valid, the proof must hold

    // Causal link condition
    signal causalLink; // Signal to represent the causal link
    causalLink <== isValid1 * isValid2; // Both proofs must be valid for a causal link to exist
}

// Instantiate the circuit
component main = CausalLink();