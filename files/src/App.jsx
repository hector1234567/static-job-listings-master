import Header from "./ui/Header"
import JobsList from "./features/jobs/JobsList";
import FiltersBox from "./features/filters/FiltersBox";
import JobsProvider from "./contexts/JobsContext";

function App() {
  return (
    <main className="relative pb-8">
      <JobsProvider>
        <Header/>
        <div className="flex flex-col">
          <FiltersBox/>
          <JobsList/>
        </div>
      </JobsProvider>
    </main>
  )
}

export default App
