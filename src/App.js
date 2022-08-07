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
import { createEvent } from '@testing-library/react';

const ERC20_DECIMALS = 18;
const contractAddress = "0x57Eb98688DE082a3d542F1a09d431477c74227f5";
const cUSDContractAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";

var kit;
var contract;


function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [connectedAddress, setConnectedAddress] = useState("");
  const [userBalance, setUserBalance] = useState(0);


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

        await getBalance();

      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Install Celo Extension wallet");
    }
    // await getBalance();
    setWalletConnected(true);
    console.log(walletConnected);
  }

  const checkWalletConnected = async () => {
    if (window.celo) {
      try {
        const web3 = new Web3(window.celo);
        kit = newKitFromWeb3(web3);
        const accounts = await kit.web3.eth.getAccounts();
        kit.defaultAccount = accounts[0];
        setConnectedAddress(accounts[0]);
       
        await getBalance();
        setWalletConnected(true);
      } catch (error) {
        console.log(error);
 
      }

    }
  }

  const createEvent = async() => {
     console.log("create called")
  }

  const buyTicket = async(id) => {
     console.log("ticket called")
  }

  const getBalance = async () => {
    const totalBalance = await kit.getTotalBalance(kit.defaultAccount);
    console.log(totalBalance);
    const cUSDBalance = totalBalance.cUSD.shiftedBy(-ERC20_DECIMALS).toFixed(2);
    setUserBalance(cUSDBalance);
  }

  useEffect(() => {
    connectWallet()
  },[])

  useEffect(() => {
    checkWalletConnected()
  },[connectedAddress,])
  

  return (
    <Router>
    <div className="App">
      {connectedAddress}
      {userBalance}
      <Navbar balance={userBalance} />

      <Routes>

      <Route ex path="/" element={<Home/>}></Route>
      <Route ex path="/events" element={<Events createEvent={createEvent} buyTicket={buyTicket}/>}></Route>
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
