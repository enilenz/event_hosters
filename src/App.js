//import ReactDOM from "react-dom/client";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Web3 from 'web3'
import { newKitFromWeb3 } from '@celo/contractkit'
import BigNumber from "bignumber.js"
import { Modal, Button } from 'react-bootstrap';

import Home from './components/Home';
import Events from './components/Events';
import Navbar from "./components/Navbar";
import Menu from './components/Menu';
import contractABI from './eventhosters.abi.json';
import erc20ABI from './erc20.abi.json';

//0x107350153bC32eF19353e30eB8d0e946c10b3719
//0x5159E40EFe68CF76D416773596957240b967f0E7
const ERC20_DECIMALS = 18;
const contractAddress = "0xdB6791f5bA4d5305D0FcCA3C91860e175B3e5434";
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

        contract = new kit.web3.eth.Contract(contractABI, contractAddress);
        
        

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

  async function approve(_price) {
    const cUSDContract = new kit.web3.eth.Contract(erc20ABI, cUSDContractAddress);
    const result = await cUSDContract.methods.approve(contractAddress, _price).send({ from: kit.defaultAccount });
    return result;
  }

  const createEvent = async(address, eventName, ticketVolume, ticketPrice, startDate, endDate, eventType) => {
     console.log("create called")
     try {
      await approve(new BigNumber(1000000000000000000));
      console.log("approve done")
     }catch(e){
        console.log(e);
     }
     try{
      const value = await contract.methods.createEvent(address, eventName, ticketVolume, ticketPrice, startDate, endDate, eventType).send({from: kit.defaultAccount})
      .on('confirmation', function(confirmationNumber, receipt){
        return true;
    })
      console.log("create done")
     }catch(e){
      console.log(e);
     }
  }

  const buyTicket = async(id, volume) => {
     console.log("buyTicket called")
     try {
      await approve(new BigNumber(1000000000000000000));
      const value = await contract.methods.testTransfer().send({from: kit.defaultAccount})
      console.log("ticket bought")
    } catch (error) {
      console.log("Some error in approval, ", error);
    }

  }

  const getEventInfo = async() => {
    try{
      const value = await contract.methods.getEventInfo(7).call().then(console.log)
    }catch(e){
       console.log(e);
    }
  }

  const deleteEvent = async() => {

  }

  const getEventAttendees = async() => {
    console.log("getEventAttendees called")
    try{
      const value = await contract.methods.getEventAttendees(0).call().then(console.log)
    }catch(e){
       console.log(e);
    }
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


  
  const [buttonChop, setButtonChop] = useState("chop")

  return (
    <Router>
    <div className="App">
      {connectedAddress}
      {userBalance}
      <Navbar balance={userBalance} />

      {/* <Button onClick={() => createEvent("0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2", "the lounge", 300, 2, "dateOfStartage", "dateOfEndage", 1)}>{buttonChop}</Button>
      <Button onClick={() => getEventInfo()}>{buttonChop}</Button>
      <Button onClick={() => buyTicket()}>{buttonChop}</Button>
      <Button onClick={() => getEventAttendees()}>{buttonChop}</Button> */}
      <Routes>

      <Route ex path="/" element={<Home/>}></Route>
      <Route ex path="/events" element={<Events createEvent={createEvent} buyTicket={buyTicket} connectedAddress={connectedAddress}/>}></Route>
      <Route ex path="/menu" element={<Menu/>}></Route>

      </Routes>
      

    </div>
    </Router>
  );
}

export default App;
