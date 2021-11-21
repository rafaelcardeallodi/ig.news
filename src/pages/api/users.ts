import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Rafael' },
    { id: 2, name: 'Enrico' },
    { id: 1, name: 'Henrique' }
  ];

  return response.json(users);
}

//Serverless