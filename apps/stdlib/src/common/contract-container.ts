// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ContractType, unionToContractType, unionListToContractType } from '../common/contract-type.js';
import { WasmContractV1, WasmContractV1T } from '../common/wasm-contract-v1.js';


export class ContractContainer implements flatbuffers.IUnpackableObject<ContractContainerT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ContractContainer {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsContractContainer(bb:flatbuffers.ByteBuffer, obj?:ContractContainer):ContractContainer {
  return (obj || new ContractContainer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsContractContainer(bb:flatbuffers.ByteBuffer, obj?:ContractContainer):ContractContainer {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ContractContainer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

contractType():ContractType {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : ContractType.NONE;
}

contract<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

static startContractContainer(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addContractType(builder:flatbuffers.Builder, contractType:ContractType) {
  builder.addFieldInt8(0, contractType, ContractType.NONE);
}

static addContract(builder:flatbuffers.Builder, contractOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, contractOffset, 0);
}

static endContractContainer(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 6) // contract
  return offset;
}

static createContractContainer(builder:flatbuffers.Builder, contractType:ContractType, contractOffset:flatbuffers.Offset):flatbuffers.Offset {
  ContractContainer.startContractContainer(builder);
  ContractContainer.addContractType(builder, contractType);
  ContractContainer.addContract(builder, contractOffset);
  return ContractContainer.endContractContainer(builder);
}

unpack(): ContractContainerT {
  return new ContractContainerT(
    this.contractType(),
    (() => {
      const temp = unionToContractType(this.contractType(), this.contract.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })()
  );
}


unpackTo(_o: ContractContainerT): void {
  _o.contractType = this.contractType();
  _o.contract = (() => {
      const temp = unionToContractType(this.contractType(), this.contract.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })();
}
}

export class ContractContainerT implements flatbuffers.IGeneratedObject {
constructor(
  public contractType: ContractType = ContractType.NONE,
  public contract: WasmContractV1T|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const contract = builder.createObjectOffset(this.contract);

  return ContractContainer.createContractContainer(builder,
    this.contractType,
    contract
  );
}
}
