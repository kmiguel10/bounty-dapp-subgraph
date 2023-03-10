// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ClaimBounty extends ethereum.Event {
  get params(): ClaimBounty__Params {
    return new ClaimBounty__Params(this);
  }
}

export class ClaimBounty__Params {
  _event: ClaimBounty;

  constructor(event: ClaimBounty) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get name(): string {
    return this._event.parameters[2].value.toString();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get status(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }
}

export class CreateBounty extends ethereum.Event {
  get params(): CreateBounty__Params {
    return new CreateBounty__Params(this);
  }
}

export class CreateBounty__Params {
  _event: CreateBounty;

  constructor(event: CreateBounty) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get status(): boolean {
    return this._event.parameters[3].value.toBoolean();
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

export class BountyFactory__bountiesResult {
  value0: BigInt;
  value1: string;
  value2: Address;
  value3: BigInt;
  value4: boolean;
  value5: BigInt;

  constructor(
    value0: BigInt,
    value1: string,
    value2: Address,
    value3: BigInt,
    value4: boolean,
    value5: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    return map;
  }

  getId(): BigInt {
    return this.value0;
  }

  getTitle(): string {
    return this.value1;
  }

  getOwner(): Address {
    return this.value2;
  }

  getPrize(): BigInt {
    return this.value3;
  }

  getStatus(): boolean {
    return this.value4;
  }

  getKey(): BigInt {
    return this.value5;
  }
}

export class BountyFactory__getBountyHunterToBountiesResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get title(): string {
    return this[1].toString();
  }

  get owner(): Address {
    return this[2].toAddress();
  }

  get prize(): BigInt {
    return this[3].toBigInt();
  }

  get status(): boolean {
    return this[4].toBoolean();
  }

  get key(): BigInt {
    return this[5].toBigInt();
  }
}

export class BountyFactory__getBountyWithIdResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get title(): string {
    return this[1].toString();
  }

  get owner(): Address {
    return this[2].toAddress();
  }

  get prize(): BigInt {
    return this[3].toBigInt();
  }

  get status(): boolean {
    return this[4].toBoolean();
  }

  get key(): BigInt {
    return this[5].toBigInt();
  }
}

export class BountyFactory extends ethereum.SmartContract {
  static bind(address: Address): BountyFactory {
    return new BountyFactory("BountyFactory", address);
  }

  bounties(param0: BigInt): BountyFactory__bountiesResult {
    let result = super.call(
      "bounties",
      "bounties(uint256):(uint256,string,address,uint256,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new BountyFactory__bountiesResult(
      result[0].toBigInt(),
      result[1].toString(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBoolean(),
      result[5].toBigInt()
    );
  }

  try_bounties(
    param0: BigInt
  ): ethereum.CallResult<BountyFactory__bountiesResult> {
    let result = super.tryCall(
      "bounties",
      "bounties(uint256):(uint256,string,address,uint256,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new BountyFactory__bountiesResult(
        value[0].toBigInt(),
        value[1].toString(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBoolean(),
        value[5].toBigInt()
      )
    );
  }

  getBountyHunterToBounties(
    _bountyOwner: Address,
    _bountyId: BigInt
  ): BountyFactory__getBountyHunterToBountiesResultValue0Struct {
    let result = super.call(
      "getBountyHunterToBounties",
      "getBountyHunterToBounties(address,uint256):((uint256,string,address,uint256,bool,uint256))",
      [
        ethereum.Value.fromAddress(_bountyOwner),
        ethereum.Value.fromUnsignedBigInt(_bountyId)
      ]
    );

    return changetype<
      BountyFactory__getBountyHunterToBountiesResultValue0Struct
    >(result[0].toTuple());
  }

  try_getBountyHunterToBounties(
    _bountyOwner: Address,
    _bountyId: BigInt
  ): ethereum.CallResult<
    BountyFactory__getBountyHunterToBountiesResultValue0Struct
  > {
    let result = super.tryCall(
      "getBountyHunterToBounties",
      "getBountyHunterToBounties(address,uint256):((uint256,string,address,uint256,bool,uint256))",
      [
        ethereum.Value.fromAddress(_bountyOwner),
        ethereum.Value.fromUnsignedBigInt(_bountyId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<BountyFactory__getBountyHunterToBountiesResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getBountyWithId(
    _id: BigInt
  ): BountyFactory__getBountyWithIdResultValue0Struct {
    let result = super.call(
      "getBountyWithId",
      "getBountyWithId(uint256):((uint256,string,address,uint256,bool,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );

    return changetype<BountyFactory__getBountyWithIdResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getBountyWithId(
    _id: BigInt
  ): ethereum.CallResult<BountyFactory__getBountyWithIdResultValue0Struct> {
    let result = super.tryCall(
      "getBountyWithId",
      "getBountyWithId(uint256):((uint256,string,address,uint256,bool,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<BountyFactory__getBountyWithIdResultValue0Struct>(
        value[0].toTuple()
      )
    );
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
}

export class ClaimBountyCall extends ethereum.Call {
  get inputs(): ClaimBountyCall__Inputs {
    return new ClaimBountyCall__Inputs(this);
  }

  get outputs(): ClaimBountyCall__Outputs {
    return new ClaimBountyCall__Outputs(this);
  }
}

export class ClaimBountyCall__Inputs {
  _call: ClaimBountyCall;

  constructor(call: ClaimBountyCall) {
    this._call = call;
  }

  get _bountyId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _secretKey(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ClaimBountyCall__Outputs {
  _call: ClaimBountyCall;

  constructor(call: ClaimBountyCall) {
    this._call = call;
  }
}

export class PostBountyCall extends ethereum.Call {
  get inputs(): PostBountyCall__Inputs {
    return new PostBountyCall__Inputs(this);
  }

  get outputs(): PostBountyCall__Outputs {
    return new PostBountyCall__Outputs(this);
  }
}

export class PostBountyCall__Inputs {
  _call: PostBountyCall;

  constructor(call: PostBountyCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class PostBountyCall__Outputs {
  _call: PostBountyCall;

  constructor(call: PostBountyCall) {
    this._call = call;
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
