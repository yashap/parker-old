# Parker

Monorepo for the Parker parking app. Contains all frontends, backends and libraries.

## Developing

### Dependencies

#### nvm

Install [nvm](https://github.com/nvm-sh/nvm), then `nvm use` in this directory to switch to the appropriate node
version.

#### yarn

`brew install yarn`

#### Expo

`yarn global add expo-cli`

#### Lerna

We use [lerna](https://github.com/lerna/lerna) to ease monorepo management - i.e. to make it easier to develop
libraries and their consumers (frontends and services) at the same time, with minimal overhead.

Key commands:

```bash
# Like a fancy `yarn install`
#  - runs `yarn install` in every frontend/lib/service
#  - creates symlinks for all "local" dependencies (e.g. service-to-lib, frontend-to-lib and lib-to-lib)
npx lerna bootstrap

# Runs `yarn build` in every frontend/lib/service
npx lerna run build

# Build a specific module
npx lerna run build --scope=my-module

# Install module-1 to module-2
lerna add module-1 --scope=module-2

# Install module-1 to module-2 in devDependencies
lerna add module-1 --scope=module-2 --dev

# Remove the node_modules directory from all packages
npx lerna clean
```

### Running apps locally

TODO - instructions