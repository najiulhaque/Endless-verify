/**
 * Simple frontend-style module that describes auth flows.
 * This is a plain JS module (not tied to any framework) to copy into a frontend.
 *
 * Responsibilities:
 * - Provide Google-like login placeholder
 * - Provide wallet-based login placeholder
 * - Abstract session creation for the app backend
 */

const Auth = {
  // Simulate Google login flow (placeholder)
  async googleLogin() {
    // In production you would call Google OAuth, then exchange token with backend
    console.log('Simulating Google login...');
    return { user: { id: 'user_google_123', name: 'Google User' }, token: 'fake-google-token' };
  },

  // Simulate wallet login (e.g., sign a nonce)
  async walletLogin(signerAddress) {
    console.log(`Simulating wallet login for ${signerAddress}...`);
    // Normally: backend provides nonce, wallet signs it, backend verifies and creates session
    return { user: { id: signerAddress, name: 'WalletUser' }, token: 'fake-wallet-token' };
  },

  // Abstracted method to create local session
  async createSession(authResult) {
    // Example: store token in localStorage (if frontend)
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('session_token', authResult.token);
    }
    return { ok: true, token: authResult.token };
  }
};

module.exports = Auth;
