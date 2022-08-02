//import ReactDOM from "react-dom/client";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Web3 from 'web3'
import { newKitFromWeb3 } from '@celo/contractkit'
import BigNumber from "bignumber.js"
import { Modal, Button } from 'react-bootstrap';

import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Navbar from "./components/Navbar";

const ERC20_DECIMALS = 18;
const contractAddress = "0x57Eb98688DE082a3d542F1a09d431477c74227f5";
const cUSDContractAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";

var kit;
var contract;


function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [connectedAddress, setConnectedAddress] = useState("");
  const [userBalance, setUserBalance] = useState(0.0);


  const connectWallet = async () => {
    if (window.celo) {
      console.log("Please approve this dapp to use it");
      try {
        await window.celo.enable();
        const web3 = new Web3(window.celo);
        kit = newKitFromWeb3(web3);
        const accounts = await kit.web3.eth.getAccounts();
        kit.defaultAccount = accounts[0];
        setConnectedAddress(accounts[0]);
        const totalBalance = await kit.getTotalBalance(kit.defaultAccount)
        const cUSDBalance = totalBalance.cUSD.shiftedBy(-ERC20_DECIMALS).toFixed(2)

      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Install Celo Extension wallet");
    }

    setWalletConnected(true);
    console.log(walletConnected);
  }
  

  return (
    <Router>
    <div className="App">
      {connectedAddress}
      {totalBalance}
      <Navbar />

      <Modal show={!walletConnected} onClick={() => connectWallet()} style={{ backdropFilter: "blur(20px)" }} size="sm" centered>
          <Button variant='light'>
            <div className='text-center'>
              connect wallet
            
            </div>
          </Button>
        </Modal>

      <Routes>

      <Route ex path="/" element={<Home/>}></Route>
      <Route ex path="/events" element={<Events/>}></Route>
      <Route ex path="/about" element={<About/>}></Route>

      </Routes>
      {/* <Home/>
      <Events/>
      <About/> */}
      

    </div>
    </Router>
  );
}

export default App;
