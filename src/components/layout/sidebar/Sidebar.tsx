import { SvgIcon, makeStyles } from '@mui/material'
import IconSidebar from './IconSidebar'
import './sidebar.scss'
import { GridView } from '@mui/icons-material'
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp'
import ArticleIcon from '@mui/icons-material/Article'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import SupportSharpIcon from '@mui/icons-material/SupportSharp'
import BuildRoundedIcon from '@mui/icons-material/BuildRounded'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import styled from 'styled-components'
import theme from '../../../theme'

const StyledSvgBook = styled.svg({
  background: theme.palette.primary.main,
  fill: 'white !important',
  padding: '10px',
  width: '44px !important',
  height: '44px !important'
})
const StyledSvgSignOut = styled.svg({
  marginTop: '137px'
})
function Sidebar() {
  const menuIcon = <SvgIcon>{/* Thêm nội dung SVG của biểu tượng vào đây */}</SvgIcon>

  return (
    <>
      <div className='sidebar'>
        <div className='container'>
          <h2>Logo</h2>

          <IconSidebar svg={<GridViewSharpIcon />} />
          <IconSidebar svg={<ArticleIcon component={StyledSvgBook} />} />
          <IconSidebar svg={<PersonRoundedIcon />} />
          <IconSidebar svg={<SupportSharpIcon />} />
          <IconSidebar svg={<BuildRoundedIcon />} />
          <IconSidebar svg={<LogoutRoundedIcon component={StyledSvgSignOut} />} />
        </div>
      </div>
    </>
  )
}

export default Sidebar
