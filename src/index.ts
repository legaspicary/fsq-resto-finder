import express from 'express'
// TODO: why need .js
import { ExecuteApiQuerySchema } from './schemas/ExecuteApiSchema.js'
import { runAgent } from './langgraph/agent.js';

const app = express()

// TODO: check code in query is pioneerdevai
app.get('/api/execute', async (req, res) => {
  const parsedQuery = ExecuteApiQuerySchema.parse(req.query);
  if (parsedQuery.code !== 'pioneerdevai') {
    res.sendStatus(401);
    return;
  }

  await runAgent();

  // TODO: add llm layer

  // TODO: add foursquare layer

  res.send('Hello Worlda')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})