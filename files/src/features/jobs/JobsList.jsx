import JobCard from './JobCard';
import { useJobs } from '../../contexts/JobsContext';

export default function JobsList() {
  const {jobs} = useJobs();
  
  if(!jobs.length) return null;

  return (
    <ul className='w-[327px] desktop:w-[1110px] mx-auto'>
        {jobs.map((job, index) => <JobCard key={index} job={job} />)}
    </ul>
  )
}
