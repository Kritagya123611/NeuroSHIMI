import { MemoryForest } from '../memory/MemoryForest';

class Agent {
    private memoryForest: MemoryForest;

    constructor(memoryForest: MemoryForest) {
        this.memoryForest = memoryForest;
    }

    public makeDecision(input: any): string {
        // Simple rule-based decision-making
        if (input === 'query') {
            return this.queryMemory();
        } else if (input === 'store') {
            this.storeMemory('New fact');
            return 'Fact stored.';
        }
        return 'Unknown command.';
    }

    private queryMemory(): string {
        // Example of querying memory
        const memoryState = this.memoryForest.getMemoryState();
        return `Current memory state: ${JSON.stringify(memoryState)}`;
    }

    private storeMemory(fact: string): void {
        // Example of storing a fact in memory
        this.memoryForest.addMemory(fact);
    }
}

export default Agent;