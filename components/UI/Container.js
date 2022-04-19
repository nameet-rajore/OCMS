import { Box } from '@mui/system'
import React from 'react'

const Container = (props) => {
  return (
    <Box m={10} mt={20} >
        {props.children}
    </Box>
  )
}

export default Container