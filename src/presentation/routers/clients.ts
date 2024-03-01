import express, { Request, Response, Router } from 'express';

const clienteRouter: Router = express.Router();

clienteRouter.get('/:id/transacoes', (req: Request, res: Response) => {
  res.send('Transacacoes params');
});

clienteRouter.get('/:id/extrato', (req: Request, res: Response) => {
  res.send('Extrato params' + JSON.stringify(req.params));
});

clienteRouter.post('/:id/transacoes', (req: Request, res: Response) => {
  const transacao = req.body;
})


export default clienteRouter;

