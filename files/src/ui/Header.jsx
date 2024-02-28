import './Header.css'
import Loader from './Loader'
import PropTypes from 'prop-types'
import { useJobs } from '../contexts/JobsContext'

Header.propTypes = {
  isLoading: PropTypes.bool
}

export default function Header() {
  const {isLoading} = useJobs();
  return (
    <header className='bg-primary h-[156px]'>
      {isLoading && <Loader/>}
    </header>
  )
}
