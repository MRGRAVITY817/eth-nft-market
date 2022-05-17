import { createContext, FC, useContext, useState } from "react";

const Web3Context = createContext<any>(null);
interface Web3ProviderProps {
  children: React.ReactNode;
}
const Web3Provider: FC<Web3ProviderProps> = ({ children }) => {
  const [web3Api, setWeb3Api] = useState({ test: "Hello Provider" });
  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);

export default Web3Provider;
