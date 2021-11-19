const { ethers } = require("ethers");
const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

class MKTree extends MerkleTree {
  constructor(data = null, format = []) {
    super(data.map((t) => hashIt(Array.isArray(t) ? t : [t], format)), keccak256, { sortPairs: true })
  }
}

function hashIt(data, format) {
  return Buffer.from(
    ethers.utils
      .solidityKeccak256(format, [...data])
      .slice(2),
    "hex"
  );
}

module.exports = {
  MerkleTree: MKTree,
  hashIt,
};

