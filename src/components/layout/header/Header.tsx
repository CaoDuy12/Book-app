import { styled } from '@mui/material'
import theme from '../../../theme'
import './header.scss'

const StyledSpan = styled('span')({
  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.h5.fontWeight,
  lineHeight: 'normal',
  color: theme.palette.grey[400]
})

const StyledP = styled('p')({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: theme.typography.h4.fontWeight,
  lineHeight: 'normal',
  color: theme.palette.grey[900]
})
function Header() {
  return (
    <>
      <header>
        <div className='container'>
          <input type='text' name='search' id='search' placeholder='Search...' />
          <div className='header-panel'>
            <div className='header-notifi'>
              <img src='/assets/svg/header/bell.svg' alt='bell' />
              <div className='header-number'>
                <span>3</span>
                <img src='/assets/svg/header/bell-bg-number.svg' alt='number' />
              </div>
            </div>
            <div className='header-account'>
              <img src='/assets/images/header-avatar.png' alt='avatar' />
              <div className='header-acc'>
                <StyledSpan>Welcome,</StyledSpan>
                <StyledP>Lavender</StyledP>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
