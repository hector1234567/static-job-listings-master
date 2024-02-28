import { createContext, useContext, useEffect, useState } from "react";
import { filterJobsArray } from "../utils";
import jobsData from '../data/data.json'
import PropTypes from 'prop-types'

const JobsContext = createContext();

JobsProvider.propTypes = {
  children: PropTypes.array
}

export default function JobsProvider({children}) {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState(['JavaScript', 'Ruby']);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function() {
    setIsLoading(true);
    setTimeout(function() {
      if(!filters.length) {
        setJobs(jobsData);
      } else {
        setJobs(filterJobsArray(jobsData, filters));
      }
      setIsLoading(false);
    }, 1000);
  }, [filters]);

  function handleAddFilter(fName) {
    if(filters.includes(fName)) return;
    setFilters(f => [...f, fName]);
  }

  function handleRemoveFilter(fName) {
    setFilters(f => f.filter(n => n !== fName));
  }

  return (
    <JobsContext.Provider value={{
      filters,
      jobs,
      isLoading,
      handleRemoveFilter,
      handleAddFilter
    }}>{children}</JobsContext.Provider>
  )
}

function useJobs() {
  const context = useContext(JobsContext);
  return context;
}

export {useJobs};
