// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class GetContract {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):GetContract {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsGetContract(bb:flatbuffers.ByteBuffer, obj?:GetContract):GetContract {
  return (obj || new GetContract()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsGetContract(bb:flatbuffers.ByteBuffer, obj?:GetContract):GetContract {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new GetContract()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

requester():string|null
requester(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
requester(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

transaction():string|null
transaction(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
transaction(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

key():string|null
key(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
key(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

contractLocation():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

static startGetContract(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addRequester(builder:flatbuffers.Builder, requesterOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, requesterOffset, 0);
}

static addTransaction(builder:flatbuffers.Builder, transactionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, transactionOffset, 0);
}

static addKey(builder:flatbuffers.Builder, keyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, keyOffset, 0);
}

static addContractLocation(builder:flatbuffers.Builder, contractLocation:number) {
  builder.addFieldFloat64(3, contractLocation, 0.0);
}

static endGetContract(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 4) // requester
  builder.requiredField(offset, 6) // transaction
  builder.requiredField(offset, 8) // key
  return offset;
}

static createGetContract(builder:flatbuffers.Builder, requesterOffset:flatbuffers.Offset, transactionOffset:flatbuffers.Offset, keyOffset:flatbuffers.Offset, contractLocation:number):flatbuffers.Offset {
  GetContract.startGetContract(builder);
  GetContract.addRequester(builder, requesterOffset);
  GetContract.addTransaction(builder, transactionOffset);
  GetContract.addKey(builder, keyOffset);
  GetContract.addContractLocation(builder, contractLocation);
  return GetContract.endGetContract(builder);
}
}