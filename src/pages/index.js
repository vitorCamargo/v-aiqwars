import React, { lazy, memo, Suspense, useContext, useCallback } from 'react'

import { Route, Switch } from 'react-router-dom'

import { LoaderBox } from 'components'
import LayoutContext from 'providers/layout'

const Movie = lazy(() => import('./Movie'))
const Movies = lazy(() => import('./Movies'))
const Register = lazy(() => import('./Register'))
const Error404 = lazy(() => import('./Error404'))
const Character = lazy(() => import('./Character'))
const Characters = lazy(() => import('./Characters'))

const Routes = memo(() => {
  const { dispatch } = useContext(LayoutContext)

  const setKey = useCallback(
    (payload = '') => {
      dispatch({ type: 'changeKey', payload })
    },
    [dispatch]
  )

  const renderPage = useCallback(
    (key, props, Component) => {
      setKey(key)

      return <Component {...props} />
    },
    [setKey]
  )

  return (
    <Suspense fallback={<LoaderBox />}>
      <Switch>
        <Route
          exact
          path='/'
          render={props => renderPage('characters', props, Characters)}
        />

        <Route
          exact
          path='/characters'
          render={props => renderPage('characters', props, Characters)}
        />

        <Route
          exact
          path='/characters/:id'
          render={props => renderPage('characters', props, Character)}
        />

        <Route
          exact
          path='/movies'
          render={props => renderPage('movies', props, Movies)}
        />

        <Route
          exact
          path='/movies/:id'
          render={props => renderPage('movies', props, Movie)}
        />

        <Route
          exact
          path='/register'
          render={props => renderPage('register', props, Register)}
        />

        <Route render={props => renderPage('error404', props, Error404)} />
      </Switch>
    </Suspense>
  )
})

Routes.displayName = 'Routes'

export default Routes
