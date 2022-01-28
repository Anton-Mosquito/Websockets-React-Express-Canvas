const express = require('express');
const app = express();
const WSServer = require('express-ws')(app);
const aWss = WSServer.getWss();
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;

app.ws('/', (ws, res) => {
  console.log('Connection established');
  ws.send('You are successfully connect')
  ws.on('message', (msg) => {
    msg = JSON.parse(msg);
    switch (msg.method) {
      case 'connection':
        connectionHandler(ws, msg)
        break;
      case 'draw':
        broadCastConnection(ws, msg)
        break;
    }
  })
});

app.use(cors());
app.use(express.json());

app.post('/image', (req,res) => {
  try {
    const data = req.body.img.replace(`data:image/png;base64,`, '');
    fs.writeFileSync(path.resolve(__dirname, 'files', `${req.query.id}.jpg`), data, 'base64')
    return res.status(200).json({message: "Downloaded"})
  } catch (error) {
    console.log(error);
    return res.status(500).json('error')
  }
});

app.get('/image', (req,res) => {
  try {
    const file = fs.readFileSync(path.resolve(__dirname, 'files', `${req.query.id}.jpg`))
    const data = `data:image/png;base64,${file}`.toString('base64');
    res.json(data)
  } catch (error) {
    console.log(error);
    return res.status(500).json('error')
  }
})

app.listen(PORT,() => console.log(`Server work on ${PORT}`));


const connectionHandler = (ws, msg) => {
  ws.id = msg.id;
  broadCastConnection(ws, msg)
}

const broadCastConnection = (ws, msg) => {
  aWss.clients.forEach((client) => {
    if(client.id === msg.id) {
      client.send(JSON.stringify(msg))
    }
  })
}