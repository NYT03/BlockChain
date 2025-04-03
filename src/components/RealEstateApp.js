import { ethers } from "ethers";
import contractAddress from "../contracts/contract-address.json";

// In your useEffect or initialization code
const provider = new ethers.BrowserProvider(window.ethereum);  // Changed from ethers.providers.Web3Provider
const signer = await provider.getSigner();
const contract = new ethers.Contract(
    contractAddress.RealEstateToken,
    RealEstateTokenABI,
    signer
);