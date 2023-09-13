// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ClientResponse, ClientResponseT } from '../host-response/client-response.js';


export class UserInputRequest implements flatbuffers.IUnpackableObject<UserInputRequestT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):UserInputRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsUserInputRequest(bb:flatbuffers.ByteBuffer, obj?:UserInputRequest):UserInputRequest {
  return (obj || new UserInputRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsUserInputRequest(bb:flatbuffers.ByteBuffer, obj?:UserInputRequest):UserInputRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new UserInputRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

requestId():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

message(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

messageLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

messageArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

responses(index: number, obj?:ClientResponse):ClientResponse|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new ClientResponse()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

responsesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startUserInputRequest(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addRequestId(builder:flatbuffers.Builder, requestId:number) {
  builder.addFieldInt32(0, requestId, 0);
}

static addMessage(builder:flatbuffers.Builder, messageOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, messageOffset, 0);
}

static createMessageVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startMessageVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static addResponses(builder:flatbuffers.Builder, responsesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, responsesOffset, 0);
}

static createResponsesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startResponsesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endUserInputRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 6) // message
  builder.requiredField(offset, 8) // responses
  return offset;
}

static createUserInputRequest(builder:flatbuffers.Builder, requestId:number, messageOffset:flatbuffers.Offset, responsesOffset:flatbuffers.Offset):flatbuffers.Offset {
  UserInputRequest.startUserInputRequest(builder);
  UserInputRequest.addRequestId(builder, requestId);
  UserInputRequest.addMessage(builder, messageOffset);
  UserInputRequest.addResponses(builder, responsesOffset);
  return UserInputRequest.endUserInputRequest(builder);
}

unpack(): UserInputRequestT {
  return new UserInputRequestT(
    this.requestId(),
    this.bb!.createScalarList<number>(this.message.bind(this), this.messageLength()),
    this.bb!.createObjList<ClientResponse, ClientResponseT>(this.responses.bind(this), this.responsesLength())
  );
}


unpackTo(_o: UserInputRequestT): void {
  _o.requestId = this.requestId();
  _o.message = this.bb!.createScalarList<number>(this.message.bind(this), this.messageLength());
  _o.responses = this.bb!.createObjList<ClientResponse, ClientResponseT>(this.responses.bind(this), this.responsesLength());
}
}

export class UserInputRequestT implements flatbuffers.IGeneratedObject {
constructor(
  public requestId: number = 0,
  public message: (number)[] = [],
  public responses: (ClientResponseT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const message = UserInputRequest.createMessageVector(builder, this.message);
  const responses = UserInputRequest.createResponsesVector(builder, builder.createObjectOffsetList(this.responses));

  return UserInputRequest.createUserInputRequest(builder,
    this.requestId,
    message,
    responses
  );
}
}
