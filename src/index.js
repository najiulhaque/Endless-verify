/**
 * Minimal Node/Express example to serve as a backend stub
 * Usage: `node src/index.js`
 * This file is intentionally small — replace or extend for real backend.
 */

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Basic health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'endless-protocol-starter' });
});

// Example API: returns the available components
app.get('/api/components', (req, res) => {
  res.json({
    components: [
      { name: 'auth', description: 'Authentication component (Google + wallet)' },
      { name: 'wallet', description: 'Wallet abstraction (connect, sign, pay gas)' }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
