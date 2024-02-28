import { useEffect, useState } from "react"
import Header from "./ui/Header"
import jobsData from './data/data.json'
import JobsList from "./features/jobs/JobsList";
import FiltersBox from "./features/filters/FiltersBox";
import { filterJobsArray } from "./utils";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState(['JavaScript', 'Ruby']);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function() {
    if(!filters.length) {
      setJobs(jobsData);
    } else {
      setJobs(filterJobsArray(jobsData, filters));
    }
    setIsLoading(false);
  }, [filters]);

  

  function handleAddFilter(fName) {
    if(filters.includes(fName)) return;
    setFilters(f => [...f, fName]);
  }

  function handleRemoveFilter(fName) {
    setFilters(f => f.filter(n => n !== fName));
  }

  return (
    <main className="relative">
      <Header isLoading={isLoading}/>
      <div className="flex flex-col">
        {filters.length ? <FiltersBox handleRemoveFilter={handleRemoveFilter} filters={filters}/> : ''}
        {jobs.length ? <JobsList handleAddFilter={handleAddFilter} jobs={jobs} /> : ''}
      </div>
    </main>
  )
}

export default App
