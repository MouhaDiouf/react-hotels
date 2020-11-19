import { createClient } from 'contentful';

export default createClient({
  space: process.env.REACT_APP_API_TOKEN,
  accessToken: process.env.REACT_APP_API_TOKEN,
});
