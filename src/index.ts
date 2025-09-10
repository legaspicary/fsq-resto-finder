import express from 'express'
import { type Express } from 'express';
import { ExecuteRequestQueryApiSchema } from './schemas/ExecuteRequestApiSchema.js'
import { askRestoAgent } from './langgraph/agent.js';
import { lookupRestaurant } from './foursquare/places-search.js';

const app: Express = express()

app.get('/api/execute', async (req, res) => {
  const { code, message } = ExecuteRequestQueryApiSchema.parse(req.query);
  if (code !== 'pioneerdevai') {
    res.sendStatus(401);
    return;
  }

  const agentResult = await askRestoAgent(message);
  const lookupResult = await lookupRestaurant({
    action: "restaurant_search",
    parameters: agentResult
  })
  const restaurantDetails = lookupResult.results.map(r => ({
    name: r.name,
    address: r.location.address
  }))

  res.send(restaurantDetails)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})