import React from 'react'
import styled from '@mui/system/styled'
import theme from '../../../theme'

interface IconSidebar {
  svg: React.ReactElement
}

const IconContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '10px',

  marginTop: '20px',

  height: '46px',
  justifyContent: 'center',
  '& svg': {
    width: '24px', // Điều chỉnh kích thước biểu tượng theo yêu cầu
    height: '24px', // Điều chỉnh kích thước biểu tượng theo yêu cầu
    fill: 'grey', // Màu của biểu tượng
    borderRadius: '10px',
    transition: 'all 0.3s ease-in-out',

    '&: hover': {
      width: '44px',
      height: '44px',
      padding: '10px',
      fill: 'white',
      background: theme.palette.primary.main
    }
  }
})

const IconSidebar: React.FC<IconSidebar> = ({ svg }) => {
  return <IconContainer>{svg}</IconContainer>
}

export default IconSidebar
