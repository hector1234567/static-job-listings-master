import './Header.css'
import Loader from './Loader'
import PropTypes from 'prop-types'

Header.propTypes = {
  isLoading: PropTypes.bool
}

export default function Header({isLoading}) {
  return (
    <header className='bg-desaturated-dark-cyan h-[156px]'>
      {isLoading && <Loader/>}
    </header>
  )
}
