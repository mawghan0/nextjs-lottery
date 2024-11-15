import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  sepolia
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: '348d3ba2d45bd93709a2a85967c84111',
  chains: [sepolia],
  ssr: true,
});



