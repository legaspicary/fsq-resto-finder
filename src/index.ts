import express from 'express'
// TODO: why need .js
import { ExecuteRequestQueryApiSchema } from './schemas/ExecuteRequestApiSchema.js'
import { askRestoAgent } from './langgraph/agent.js';

const app = express()

// TODO: check code in query is pioneerdevai
app.get('/api/execute', async (req, res) => {
  const { code, message } = ExecuteRequestQueryApiSchema.parse(req.query);
  if (code !== 'pioneerdevai') {
    res.sendStatus(401);
    return;
  }

  const agentResult = await askRestoAgent(message);

  // TODO: add llm layer

  // TODO: add foursquare layer

  res.send(agentResult)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})