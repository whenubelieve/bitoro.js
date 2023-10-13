/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ReferralManager,
  ReferralManagerInterface,
} from "../ReferralManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pendingOwner",
        type: "address",
      },
    ],
    name: "PrepareToTransferOwnership",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "referralCodeOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "referralCode",
        type: "bytes32",
      },
    ],
    name: "RegisterReferralCode",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "handler",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enable",
        type: "bool",
      },
    ],
    name: "SetHandler",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousMaintainer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newMaintainer",
        type: "address",
      },
    ],
    name: "SetMaintainer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "referralCode",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "referralCodeOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "rebateRecipient",
        type: "address",
      },
    ],
    name: "SetRebateRecipient",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "referralCode",
        type: "bytes32",
      },
    ],
    name: "SetReferralCode",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "tier",
            type: "uint8",
          },
          {
            internalType: "uint64",
            name: "stakeThreshold",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "discountRate",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "rebateRate",
            type: "uint64",
          },
        ],
        indexed: false,
        internalType: "struct IReferralManager.TierSetting[]",
        name: "newTierSettings",
        type: "tuple[]",
      },
    ],
    name: "SetTiers",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "referralCode",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "TransferReferralCode",
    type: "event",
  },
  {
    inputs: [],
    name: "PRIMARY_NETWORK",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RATE_DENOMINATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "getReferralCodeOf",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTiers",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "tier",
            type: "uint8",
          },
          {
            internalType: "uint64",
            name: "stakeThreshold",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "discountRate",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "rebateRate",
            type: "uint64",
          },
        ],
        internalType: "struct IReferralManager.TierSetting[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isHandler",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "referralCode",
        type: "bytes32",
      },
    ],
    name: "isValidReferralCode",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastUpdatedTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "rebateRecipients",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "referralCodeOf",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "referralCodeOwners",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "referralCode",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "rebateRecipient",
        type: "address",
      },
    ],
    name: "registerReferralCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "handler",
        type: "address",
      },
      {
        internalType: "bool",
        name: "enable",
        type: "bool",
      },
    ],
    name: "setHandler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "referralCode",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "rebateRecipient",
        type: "address",
      },
    ],
    name: "setRebateRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "referralCode",
        type: "bytes32",
      },
    ],
    name: "setReferrerCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "referralCode",
        type: "bytes32",
      },
    ],
    name: "setReferrerCodeFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "tier",
            type: "uint8",
          },
          {
            internalType: "uint64",
            name: "stakeThreshold",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "discountRate",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "rebateRate",
            type: "uint64",
          },
        ],
        internalType: "struct IReferralManager.TierSetting[]",
        name: "newTierSettings",
        type: "tuple[]",
      },
    ],
    name: "setTiers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "takeOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tierSettings",
    outputs: [
      {
        internalType: "uint8",
        name: "tier",
        type: "uint8",
      },
      {
        internalType: "uint64",
        name: "stakeThreshold",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "discountRate",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "rebateRate",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "referralCode",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferReferralCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ReferralManager__factory {
  static readonly abi = _abi;
  static createInterface(): ReferralManagerInterface {
    return new utils.Interface(_abi) as ReferralManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReferralManager {
    return new Contract(address, _abi, signerOrProvider) as ReferralManager;
  }
}
