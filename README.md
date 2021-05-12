

# Filter-pilter

Pet project to try things.
Water filter management platform.
Monorepo project that uses [Nx](https://nx.dev).

## Development

### Prerequisites

Install Node.js (^14) and npm (^6)

### Understand workspace

Run `npx nx dep-graph` to see a diagram of the dependencies of the projects.

### Linting

`npx nx lint`

### Testing

`npx nx test`

### Running locally

TODO

### Generate an application

Run `npx nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

### Generate a library

Run `npx nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@filter-pilter/mylib`.

### Code scaffolding

Run `npx nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Deployment

### Build

Run `npx nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

TODO
