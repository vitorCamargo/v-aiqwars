import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

const LayoutContext = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeKey': {
      if (state.key !== action.payload) {
        return {
          ...state,
          key: action.payload
        }
      }
      return state
    }

    default: {
      return state
    }
  }
}

const LayoutProvider = props => {
  const { children } = props

  const [state, dispatch] = useReducer(reducer, {
    key: ''
  })

  return (
    <LayoutContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

LayoutProvider.propTypes = {
  children: PropTypes.node.isRequired
}

const LayoutConsumer = Component =>
  class Consumer extends React.PureComponent {
    render() {
      return (
        <LayoutContext.Consumer>
          {data => <Component {...this.props} {...data} />}
        </LayoutContext.Consumer>
      )
    }
  }

export default LayoutContext
export { LayoutProvider, LayoutConsumer }
