const { MerkleTree } = require('../index');
const whitelist = require("./whitelist.json");
const whitelistLimits = require("./whitelist-limits.json");
const uintUint = require("./uint-uint.json");

this.mktree = new MerkleTree(whitelist, ["address"]);
console.log("root", this.mktree.getHexRoot());

this.mktree2 = new MerkleTree(whitelistLimits, ["address", "uint256"]);
console.log("root", this.mktree2.getHexRoot());

this.mktree3 = new MerkleTree(uintUint, ["uint256", "uint256"]);
console.log("root", this.mktree3.getHexRoot());