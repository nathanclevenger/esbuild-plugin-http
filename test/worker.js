import { compact } from 'https://cdn.skypack.dev/lodash-es'

export default {
  fetch: req => new Response(JSON.stringify(compact([0, 1, false, 2, '', 3])))
}
