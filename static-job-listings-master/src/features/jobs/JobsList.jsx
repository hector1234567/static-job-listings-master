import PropTypes from 'prop-types';
import JobCard from './JobCard';

JobsList.propTypes = {
    jobs: PropTypes.array
}

export default function JobsList({jobs}) {
  return (
    <ul className='w-[327px] desktop:w-[1110px] mx-auto'>
        {jobs.map(job => <JobCard key={job.id} job={job} />)}
    </ul>
  )
}
