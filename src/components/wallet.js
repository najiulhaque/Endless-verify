/**
 * Wallet helper (placeholder)
 * - Demonstrates connect(), getAddress(), signMessage(), payGasOnBehalf()
 * Replace with real wallet SDK (ethers, web3modal, onchain move SDK etc.)
 */

const Wallet = {
  connected: false,
  address: null,

  async connect() {
    // Simulated connect flow
    this.connected = true;
    this.address = '0xDEADBEEF00000000000000000000000000000000';
    console.log('Wallet connected:', this.address);
    return this.address;
  },

  async getAddress() {
    if (!this.connected) {
      return await this.connect();
    }
    return this.address;
  },

  async signMessage(message) {
    // Simulate signature
    console.log('Signing message:', message);
    return `signature_for_${message}`;
  },

  // Example: developer-paid gas abstraction (placeholder)
  async payGasOnBehalf(userAddress, txPayload) {
    console.log(`Developer paying gas for ${userAddress} with payload:`, txPayload);
    // In reality, backend service signs and pays gas, or uses meta-tx relayer
    return { txHash: '0xSIMULATED_TX_HASH' };
  }
};

module.exports = Wallet;
