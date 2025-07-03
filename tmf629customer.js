const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3004; // Updated port
app.use(bodyParser.json());

const mockCustomers = {};
const mockAccounts = {};

// POST /customer
app.post('/customer', (req, res) => {
  const id = `CUST-${Date.now()}`;
  mockCustomers[id] = req.body;
  console.log('Customer created:', req.body);
  res.status(201).json({ id, ...req.body, status: 'Created' });
});

// GET /customer/:id
app.get('/customer/:id', (req, res) => {
  const customer = mockCustomers[req.params.id];
  if (customer) {
    res.json({ id: req.params.id, ...customer, status: 'Retrieved' });
  } else {
    res.status(404).json({ error: 'Customer not found' });
  }
});

// POST /account
app.post('/account', (req, res) => {
  const id = `ACC-${Date.now()}`;
  mockAccounts[id] = req.body;
  console.log('Account created:', req.body);
  res.status(201).json({ id, ...req.body, status: 'Created' });
});

// GET /account/:id
app.get('/account/:id', (req, res) => {
  const account = mockAccounts[req.params.id];
  if (account) {
    res.json({ id: req.params.id, ...account, status: 'Retrieved' });
  } else {
    res.status(404).json({ error: 'Account not found' });
  }
});

app.listen(port, () => {
  console.log(`TMF629 Customer Management service running on http://localhost:${port}`);
});
