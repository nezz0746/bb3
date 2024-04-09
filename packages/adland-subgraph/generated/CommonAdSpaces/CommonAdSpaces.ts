// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class AdGroupCreated extends ethereum.Event {
  get params(): AdGroupCreated__Params {
    return new AdGroupCreated__Params(this);
  }
}

export class AdGroupCreated__Params {
  _event: AdGroupCreated;

  constructor(event: AdGroupCreated) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get beneficiary(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AdSpaceCreated extends ethereum.Event {
  get params(): AdSpaceCreated__Params {
    return new AdSpaceCreated__Params(this);
  }
}

export class AdSpaceCreated__Params {
  _event: AdSpaceCreated;

  constructor(event: AdSpaceCreated) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get adId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get adSpace(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class AdSpaceStrategyUpdated extends ethereum.Event {
  get params(): AdSpaceStrategyUpdated__Params {
    return new AdSpaceStrategyUpdated__Params(this);
  }
}

export class AdSpaceStrategyUpdated__Params {
  _event: AdSpaceStrategyUpdated;

  constructor(event: AdSpaceStrategyUpdated) {
    this._event = event;
  }

  get adId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get strategy(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AdSpaceURIUpdated extends ethereum.Event {
  get params(): AdSpaceURIUpdated__Params {
    return new AdSpaceURIUpdated__Params(this);
  }
}

export class AdSpaceURIUpdated__Params {
  _event: AdSpaceURIUpdated;

  constructor(event: AdSpaceURIUpdated) {
    this._event = event;
  }

  get adId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get uri(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class BeaconUpgraded extends ethereum.Event {
  get params(): BeaconUpgraded__Params {
    return new BeaconUpgraded__Params(this);
  }
}

export class BeaconUpgraded__Params {
  _event: BeaconUpgraded;

  constructor(event: BeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TokenXSet extends ethereum.Event {
  get params(): TokenXSet__Params {
    return new TokenXSet__Params(this);
  }
}

export class TokenXSet__Params {
  _event: TokenXSet;

  constructor(event: TokenXSet) {
    this._event = event;
  }

  get underlyingToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get superToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CommonAdSpaces__createAdGroupResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getAdGroupAdmin(): Address {
    return this.value0;
  }

  getAdGroupId(): BigInt {
    return this.value1;
  }
}

export class CommonAdSpaces__createAdGroup1Result {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getAdGroupAdmin(): Address {
    return this.value0;
  }

  getAdGroupId(): BigInt {
    return this.value1;
  }
}

export class CommonAdSpaces__createAdGroup1InputInitialAdSpaceConfigStruct extends ethereum.Tuple {
  get currency(): Address {
    return this[0].toAddress();
  }

  get initialPrice(): BigInt {
    return this[1].toBigInt();
  }

  get taxRate(): BigInt {
    return this[2].toBigInt();
  }
}

export class CommonAdSpaces__royaltyInfoResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getValue0(): Address {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }
}

export class CommonAdSpaces extends ethereum.SmartContract {
  static bind(address: Address): CommonAdSpaces {
    return new CommonAdSpaces("CommonAdSpaces", address);
  }

  adGroupAdminFactory(): Address {
    let result = super.call(
      "adGroupAdminFactory",
      "adGroupAdminFactory():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_adGroupAdminFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "adGroupAdminFactory",
      "adGroupAdminFactory():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner),
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createAdGroup(recipient: Address): CommonAdSpaces__createAdGroupResult {
    let result = super.call(
      "createAdGroup",
      "createAdGroup(address):(address,uint256)",
      [ethereum.Value.fromAddress(recipient)],
    );

    return new CommonAdSpaces__createAdGroupResult(
      result[0].toAddress(),
      result[1].toBigInt(),
    );
  }

  try_createAdGroup(
    recipient: Address,
  ): ethereum.CallResult<CommonAdSpaces__createAdGroupResult> {
    let result = super.tryCall(
      "createAdGroup",
      "createAdGroup(address):(address,uint256)",
      [ethereum.Value.fromAddress(recipient)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CommonAdSpaces__createAdGroupResult(
        value[0].toAddress(),
        value[1].toBigInt(),
      ),
    );
  }

  createAdGroup1(
    recipient: Address,
    initialAdSpaceConfig: CommonAdSpaces__createAdGroup1InputInitialAdSpaceConfigStruct,
    size: BigInt,
  ): CommonAdSpaces__createAdGroup1Result {
    let result = super.call(
      "createAdGroup",
      "createAdGroup(address,(address,uint256,uint256),uint256):(address,uint256)",
      [
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromTuple(initialAdSpaceConfig),
        ethereum.Value.fromUnsignedBigInt(size),
      ],
    );

    return new CommonAdSpaces__createAdGroup1Result(
      result[0].toAddress(),
      result[1].toBigInt(),
    );
  }

  try_createAdGroup1(
    recipient: Address,
    initialAdSpaceConfig: CommonAdSpaces__createAdGroup1InputInitialAdSpaceConfigStruct,
    size: BigInt,
  ): ethereum.CallResult<CommonAdSpaces__createAdGroup1Result> {
    let result = super.tryCall(
      "createAdGroup",
      "createAdGroup(address,(address,uint256,uint256),uint256):(address,uint256)",
      [
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromTuple(initialAdSpaceConfig),
        ethereum.Value.fromUnsignedBigInt(size),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CommonAdSpaces__createAdGroup1Result(
        value[0].toAddress(),
        value[1].toBigInt(),
      ),
    );
  }

  getAdUri(adId: BigInt): string {
    let result = super.call("getAdUri", "getAdUri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(adId),
    ]);

    return result[0].toString();
  }

  try_getAdUri(adId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("getAdUri", "getAdUri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(adId),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId),
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTokenX(underlying: Address): Address {
    let result = super.call("getTokenX", "getTokenX(address):(address)", [
      ethereum.Value.fromAddress(underlying),
    ]);

    return result[0].toAddress();
  }

  try_getTokenX(underlying: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("getTokenX", "getTokenX(address):(address)", [
      ethereum.Value.fromAddress(underlying),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(param0: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(operator),
      ],
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    param0: Address,
    operator: Address,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(operator),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId),
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  placeholderURI(): string {
    let result = super.call("placeholderURI", "placeholderURI():(string)", []);

    return result[0].toString();
  }

  try_placeholderURI(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "placeholderURI",
      "placeholderURI():(string)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  proxiableUUID(): Bytes {
    let result = super.call("proxiableUUID", "proxiableUUID():(bytes32)", []);

    return result[0].toBytes();
  }

  try_proxiableUUID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "proxiableUUID",
      "proxiableUUID():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  royaltyInfo(
    tokenId: BigInt,
    salePrice: BigInt,
  ): CommonAdSpaces__royaltyInfoResult {
    let result = super.call(
      "royaltyInfo",
      "royaltyInfo(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(salePrice),
      ],
    );

    return new CommonAdSpaces__royaltyInfoResult(
      result[0].toAddress(),
      result[1].toBigInt(),
    );
  }

  try_royaltyInfo(
    tokenId: BigInt,
    salePrice: BigInt,
  ): ethereum.CallResult<CommonAdSpaces__royaltyInfoResult> {
    let result = super.tryCall(
      "royaltyInfo",
      "royaltyInfo(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(salePrice),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CommonAdSpaces__royaltyInfoResult(
        value[0].toAddress(),
        value[1].toBigInt(),
      ),
    );
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)],
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(param0: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);

    return result[0].toString();
  }

  try_tokenURI(param0: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenXs(param0: Address): Address {
    let result = super.call("tokenXs", "tokenXs(address):(address)", [
      ethereum.Value.fromAddress(param0),
    ]);

    return result[0].toAddress();
  }

  try_tokenXs(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("tokenXs", "tokenXs(address):(address)", [
      ethereum.Value.fromAddress(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class CreateAdGroupCall extends ethereum.Call {
  get inputs(): CreateAdGroupCall__Inputs {
    return new CreateAdGroupCall__Inputs(this);
  }

  get outputs(): CreateAdGroupCall__Outputs {
    return new CreateAdGroupCall__Outputs(this);
  }
}

export class CreateAdGroupCall__Inputs {
  _call: CreateAdGroupCall;

  constructor(call: CreateAdGroupCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class CreateAdGroupCall__Outputs {
  _call: CreateAdGroupCall;

  constructor(call: CreateAdGroupCall) {
    this._call = call;
  }

  get adGroupAdmin(): Address {
    return this._call.outputValues[0].value.toAddress();
  }

  get adGroupId(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class CreateAdGroup1Call extends ethereum.Call {
  get inputs(): CreateAdGroup1Call__Inputs {
    return new CreateAdGroup1Call__Inputs(this);
  }

  get outputs(): CreateAdGroup1Call__Outputs {
    return new CreateAdGroup1Call__Outputs(this);
  }
}

export class CreateAdGroup1Call__Inputs {
  _call: CreateAdGroup1Call;

  constructor(call: CreateAdGroup1Call) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get initialAdSpaceConfig(): CreateAdGroup1CallInitialAdSpaceConfigStruct {
    return changetype<CreateAdGroup1CallInitialAdSpaceConfigStruct>(
      this._call.inputValues[1].value.toTuple(),
    );
  }

  get size(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreateAdGroup1Call__Outputs {
  _call: CreateAdGroup1Call;

  constructor(call: CreateAdGroup1Call) {
    this._call = call;
  }

  get adGroupAdmin(): Address {
    return this._call.outputValues[0].value.toAddress();
  }

  get adGroupId(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class CreateAdGroup1CallInitialAdSpaceConfigStruct extends ethereum.Tuple {
  get currency(): Address {
    return this[0].toAddress();
  }

  get initialPrice(): BigInt {
    return this[1].toBigInt();
  }

  get taxRate(): BigInt {
    return this[2].toBigInt();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _marketplace(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _adGroupAdminFactory(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _placeholderURI(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class OpenAdSpacesCall extends ethereum.Call {
  get inputs(): OpenAdSpacesCall__Inputs {
    return new OpenAdSpacesCall__Inputs(this);
  }

  get outputs(): OpenAdSpacesCall__Outputs {
    return new OpenAdSpacesCall__Outputs(this);
  }
}

export class OpenAdSpacesCall__Inputs {
  _call: OpenAdSpacesCall;

  constructor(call: OpenAdSpacesCall) {
    this._call = call;
  }

  get adGroupId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get initialAdSpaceConfig(): OpenAdSpacesCallInitialAdSpaceConfigStruct {
    return changetype<OpenAdSpacesCallInitialAdSpaceConfigStruct>(
      this._call.inputValues[1].value.toTuple(),
    );
  }

  get numberOfAdSpaces(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class OpenAdSpacesCall__Outputs {
  _call: OpenAdSpacesCall;

  constructor(call: OpenAdSpacesCall) {
    this._call = call;
  }
}

export class OpenAdSpacesCallInitialAdSpaceConfigStruct extends ethereum.Tuple {
  get currency(): Address {
    return this[0].toAddress();
  }

  get initialPrice(): BigInt {
    return this[1].toBigInt();
  }

  get taxRate(): BigInt {
    return this[2].toBigInt();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetTokenURICall extends ethereum.Call {
  get inputs(): SetTokenURICall__Inputs {
    return new SetTokenURICall__Inputs(this);
  }

  get outputs(): SetTokenURICall__Outputs {
    return new SetTokenURICall__Outputs(this);
  }
}

export class SetTokenURICall__Inputs {
  _call: SetTokenURICall;

  constructor(call: SetTokenURICall) {
    this._call = call;
  }

  get uri(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetTokenURICall__Outputs {
  _call: SetTokenURICall;

  constructor(call: SetTokenURICall) {
    this._call = call;
  }
}

export class SetTokenXCall extends ethereum.Call {
  get inputs(): SetTokenXCall__Inputs {
    return new SetTokenXCall__Inputs(this);
  }

  get outputs(): SetTokenXCall__Outputs {
    return new SetTokenXCall__Outputs(this);
  }
}

export class SetTokenXCall__Inputs {
  _call: SetTokenXCall;

  constructor(call: SetTokenXCall) {
    this._call = call;
  }

  get underlyingToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get superToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetTokenXCall__Outputs {
  _call: SetTokenXCall;

  constructor(call: SetTokenXCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateAdStrategyCall extends ethereum.Call {
  get inputs(): UpdateAdStrategyCall__Inputs {
    return new UpdateAdStrategyCall__Inputs(this);
  }

  get outputs(): UpdateAdStrategyCall__Outputs {
    return new UpdateAdStrategyCall__Outputs(this);
  }
}

export class UpdateAdStrategyCall__Inputs {
  _call: UpdateAdStrategyCall;

  constructor(call: UpdateAdStrategyCall) {
    this._call = call;
  }

  get adId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get strategy(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UpdateAdStrategyCall__Outputs {
  _call: UpdateAdStrategyCall;

  constructor(call: UpdateAdStrategyCall) {
    this._call = call;
  }
}

export class UpdateAdURICall extends ethereum.Call {
  get inputs(): UpdateAdURICall__Inputs {
    return new UpdateAdURICall__Inputs(this);
  }

  get outputs(): UpdateAdURICall__Outputs {
    return new UpdateAdURICall__Outputs(this);
  }
}

export class UpdateAdURICall__Inputs {
  _call: UpdateAdURICall;

  constructor(call: UpdateAdURICall) {
    this._call = call;
  }

  get adId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get adURI(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class UpdateAdURICall__Outputs {
  _call: UpdateAdURICall;

  constructor(call: UpdateAdURICall) {
    this._call = call;
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}
