import { MemoryForest } from '../memory/MemoryForest';
import { Bot } from '../agent/bot';
import { MemoryLogger } from '../agent/memoryLogger';

describe('Agent Tests', () => {
    let memoryForest: MemoryForest;
    let bot: Bot;
    let memoryLogger: MemoryLogger;

    beforeEach(() => {
        memoryForest = new MemoryForest();
        bot = new Bot(memoryForest);
        memoryLogger = new MemoryLogger(memoryForest);
    });

    test('Agent should log actions to memory', () => {
        const action = 'Test action';
        bot.performAction(action);
        const logs = memoryLogger.getLogs();
        expect(logs).toContain(action);
    });

    test('Agent should interact with memory forest', () => {
        const initialMemory = memoryForest.getMemory();
        bot.performAction('Add memory');
        const updatedMemory = memoryForest.getMemory();
        expect(updatedMemory).not.toEqual(initialMemory);
    });

    test('Agent lifecycle should be managed correctly', () => {
        bot.start();
        expect(bot.isActive()).toBe(true);
        bot.stop();
        expect(bot.isActive()).toBe(false);
    });
});