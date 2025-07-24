import { getPoseidon } from './poseidon-opt';

export const poseidon = (arr: Array<number | bigint | string>): bigint => {
    const input: bigint[] = arr.map((x) => BigInt(x))
    const poseidonHasher = getPoseidon()
    return poseidonHasher.hash(input)
}