import Router from 'koa-joi-router'

import { Controllers } from './controller'
import {Validator} from './validator'

const router = Router();

router.post('/user', Validator.signUp, Controllers.signUp)

export default router;