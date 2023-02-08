import { Address, BigInt } from "@graphprotocol/graph-ts/common/numbers";
import {
  ClaimBounty as ClaimBountyEvent,
  CreateBounty as CreateBountyEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/BountyFactory/BountyFactory";
import {
  ClaimBounty,
  CreateBounty,
  ActiveBounty,
  OwnershipTransferred,
} from "../generated/schema";

export function handleClaimBounty(event: ClaimBountyEvent): void {
  let emptyAddress = Address.fromString(
    "0x0000000000000000000000000000000000000000"
  );
  //save that event in our graph
  //update activebounty
  //get or create a claimedBounty object
  //each items needs a unique id

  //ClaimBountyEvent: just the raw event
  //ClaimBountyObject: what we save
  let bountyClaimed = ClaimBounty.load(
    getIdFromEventParams(event.params.id, emptyAddress)
  );

  let activeBounty = ActiveBounty.load(
    getIdFromEventParams(event.params.id, emptyAddress)
  );

  if (!bountyClaimed) {
    bountyClaimed = new ClaimBounty(
      getIdFromEventParams(event.params.id, emptyAddress)
    );
  }

  bountyClaimed.name = event.params.name;
  bountyClaimed.price = event.params.price;
  bountyClaimed.status = event.params.status;
  bountyClaimed.owner = event.params.owner;
  activeBounty!.owner = event.params.owner;

  bountyClaimed.save();
  activeBounty!.save();
}

export function handleCreateBounty(event: CreateBountyEvent): void {
  let emptyAddress = Address.fromString(
    "0x0000000000000000000000000000000000000000"
  );
  let createBounty = CreateBounty.load(
    getIdFromEventParams(event.params.id, emptyAddress)
  );

  let activeBounty = ActiveBounty.load(
    getIdFromEventParams(event.params.id, emptyAddress)
  );
  if (!createBounty) {
    createBounty = new CreateBounty(
      getIdFromEventParams(event.params.id, emptyAddress)
    );
  }
  if (!activeBounty) {
    activeBounty = new ActiveBounty(
      getIdFromEventParams(event.params.id, emptyAddress)
    );
  }

  createBounty.owner = emptyAddress;
  createBounty.name = event.params.name;
  createBounty.price = event.params.price;
  createBounty.status = event.params.status;

  activeBounty.owner = emptyAddress;
  activeBounty.name = event.params.name;
  activeBounty.price = event.params.price;

  createBounty.save();
  activeBounty!.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

function getIdFromEventParams(tokenId: BigInt, ownerAddress: Address): string {
  return tokenId.toHexString() + ownerAddress.toHexString();
}
