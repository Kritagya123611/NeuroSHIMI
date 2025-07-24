import { MemoryForest } from '../memory/MemoryForest';

export function logToMemoryForest(action: string, data: any): void {
    const memoryForest = new MemoryForest();
    memoryForest.addMemory(action, data);
    console.log(`Logged action: ${action} with data:`, data);
}