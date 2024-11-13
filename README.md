# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

1.  Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```
2. Install redis
3. Start redis service preferable on default HOST and PORT.  If necessary you can change these settings in .env
4. Create .env
```CLIENT_ID=945e8be7-0d90-4b39-9f7c-453a5e848602
CLIENT_SECRET= {{Your Finch API Client Secret}}
FINCH_API_BASE_URL=https://api.tryfinch.com
FINCH_API_VERSION=2020-09-17
REDIS_PORT=6379
REDIS_HOST=127.0.0.1
REDIS_USERNAME=
REDIS_PASSWORD=
REDIS_DB=0
```
5. Run development server.
6. Select a provider to load the application with data.
7. If you receive a 500 error you load testing data by setting the following variables in localStorage variables to true. Use the first user in the grid, Mike Lincoln Bartoletti, for testing.  His data is hard coded for the Employee details view. 
```
EmployerCompanyTesting
EmployerDirectoryTesting
```


## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
