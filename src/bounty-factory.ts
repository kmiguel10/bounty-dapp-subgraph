import {
  ClaimBounty as ClaimBountyEvent,
  CreateBounty as CreateBountyEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/BountyFactory/BountyFactory"
import {
  ClaimBounty,
  CreateBounty,
  OwnershipTransferred
} from "../generated/schema"

export function handleClaimBounty(event: ClaimBountyEvent): void {
  let entity = new ClaimBounty(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.id = event.params.id
  entity.owner = event.params.owner
  entity.name = event.params.name
  entity.price = event.params.price
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreateBounty(event: CreateBountyEvent): void {
  let entity = new CreateBounty(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.id = event.params.id
  entity.name = event.params.name
  entity.price = event.params.price
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
