import { useEffect, useState } from "react"
import Header from "./ui/Header"
import jobsData from './data/data.json'
import JobsList from "./features/jobs/JobsList";
import FiltersBox from "./features/filters/FiltersBox";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters] = useState(['Javascript', 'Java', 'Java']);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function() {
    setTimeout(function(){
      setJobs(jobsData);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <main className="relative">
      <Header isLoading={isLoading}/>
      <div className="flex flex-col">
        {filters.length ? <FiltersBox filters={filters}/> : ''}
        {jobs.length ? <JobsList jobs={jobs} /> : ''}
      </div>
    </main>
  )
}

export default App
