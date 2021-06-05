import Koa, {Context} from 'koa';
import config from 'config'
import bodyParser from 'koa-body'
import cors from '@koa/cors';
import Router from 'koa-joi-router'

import errorCatcher from './middlewares/errorCatcher'

export interface AppContext extends Context {
}

const app = new Koa();
const router = Router();
router.get('/', async (ctx) => {
  ctx.body = 'It works!'
})
app.use(errorCatcher)
app.use(cors())
app.use(bodyParser())

const port = config.get('server.port')
app.listen(port, () => {
  console.log(`Server is running on ${port} port`)});