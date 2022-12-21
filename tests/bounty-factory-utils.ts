import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ClaimBounty,
  CreateBounty,
  OwnershipTransferred
} from "../generated/BountyFactory/BountyFactory"

export function createClaimBountyEvent(
  id: BigInt,
  owner: Address,
  name: string,
  price: BigInt,
  status: boolean
): ClaimBounty {
  let claimBountyEvent = changetype<ClaimBounty>(newMockEvent())

  claimBountyEvent.parameters = new Array()

  claimBountyEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  claimBountyEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  claimBountyEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  claimBountyEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  claimBountyEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return claimBountyEvent
}

export function createCreateBountyEvent(
  id: BigInt,
  name: string,
  price: BigInt,
  status: boolean
): CreateBounty {
  let createBountyEvent = changetype<CreateBounty>(newMockEvent())

  createBountyEvent.parameters = new Array()

  createBountyEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  createBountyEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  createBountyEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  createBountyEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return createBountyEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
