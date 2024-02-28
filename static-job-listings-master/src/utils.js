export function filterJobsArray(jobArray, filtersArray) {
    const jobs = [];
    jobArray.forEach(function(job) {
        filtersArray.forEach(function(filter) {
            if([...job.languages, ...job.tools].includes(filter)) {
                if(!jobs.includes(job)) jobs.push(job);
            }
        })
    })
    return jobs
}