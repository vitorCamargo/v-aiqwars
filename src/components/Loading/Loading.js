import React from 'react'

import { CustomIcon } from 'components/Icon'

export const Loading = ({ ...props }) => (
  <CustomIcon className='icon-spin' style={{ fontSize: 24 }} {...props} />
)
