import { Router } from 'https://pkg.do/itty-router@2.6.5'
const router = Router()
router.get('/', () => new Response('Hello, world!'))
export default router.handler