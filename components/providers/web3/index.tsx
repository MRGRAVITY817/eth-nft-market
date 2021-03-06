import { ethers } from "ethers";
import { createContext, FC, useContext, useEffect, useState } from "react";
import { createDefaultState, Web3State } from "./utils";

const Web3Context = createContext<Web3State>(createDefaultState());

interface Web3ProviderProps {
  children: React.ReactNode;
}
const Web3Provider: FC<Web3ProviderProps> = ({ children }) => {
  const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState());
  useEffect(() => {
    const initWeb3 = () => {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum as any
      );
      setWeb3Api({
        ethereum: window.ethereum,
        provider,
        contract: null,
        isLoading: false,
      });
    };
    initWeb3();
  }, []);
  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);

export default Web3Provider;
