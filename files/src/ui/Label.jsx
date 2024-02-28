import PropTypes from 'prop-types';
import { useJobs } from '../contexts/JobsContext';

Label.propTypes = {
  children: PropTypes.string
}

export default function Label({children}) {
    const {handleAddFilter} = useJobs();
    return (
        <div className='text-primary bg-light font-bold px-2 pt-1 rounded text-[16px] cursor-pointer hover:bg-primary hover:text-white'
        onClick={() => handleAddFilter(children)}>{children}</div>
    )
}
