import React, { useEffect, useState } from 'react'
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Fortmatic from 'fortmatic';
import WebFont from "webfontloader";

import {
  Container,
  HeroContainer,
  HeroLeftContainer,
  Button,
  MintButtonContainer,
  MainContentContainer,
  ContentWrapper,
  BottomTextContainer
} from './styles'


interface webmodal {
  cacheProvider: Boolean, // optional
  providerOptions: Object,
  disableInjectedProvider: Boolean, 
}
export const Minting = () => {
  let [provider, setProvider] = useState(null);
  const [web3, setWeb3] = useState(0);
  const [web3Modal, setWeb3Modal] = useState<webmodal>({cacheProvider: false, providerOptions: new Object(), disableInjectedProvider: false});

  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)
  useEffect(() => {
    init(),
    WebFont.load({
      google: {
        families: [
          "Butcherman",
          "Fuzzy Bubbles",
          "Slackey",
          "Lobster",
          "Secular One",
          "VT323",
          "Press Start 2P",
        ],
      },
    }
  });

  async function init() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          // Mikko's test key - don't copy as your mileage may vary
          // infuraId: "3f88fa504c1d4ec1bec07966779f1ce0",
          rpc: {
            56: 'https://bsc-dataseed.binance.org/'
          },
          network:'binance'
        }
      },
  
      fortmatic: {
        package: Fortmatic,
        options: {
          // Mikko's TESTNET api key
          key: "pk_test_391E26A3B43A3350"
        }
      },
      
      "custom-binancechainwallet": {
        display: {
          logo: "assets/images/binance-logo.svg",
          name: "Binance Chain Wallet",
          description: "Connect to your Binance Chain Wallet"
        },
        package: true,
        connector: async () => {
          let provider = null;
          if (typeof window.BinanceChain !== 'undefined') {
            provider = window.BinanceChain;
            try {
              await provider.request({ method: 'eth_requestAccounts' })
            } catch (error) {
              throw new Error("User Rejected");
            }
          } else {
            throw new Error("No Binance Chain Wallet found");
          }
          return provider;
        }
      }
    };
    let web3_Modal = new Web3Modal({
      cacheProvider: false, // optional
      providerOptions, // required
      disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });
    setWeb3Modal(web3_Modal);
  }

  async function onConnect() {
    try {
      provider = await web3Modal.connect();
    } catch(e) {
      console.log("Could not get a wallet connection", e);
      return;
    }
    setProvider(provider);
    console.log('provider accounts changed')
    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
      fetchAccountData();
    });
    console.log('provider chain changed')
    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
      fetchAccountData();
    });
    console.log('provider network changed')
    // Subscribe to networkId change
    provider.on("networkChanged", (networkId) => {
      fetchAccountData();
    });
  
    await refreshAccountData();
  }

  return (
    <Container bgimage='/assets/images/minting-background.png' >
      <HeroContainer style={{fontFamily: 'VT323'}}>
        <div>
          <MintButtonContainer>
            <div className='image-container'>
              <img src='/assets/images/minting-1.png' alt='' />
              <img src='/assets/images/minting-2.png' alt='' />
              <img src='/assets/images/minting-3.png' alt='' />
              <img src='/assets/images/minting-4.png' alt='' />
              <div>
                <img src='/assets/images/cat_shiluette.png' alt='' />
                <img src='/assets/images/question.png' alt='' />
              </div>
            </div>
            <Button style={{fontFamily: 'VT323'}} onClick={() => { onConnect() }}>
              Mint
            </Button>
          </MintButtonContainer>
          <p>Max 20 per stansaction.Need more? Just repeat</p>
          <h2>230<span>/3000 Sold</span></h2>
        </div>
        <HeroLeftContainer>
          <div>
            <h2>Price</h2>
            <div>
              <span>0.05</span>
              <span> + </span>
              <span>gas fee</span>
            </div>
          </div>
          <div>
            <h2>Remining TVPunks</h2>
            <div>
              <span>2391</span>
            </div>
          </div>
        </HeroLeftContainer>
      </HeroContainer>
      <MainContentContainer style={{fontFamily: 'VT323'}}>
        <h1>HOW TO MINT</h1>
        <ContentWrapper>
          <div>
            <div>
              <img src='/assets/images/dot.png' alt='' />
              <p>Join our Discord</p>
            </div>
            <div>
              <img src='/assets/images/dot.png' alt='' />
              <p>When the sale starts, you will see a “Connect Wallet” button at the top of our website. Connect your Phantom, Sollet or Solflare wallet.</p>
            </div>
            <div>
              <img src='/assets/images/dot.png' alt='' />
              <p>When your wallet is successfully connected, “Connect Wallet” button will change to the “Mint” button. Click “Mint” button. Please make sure that you have enough SOL on your wallet balance.</p>
            </div>
            <div>
              <img src='/assets/images/dot.png' alt='' />
              <p>Approve transaction and wait a bit until it wiil be confirmed.</p>
            </div>
            <div>
              <img src='/assets/images/dot.png' alt='' />
              <p>Congratulations! You can find your Shiba Family collectibles by clicking “Your Collectibles” in Phantom Wallet.</p>
            </div>
          </div>
          <div>
            <img src='/assets/images/SolKittie_0094.png' alt='' />
          </div>
        </ContentWrapper>
      </MainContentContainer>
      <BottomTextContainer style={{fontFamily: 'VT323'}}>
        <p>Share your NFT in Twitter, Discord and other social networks. Don’t forget to add tags:</p>
        <p>#SolTVPunks #NFT #SOL</p>
      </BottomTextContainer>
    </Container>
  )
}
