# Merkle Tree lib

This is a simple class which extends the merkletreejs library. The interface is the same, just the constructor is different.

Example usage:
```javascript
/**
 * @param {Array} dataset Dataset of things to be put in a merketree
 * @param {Array} format Format specifying the format of the dataset e.g. ["address", "uint256"]
 */

const format = ["address", "uint256"];
const dataset = [
  ["0x70997970C51812dc3A010C7d01b50e0d17dc79C8", 2],
  ["0xa111C225A0aFd5aD64221B1bc1D5d817e5D3Ca15", 3],
  ["0x8de806462823aD25056eE8104101F9367E208C14", 1]
];

// Create a merkle tree
const merkleTree = new MerkleTree(dataset, format);

// Compute root hash:
console.log("root", merkleTree.getHexRoot());
```