// Inclusion circuit for proving memory inclusion in a Merkle tree
pragma circom 2.0.0;

include "../utils/poseidon.circom"; // Include Poseidon hashing circuit

// Define the inclusion circuit
template Inclusion() {
    // Input signals
    signal input leaf; // The leaf to be included
    signal input root; // The Merkle root
    signal input path[]; // The Merkle path
    signal input pathIndices[]; // Indices of the path

    // Intermediate signals
    signal hash; // Hash of the current node
    signal current; // Current node in the Merkle tree

    // Initialize the current node as the leaf
    current <== leaf;

    // Iterate through the path to compute the hash
    for (var i = 0; i < path.length; i++) {
        // Compute the hash based on the current node and the path
        current <== poseidon([current, path[i]]);
    }

    // The final hash should equal the Merkle root
    hash <== current;
    hash === root; // Constraint to ensure the computed hash matches the root
}

// Instantiate the Inclusion circuit
component main = Inclusion();