import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  sepolia
} from 'wagmi/chains';
import { http } from 'wagmi';
import "dotenv/config";

const INFURA_API_KEY = process.env.NEXT_PUBLIC_INFURA_API_KEY
// console.log(process.env.NEXT_PUBLIC_INFURA_API_KEY)

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: '348d3ba2d45bd93709a2a85967c84111',
  chains: [sepolia],
  ssr: true,
  transports: {
    [sepolia.id]: http(`https://sepolia.infura.io/v3/${INFURA_API_KEY}`),
  }
});



