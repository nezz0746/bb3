export const CommonAdSpacesAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "adGroupIds",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "adGroups",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "metadataURI", type: "string", internalType: "string" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ads",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [
      { name: "adGroupId", type: "uint256", internalType: "uint256" },
      { name: "uri", type: "string", internalType: "string" },
      {
        name: "strategy",
        type: "address",
        internalType: "contract IAdStrategy",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "createAdGroup",
    inputs: [
      { name: "recipient", type: "address", internalType: "address" },
      {
        name: "initialAdSpaceConfig",
        type: "tuple",
        internalType: "struct AdSpaceConfig",
        components: [
          {
            name: "currency",
            type: "address",
            internalType: "address",
          },
          {
            name: "initialPrice",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "taxRate", type: "uint256", internalType: "uint256" },
        ],
      },
      { name: "size", type: "uint256", internalType: "uint256" },
      { name: "metadataURI", type: "string", internalType: "string" },
    ],
    outputs: [{ name: "adGroupId", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createAdPool",
    inputs: [
      { name: "adId", type: "uint256", internalType: "uint256" },
      { name: "superToken", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getAdPool",
    inputs: [
      { name: "adId", type: "uint256", internalType: "uint256" },
      { name: "superToken", type: "address", internalType: "address" },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract CommonAdPool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAdUri",
    inputs: [{ name: "adId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "uri", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getApproved",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getGroup",
    inputs: [{ name: "adGroupId", type: "uint256", internalType: "uint256" }],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct AdGroup",
        components: [
          { name: "owner", type: "address", internalType: "address" },
          {
            name: "metadataURI",
            type: "string",
            internalType: "string",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTokenX",
    inputs: [{ name: "underlying", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "_marketplace",
        type: "address",
        internalType: "address",
      },
      {
        name: "_placeholderURI",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "isApprovedForAll",
    inputs: [
      { name: "", type: "address", internalType: "address" },
      { name: "operator", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "openAdSpaces",
    inputs: [
      { name: "adGroupId", type: "uint256", internalType: "uint256" },
      {
        name: "initialAdSpaceConfig",
        type: "tuple",
        internalType: "struct AdSpaceConfig",
        components: [
          {
            name: "currency",
            type: "address",
            internalType: "address",
          },
          {
            name: "initialPrice",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "taxRate", type: "uint256", internalType: "uint256" },
        ],
      },
      {
        name: "numberOfAdSpaces",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ownerOf",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "placeholderURI",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "proxiableUUID",
    inputs: [],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "royaltyInfo",
    inputs: [
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "salePrice", type: "uint256", internalType: "uint256" },
    ],
    outputs: [
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "data", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setApprovalForAll",
    inputs: [
      { name: "operator", type: "address", internalType: "address" },
      { name: "approved", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setTokenURI",
    inputs: [{ name: "uri", type: "string", internalType: "string" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setTokenX",
    inputs: [
      {
        name: "underlyingToken",
        type: "address",
        internalType: "address",
      },
      { name: "superToken", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [{ name: "interfaceId", type: "bytes4", internalType: "bytes4" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenURI",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenXs",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateAdGroupMetadata",
    inputs: [
      { name: "adGroupId", type: "uint256", internalType: "uint256" },
      { name: "metadataURI", type: "string", internalType: "string" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateAdStrategy",
    inputs: [
      { name: "adId", type: "uint256", internalType: "uint256" },
      {
        name: "strategy",
        type: "address",
        internalType: "contract IAdStrategy",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateAdURI",
    inputs: [
      { name: "adId", type: "uint256", internalType: "uint256" },
      { name: "adURI", type: "string", internalType: "string" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "upgradeTo",
    inputs: [
      {
        name: "newImplementation",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "upgradeToAndCall",
    inputs: [
      {
        name: "newImplementation",
        type: "address",
        internalType: "address",
      },
      { name: "data", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "event",
    name: "AdGroupCreated",
    inputs: [
      {
        name: "groupId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "recipient",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "metadataURI",
        type: "string",
        indexed: true,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AdGroupCreated",
    inputs: [
      {
        name: "groupId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "recipient",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AdGroupMetadataUpdated",
    inputs: [
      {
        name: "groupId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "metadataURI",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AdPoolCreated",
    inputs: [
      {
        name: "adId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "superToken",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "pool",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "underlyingToken",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AdSpaceCreated",
    inputs: [
      {
        name: "groupId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "adId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AdSpaceStrategyUpdated",
    inputs: [
      {
        name: "adId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "strategy",
        type: "address",
        indexed: true,
        internalType: "contract IAdStrategy",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AdSpaceURIUpdated",
    inputs: [
      {
        name: "adId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "uri",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AdminChanged",
    inputs: [
      {
        name: "previousAdmin",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "newAdmin",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "approved",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "approved",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "BeaconUpgraded",
    inputs: [
      {
        name: "beacon",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TokenXSet",
    inputs: [
      {
        name: "underlyingToken",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "superToken",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Upgraded",
    inputs: [
      {
        name: "implementation",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
] as const;
