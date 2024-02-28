import PropTypes from 'prop-types';
import JobCard from './JobCard';

JobsList.propTypes = {
    jobs: PropTypes.array,
    handleAddFilter: PropTypes.func
}

export default function JobsList({jobs, handleAddFilter}) {
  return (
    <ul className='w-[327px] desktop:w-[1110px] mx-auto'>
        {jobs.map((job, index) => <JobCard key={index} handleAddFilter={handleAddFilter} job={job} />)}
    </ul>
  )
}
