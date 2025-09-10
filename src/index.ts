import express from 'express'
// TODO: why need .js
import { ExecuteApiQuerySchema } from './schemas/ExecuteApiSchema.js'

const app = express()

// TODO: check code in query is pioneerdevai
app.get('/api/execute', (req, res) => {
  const parsedQuery = ExecuteApiQuerySchema.parse(req.query);
  if(parsedQuery.code !== 'pioneerdevai') {
    res.sendStatus(401);
    return;
  }

  // TODO: add llm layer

  // TODO: add foursquare layer
  
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})