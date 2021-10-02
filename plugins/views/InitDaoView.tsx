import { h, JSX } from "preact";

import { useEffect, useState, useLayoutEffect, useReducer, useCallback } from "preact/hooks";
import { LocatablePlanet, LocationId, Planet, PlanetType } from "@darkforest_eth/types";
import * as ethers from 'ethers';
// import { Wallet } from 'ethers'; 
import { useWallet } from "../lib/flashbots";
import { DarkForestCore, DarkForestGetters, Whitelist } from '@darkforest_eth/contracts/typechain';
import { getDaoContract, getCoreContract, usePlanetName, getPlanetName, useSelectedPlanet, useCoreContract } from "../lib/darkforest";
import DAO_ABI from "../abis/DaoAbi.json";
import { DaoContractPlayer } from '../../typechain'

import { WHITELIST_CONTRACT_ADDRESS } from "@darkforest_eth/contracts"
import WHITELIST_ABI from "@darkforest_eth/contracts/abis/Whitelist.json";




const WEBSERVER_URL = 'https://api.zkga.me';
export function InitDaoView(): JSX.Element {


  const myAddress = '0xe732654bA181fC97A42dC35Cd137CdeE2B17930F';
  const XDAI_URL = 'http://165.227.93.253:8545';

  const provider = new ethers.providers.JsonRpcProvider(XDAI_URL);
  console.log('provider', provider);

  // @ts-expect-error
  const wallet = new ethers.Wallet(df.getPrivateKey(), provider);
  console.log('wallet', wallet);
  // @ts-expect-error
  console.log('rendered here df ui', df, ui);
  const coreContract = useCoreContract();

  const selectedPlanet = useSelectedPlanet();
  const selectedPlanetName = usePlanetName(selectedPlanet);
  // const wallet = useWallet();

  
  const tempAddy = '0x9b25D251D785902e52ee79a328282217C02Bdc76'
  const deployedAddy = '0xc71F6a0d1cB0949804d3cd8700CF9F4CAD2490EB'

  const daoPlayer = new ethers.Contract(deployedAddy, DAO_ABI, wallet) as DaoContractPlayer;
  const whitelist = new ethers.Contract(WHITELIST_CONTRACT_ADDRESS, WHITELIST_ABI, wallet) as Whitelist;
  
  // console.log(`connected to dao Player @ ${daoPlayer.address}`);

  const print = (msg: string) => {
    // @ts-expect-error
    df.terminal.current.println(msg);
  } 

  const init = async () => {
    
    console.log('abi', DAO_ABI);
    // get player's privateKey
    console.log('wallet', wallet);

    console.log(`connected to dao Player @ ${daoPlayer.address}`);
    const balance = await wallet.provider.getBalance(daoPlayer.address)
    console.log('dao balance:', ethers.utils.formatEther(balance));
    
    let locatable: LocatablePlanet;
    // @ts-expect-error
    // locatable = await df.findRandomHomePlanet();
    // const x = locatable.location.coords.x;
    // const y = locatable.location.coords.y;
    const coords = {
        x: 56111,
        y: -85874
    }
    const x = 56111;
    const y = -85874;
    const r = Math.floor(Math.sqrt(x ** 2 + y ** 2)) + 1;
    // const r = df.worldRadius
    // console.log('found location', locatable);

    console.log('making call Args');
    // @ts-expect-error
    const callArgs = await df.snarkHelper.getInitArgs(x,y,r);
    console.log('call Args', callArgs);

    const uInitTx = await daoPlayer.initializePlayer(callArgs[0], callArgs[1], callArgs[2], callArgs[3]);
    // const sTx = await wallet.populateTransaction(uInitTx);
    // // console.log('initTx', uInitTx);
    // console.log('sTx', sTx);
    // const sentTx = await wallet.sendTransaction(uInitTx);
    // console.log('senTx', sentTx);

  };
  const submitWhitelistKey = async (
    key: string,
    address: any
  ): Promise<any | null> => {
    try {
      return await fetch(`${WEBSERVER_URL}/whitelist/register`, {
        method: 'POST',
        body: JSON.stringify({
          key,
          address,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((x) => x.json());
    } catch (e) {
      console.error(`error when registering for whitelist: ${e}`);
      return null;
    }
  };
  async function sleep(timeoutMs: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), timeoutMs);
    });
  }
  async function callRegisterUntilWhitelisted(
    key: string,
    address: EthAddress,
    terminal: React.MutableRefObject<TerminalHandle | undefined>
  ): Promise<string | undefined> {
    while (true) {
      const response = await submitWhitelistKey(key, address);
      if (response?.error) {
        // returning undefined here indicates to the ui that the key was invalid
        return undefined;
      } else if (response !== null && response.success) {
        return response.txHash ?? 'unknown';
      } else {
        console.log('trying again...');
        await sleep(3000);
      }
    }
  }
  const submitWhiteList = async () => {
    // @ts-expect-erro
    // const whitelist = df.contractsAPI.whiteListContract;
    console.log('whitelist', whitelist);


    // const whitelistkey = "TJ0Z2-PRJ0N-XQFSQ-2H9LI-UJM1S"
    // //const whitelistkey = "XXXX-PRJ0N-XQFSQ-2H9LI-UJM1S"

    // // @ts-expect-error
    // const res = await callRegisterUntilWhitelisted(whitelistkey, daoPlayer.address);

    // const isWhitelisted = await whitelist.isWhitelisted(daoPlayer.address);
    // const iIWhitelisted = await whitelist.isWhitelisted(wallet.address);
    // console.log(`${daoPlayer.address} is whitelistd? ${isWhitelisted}`);
    // console.log(`I, ${wallet.address} am whitelistd? ${iIWhitelisted}`);
    console.log('owner?', await daoPlayer.owner());
    
    const p = await coreContract.players(daoPlayer.address);
    console.log(`dao`, p);
    console.log('is initialized?', p.isInitialized);

  }
  let content;
    content = (
      <div>
        <div>
          <span>Init dao.</span>
        </div>
        <div>
          <button onClick={init}>Init Dao</button>
          <button onClick={submitWhiteList}>submit white list</button>
          {/* <button onClick={ownPlanets}>Own Planets</button>
          <button onClick={changeOwnerW}>Own Selected</button>
          <button onClick={getContributions}>check score</button>
          <button onClick={contribute}>contribute</button>
          <button onClick={checkDaoOwnership}>check dao ownership</button> */}
        </div>
      </div>
    );
  return content;
}
