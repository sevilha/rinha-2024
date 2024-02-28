import express from 'express'
import cors from 'cors'
import clienteRouter from './presentation/routers/clients';

const PORT = process.env.PORT || 4000
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app = express()

app.get('/', (req, res) => {
    res.send('Bem-vindo!')
});

app.use(cors({
    origin: ['http://localhost:4000']
}))


app.use('/clientes', clienteRouter);

app.use((req, res) => {
    res.status(404)
});

// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})