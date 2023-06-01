# Swapi Challenge

# Tech we have used

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)

# System Requirements
- [git](https://git-scm.com/) >= v2.13
- [npm](https://www.npmjs.com/) >= v6.14.4
- [pnpm](https://pnpm.io/es/) >= v8.6.0


All of these must be available in your PATH. To verify things are set up properly, you can run this:
```shell
git --version
node --version
npm --version
pnpm --version
```

If you have trouble with any of these, learn more about the PATH environment variable and how to fix it here for [windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/) or [mac/linux](https://stackoverflow.com/questions/24306398/how-to-add-mongo-commands-to-path-on-mac-osx/24322978#24322978).


# Getting Started & Installation

For getting started you have to follow the below procedure.

```shell
git clone https://github.com/iamtuesday/samishop-challenge.git
cd samishop-challenge
```

### Set environment variables
1. Copy the contents of `.env.example` into a new file called `.env`
2. Put your environment variables in the `.env` file.

### Installation
```shell
pnpm install
npm install
```

This may take a few minutes.

### Start

To get the api up and running (and really see if it worked), run:

```shell
pnpm dev
npm run dev

```

Then open http://localhost:5173 to view it in the browser.

### If you want to test your production build in local environment, run the below commands.

```shell
# build for production
pnpm build
npm run build

# start in production mode
pnpm preview
npm run preview
```

### Other available scripts

Find problems with ESLint
```shell
pnpm lint
npm run lint
```

Exec test with Vitest
```shell
pnpm test
npm run test
```
