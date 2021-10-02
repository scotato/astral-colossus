/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IDarkForestCoreInterface extends ethers.utils.Interface {
  functions: {
    "findArtifact(uint256[2],uint256[2][2],uint256[2],uint256[7])": FunctionFragment;
    "initializePlayer(uint256[2],uint256[2][2],uint256[2],uint256[8])": FunctionFragment;
    "planetArtifacts(uint256)": FunctionFragment;
    "planets(uint256)": FunctionFragment;
    "refreshPlanet(uint256)": FunctionFragment;
    "transferOwnership(uint256,address)": FunctionFragment;
    "withdrawSilver(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "findArtifact",
    values: [
      [BigNumberish, BigNumberish],
      [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      [BigNumberish, BigNumberish],
      [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initializePlayer",
    values: [
      [BigNumberish, BigNumberish],
      [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      [BigNumberish, BigNumberish],
      [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "planetArtifacts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "planets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "refreshPlanet",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawSilver",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "findArtifact",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializePlayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "planetArtifacts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "planets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "refreshPlanet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawSilver",
    data: BytesLike
  ): Result;

  events: {};
}

export class IDarkForestCore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IDarkForestCoreInterface;

  functions: {
    findArtifact(
      _a: [BigNumberish, BigNumberish],
      _b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      _c: [BigNumberish, BigNumberish],
      _input: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializePlayer(
      _a: [BigNumberish, BigNumberish],
      _b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      _c: [BigNumberish, BigNumberish],
      _input: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    planetArtifacts(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    planets(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          number,
          boolean
        ] & {
          owner: string;
          range: BigNumber;
          speed: BigNumber;
          defense: BigNumber;
          population: BigNumber;
          populationCap: BigNumber;
          populationGrowth: BigNumber;
          silverCap: BigNumber;
          silverGrowth: BigNumber;
          silver: BigNumber;
          planetLevel: BigNumber;
          planetType: number;
          isHomePlanet: boolean;
        }
      ]
    >;

    refreshPlanet(
      location: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      _location: BigNumberish,
      _player: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawSilver(
      locationId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  findArtifact(
    _a: [BigNumberish, BigNumberish],
    _b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
    _c: [BigNumberish, BigNumberish],
    _input: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializePlayer(
    _a: [BigNumberish, BigNumberish],
    _b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
    _c: [BigNumberish, BigNumberish],
    _input: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  planetArtifacts(
    key: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  planets(
    key: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      boolean
    ] & {
      owner: string;
      range: BigNumber;
      speed: BigNumber;
      defense: BigNumber;
      population: BigNumber;
      populationCap: BigNumber;
      populationGrowth: BigNumber;
      silverCap: BigNumber;
      silverGrowth: BigNumber;
      silver: BigNumber;
      planetLevel: BigNumber;
      planetType: number;
      isHomePlanet: boolean;
    }
  >;

  refreshPlanet(
    location: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    _location: BigNumberish,
    _player: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawSilver(
    locationId: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    findArtifact(
      _a: [BigNumberish, BigNumberish],
      _b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      _c: [BigNumberish, BigNumberish],
      _input: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<void>;

    initializePlayer(
      _a: [BigNumberish, BigNumberish],
      _b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      _c: [BigNumberish, BigNumberish],
      _input: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    planetArtifacts(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    planets(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
      ] & {
        owner: string;
        range: BigNumber;
        speed: BigNumber;
        defense: BigNumber;
        population: BigNumber;
        populationCap: BigNumber;
        populationGrowth: BigNumber;
        silverCap: BigNumber;
        silverGrowth: BigNumber;
        silver: BigNumber;
        planetLevel: BigNumber;
        planetType: number;
        isHomePlanet: boolean;
      }
    >;

    refreshPlanet(
      location: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      _location: BigNumberish,
      _player: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawSilver(
      locationId: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    findArtifact(
      _a: [BigNumberish, BigNumberish],
      _b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      _c: [BigNumberish, BigNumberish],
      _input: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializePlayer(
      _a: [BigNumberish, BigNumberish],
      _b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      _c: [BigNumberish, BigNumberish],
      _input: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    planetArtifacts(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    planets(key: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    refreshPlanet(
      location: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      _location: BigNumberish,
      _player: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawSilver(
      locationId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    findArtifact(
      _a: [BigNumberish, BigNumberish],
      _b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      _c: [BigNumberish, BigNumberish],
      _input: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializePlayer(
      _a: [BigNumberish, BigNumberish],
      _b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      _c: [BigNumberish, BigNumberish],
      _input: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    planetArtifacts(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    planets(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    refreshPlanet(
      location: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      _location: BigNumberish,
      _player: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawSilver(
      locationId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}