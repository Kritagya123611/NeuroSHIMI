# zkCognitionForest

zkCognitionForest is a project designed to implement zero-knowledge proofs using Merkle trees and autonomous agents. The project consists of various components including Circom circuits for proving memory inclusion and causal links, a memory management system, proof generation and verification, and autonomous agents that utilize the memory system.

## Project Structure

- **circuits/**: Contains Circom circuits for zero-knowledge proofs.
  - `inclusion.circom`: Proves memory inclusion in a Merkle tree.
  - `causal.circom`: Proves causal links between trees.
  - `utils/`: Helper circuits, constants, and Poseidon hashing implementations.

- **memory/**: Implements the memory management system.
  - `MemoryTree.ts`: Defines the `MemoryTree` class for a single memory domain.
  - `MemoryForest.ts`: Defines the `MemoryForest` class for managing multiple memory trees.
  - `utils.ts`: Utility functions for hashing and Poseidon wrappers.

- **prover/**: Handles proof generation and verification.
  - `compile.ts`: Compiles Circom circuits into R1CS format.
  - `generateProof.ts`: Creates proofs for given circuits and inputs.
  - `verifyProof.ts`: Verifies generated proofs.

- **agent/**: Implements autonomous agents that interact with the memory system.
  - `bot.ts`: Defines a simple rule-based or LLM agent.
  - `memoryLogger.ts`: Logs facts or actions to the memory forest.

- **test/**: Contains tests for the project components.
  - `memory.test.ts`: Tests for memory tree operations and proof generation.
  - `agent.test.ts`: Tests for agent lifecycle and memory logging.

- **circuits_compiled/**: Contains auto-generated artifacts from the compilation process (ignored in Git).

- **data/**: Local storage for simulation.
  - `roots.db`: Stores Merkle roots.
  - `memory_snapshots/`: JSON logs of memory states.

- **scripts/**: CLI tools for project workflows.
  - `addMemory.ts`: Adds memory to the tree via command line.
  - `generateZKProof.ts`: Creates ZK proofs via command line.
  - `verifyZKProof.ts`: Verifies proofs using command line.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd zkCognitionForest
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Compile Circom circuits:
   ```
   npm run compile
   ```

4. Run tests:
   ```
   npm test
   ```

## Usage

- To add memory to the tree, use:
  ```
  ts-node scripts/addMemory.ts
  ```

- To generate a zero-knowledge proof, use:
  ```
  ts-node scripts/generateZKProof.ts
  ```

- To verify a zero-knowledge proof, use:
  ```
  ts-node scripts/verifyZKProof.ts
  ```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.