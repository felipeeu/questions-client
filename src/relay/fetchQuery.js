export const GRAPHQL_URL = 'http://localhost:4000/graphql';

const fetchQuery = async (request, variables) => {
  const body = JSON.stringify({
    name: request.name, 
    query: request.text, 
    variables,
  });
  const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers,
    body,
  });

  return await response.json();
};

export default fetchQuery;