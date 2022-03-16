import React, { memo, lazy, Suspense, useEffect, useState } from 'react'

import moment from 'moment'
import prBR from 'moment/locale/pt-br'

import { AppBar, LoaderBox } from 'components'

const Routes = lazy(() => import('./pages'))

const App = memo(() => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  moment.locale('pt-br', prBR)

  if (loading) {
    return <LoaderBox />
  }

  return (
    <Suspense fallback={<LoaderBox />}>
      <AppBar>
        <Routes />
      </AppBar>
    </Suspense>
  )
})

App.displayName = 'App'

export default App
