import {ethers} from "ethers";
import axios from "axios";

/**
 * @param {string} address
 * @returns {Promise<String>}
 * @constructor
 */
export async function LoginByMetaMask(address,) {
    if (window?.ethereum) {
        let res;
        try {
            res = await axios.get(`http://${address}/login-meta/nonce`)
        } catch (e) {
            throw {message: 'failed to get nonce from server', error: e}
        }
        const nonce = res.data
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const sig = await signer.signMessage(nonce)
        try {
            const body = JSON.stringify({
                Sig: sig
            })
            res = await axios.post(`http://${address}/login-meta/login`, {
                Sig: sig
            })
            if (res) {
                return res.data
            }
        } catch (e) {
            alert(e)
        }

    } else {
        return null
    }
}