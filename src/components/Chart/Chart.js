import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { Chart as AntChart } from '@antv/g2'

export const Chart = ({ setChart, height, children, ...props }) => {
  const [ref, setRef] = useState(undefined)

  useEffect(() => {
    if (ref) {
      const chart = new AntChart({
        height,
        autoFit: true,
        container: ref
      })

      setChart(chart)
    }
  }, [ref, height, setChart])

  return (
    <div
      ref={el => setRef(el)}
      style={{ width: '100%', height: '100%' }}
      {...props}
    >
      {children}
    </div>
  )
}

Chart.propTypes = {
  children: PropTypes.any,
  height: PropTypes.string,
  setChart: PropTypes.func
}
