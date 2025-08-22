import express from 'express';
import { transformUser } from './Dtos.js';
import { userSchema } from './Schemas.js';
import TokenController from './TokenController.js';
import { middlewareConsole, consoleReq } from './middlewareConsole.js';

const app = express()
const port = 3000

const users = [{
  id: '1',
  password: 'password123',
  name: 'John Doe'
}];

const tokenController = new TokenController(users);

app.use(express.json())
app.use(middlewareConsole);

app.get('/', (req, res) => {
  // consoleReq(req);
  res.json({ message: tokenController.generateToken('1') })
})

app.get('/user/:userId' ,tokenController.checkRole('admin'), (req, res) => {
  consoleReq(req);
  const user = users.find(user => user.id === req.params.userId)
  if (user) {
    res.json(transformUser(user));
  } else {
    res.status(404).json({ error: `User not found ${req.params.userId}` })
  }
})

app.post('/user', (req, res) => {
  consoleReq(req);
  try {
    const { name, password } = userSchema.validateSync(req.body);
    const newUser = { id: `${users.length + 1}`, name, password }
    users.push(newUser);
    res.json(transformUser(newUser));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})