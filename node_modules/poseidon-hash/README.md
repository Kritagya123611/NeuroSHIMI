# Poseidon Hash Function

Typescript implementation of the ZK-SNARK friendly Poseidon hash function in isolation, with no dependencies. See https://eprint.iacr.org/2019/458.pdf for a description of the algorithm. The motivation for creating this package was to ensure random number generation wasn't invoked when imported, which would be a problem for Cloudflare's V8 isolate security model. Tested.

## Install

```sh
yarn add poseidon-hash
```

## Test

```sh
yarn test
```

## Build

```sh
yarn build
```

# License

Source code is sourced from https://github.com/iden3/js-crypto, and is licensed under the [GPL-3.0 license](./LICENSE). Attribution for the original source code, of which this is a fork, goes to the 0kims Association.

# Disclaimer

No warranties or liabilities are provided.