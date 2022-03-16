import React from 'react'
import PropTypes from 'prop-types'

import { createFromIconfontCN } from '@ant-design/icons'

const types = {
  logo: 'icon-star_wars',
  symbol: 'icon-symbol',
  robot: 'icon-r2d2',
  yoda: 'icon-yoda'
}

export const CustomIcon = ({ type = 'logo', ...props }) => {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3246685_pzdc3189c2p.js'
  })

  return <IconFont type={types[type]} {...props} />
}

CustomIcon.propTypes = {
  type: PropTypes.string
}
