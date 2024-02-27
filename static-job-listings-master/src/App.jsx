import { useEffect, useState } from "react"
import Header from "./ui/Header"
import jobsData from './data/data.json'
import JobsList from "./features/jobs/JobsList";

function App() {
  const [jobs, setJobs] = useState([]);
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
      <div className="absolute top-0 flex flex-col w-screen">
        {jobs ? <JobsList jobs={jobs} /> : ''}
      </div>
    </main>
  )
}

export default App
