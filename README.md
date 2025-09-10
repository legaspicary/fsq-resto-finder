# fsq-resto-finder

### Setup instructions for running the app locally:
- Project needs pnpm installed [pnpm installation](https://pnpm.io/installation)
- run `pnpm i --frozen-lockfile` to install the dependencies
- run `pnpm tsc --watch` at the root folder
- on another terminal, run `pnpm dev`

### Details on configuring environment variables:
- ENVs required are defined at `.env.example`, fill it with your own and api keys, then copy into `.env`

### Assumptions / Limitations
- FourSquare Places have moved some of the returned fields to a premium tier and isn't available at the free pro tier
- Could be more performant and controlled on the LLM agent
- Official FourSquare Places API `nodejs` api package doesn't seem to work with this build and resorted to a manual fetch
- Could be tested more thoroughly and handle errors well (e.g. don't display actual errors, like a production app)
