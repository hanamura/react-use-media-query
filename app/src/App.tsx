import { useMediaQuery } from '../../src'

export const App = () => {
  const mq = useMediaQuery('(min-width: 600px)', 'not yet')

  return <div>{typeof mq === 'boolean' ? (mq ? 'true' : 'false') : mq}</div>
}
