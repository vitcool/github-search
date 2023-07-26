const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || '';
const GITHUB_API_URL = import.meta.env.VITE_API_URL || '';

const config = {
  apiUrl: GITHUB_API_URL,
  token: GITHUB_TOKEN,
};

export default config;
