export function filterJobsArray(jobArray, filtersArray) {
    const jobsLoad = [];
    jobArray.forEach(function(job) {
        filtersArray.forEach(function(filter) {
            if([...job.languages, ...job.tools].includes(filter)) {
                jobsLoad.push(job);
            }
        })
    })
    return jobsLoad
}