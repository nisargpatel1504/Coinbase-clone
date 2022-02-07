import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Sidebar from "../Components/Sidebar";
import { ethers } from "ethers";
const { ThirdwebSDK } = require("@3rdweb/sdk");

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY,
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    )
  )
);
function Dashboard({ address }) {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdWebTokens, setThirdWebTokens] = useState([]);
  useEffect(() => {
    const getSanityAndThirdWebToken = async () => {
      const coins = await fetch(
        "https://1h7r3s44.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20'coins'%5D%7B%0A%20%20name%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%2C%0A%20%20usdprice%2C%0A%0A%7D"
      );
      const sanityTokens = (await coins.json()).result;
      setSanityTokens(sanityTokens);
      setThirdWebTokens(
        sanityTokens.map((token) => {
          return sdk.getTokenModule(token.contractAddress);
        })
      );
    };
    return getSanityAndThirdWebToken();
  }, []);
  
  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header walletAddress={address} sanityTokens={sanityTokens} thirdWebTokens={thirdWebTokens}/>
        <Main walletAddress={address} sanityTokens={sanityTokens} thirdWebTokens={thirdWebTokens}/>
      </MainContainer>
    </Wrapper>
  );
}

export default Dashboard;
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
  overflow:hidden;
`;

const MainContainer = styled.div`
  flex: 1;
`;
