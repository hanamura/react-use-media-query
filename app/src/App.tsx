import { useLayoutMediaQuery, useMediaQuery } from '../../src'

export const App = () => {
  const mq = useMediaQuery('(min-width: 600px)', 'not yet')
  const mq2 = useLayoutMediaQuery('(min-width: 600px)', 'not yet')

  console.log({ mq, mq2 })

  return (
    <>
      <div>{typeof mq === 'boolean' ? (mq ? 'true' : 'false') : mq}</div>
      <div>{typeof mq2 === 'boolean' ? (mq ? 'true' : 'false') : mq}</div>
    </>
  )
}
