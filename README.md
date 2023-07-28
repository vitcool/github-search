# Github search

This is a Vite Github search project that uses the GitHub GraphQL API to fetch repository data.

## Environment Variables

To run this project, you'll need to set the following environment variables:

- `VITE_GITHUB_TOKEN`: Your personal GitHub access token. This is required to authenticate with the GitHub GraphQL API and fetch data. Make sure to keep this token private and never expose it publicly.
- `VITE_API_URL`: The URL for the GitHub GraphQL API. By default, it is set to `https://api.github.com/graphql`, which is the official GitHub API URL.

Please make sure to create a `.env` file in the project root and copy the content from `.env.example`. Remember to only add non-secret values in the `.env.example` file, and for the `VITE_GITHUB_TOKEN`, either reach out to the project author or use your own token if you have one.

## Dependencies

This project uses the following dependencies:

- `@apollo/client`: A powerful GraphQL client library for React applications. It's used to interact with the GitHub GraphQL API and fetch data.
- `@emotion/react` and `@emotion/styled`: Emotion is a popular CSS-in-JS library. It's used for styling components in this project.
- `@mui/icons-material` and `@mui/material`: Material-UI is a popular React UI framework. It provides a set of ready-to-use components and icons to build modern user interfaces.
- `graphql`: The official JavaScript library for working with GraphQL. It's used to define and execute GraphQL queries in this project.
- `react` and `react-dom`: The core libraries for building React applications.
- `react-router-dom`: A popular library for handling routing in React applications. It's used for navigation in this project.

## Available Scripts

In the project directory, you can run the following scripts:

- `dev`: Runs the development server using Vite.
- `build`: Builds the production-ready code. It first compiles TypeScript files and then uses Vite to bundle the assets.
- `lint`: Lints the TypeScript and JSX files using ESLint. It enforces code quality and style conventions.
- `preview`: Serves the built production bundle for preview. It's useful to test the production build locally.

Make sure to run `npm install` or `yarn install` before running any of these scripts to install the required dependencies.

## Getting Started

1. Clone this repository to your local machine.
2. Run `npm install` or `yarn install` to install the project dependencies.
3. Create a `.env` file in the project root and set the required environment variables as described in the "Environment Variables" section.
4. Run `npm run dev` or `yarn dev` to start the development server and see the app in action.

Please note that this project assumes you have a basic understanding of React, GraphQL, and the GitHub API.

Feel free to explore the code and customize it according to your needs. Happy coding!
