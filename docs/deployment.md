# Deployment Notes

## Local development
1. Install dependencies:
2. Start server:
3. Visit `http://localhost:3000/health` to verify.

## Production (example)
- Use a simple Node host (Heroku / Railway / VPS) or Docker.
- Example Dockerfile (add to repo if you want):
- Environment variables:
- `PORT` — server port
- `PRIVATE_KEY` — for relayer (store in secret manager, never in repo)
- `AI_API_KEY` — external AI provider key (store securely)

## Smart contracts
- Put Move/EVM contract sources under `smartcontracts/` and use standard toolchain (e.g., `move` toolchain or `hardhat` for EVM).
- Always run audits for any contract before mainnet deployment.

## CI/CD
- Use GitHub Actions to run basic lint/test and build
- Protect `main` branch and enable PR reviews
