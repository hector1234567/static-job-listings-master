import PropTypes from 'prop-types'

JobCard.propTypes = {
    job: PropTypes.shape({
        id: PropTypes.number,
        company: PropTypes.string,
        logo: PropTypes.string,
        new: PropTypes.bool,
        featured: PropTypes.bool,
        position: PropTypes.string,
        role: PropTypes.string,
        level: PropTypes.string,
        postedAt: PropTypes.string,
        contract: PropTypes.string,
        location: PropTypes.string,
        languages: PropTypes.array,
        tools: PropTypes.array
    })
}

export default function JobCard({job}) {
  return (
    <li className='my-[16px] pt-[24px] relative'>
        <img className="rounded-full w-[48px] h-[48px] absolute top-0 left-[24px] z-10" src={job.logo} alt="image description"/>
        <div className='rounded overflow-hidden shadow-primary'>
            <div className='bg-white mx-auto border-l-[5px] border-desaturated-dark-cyan p-[24px] pl-[20px]'>
                <div className='flex items-baseline mt-[8px]'>
                    <span className='text-desaturated-dark-cyan font-bold text-[13px] mr-[29px] py-[10px]'>{job.company}</span>
                    {job.new && <span className='text-white bg-desaturated-dark-cyan font-bold px-2 pt-1 rounded-full text-[13px] mr-[8px]'>NEW!</span>}
                    {job.featured && <span className='text-white bg-very-dark-grayish-cyan font-bold px-2 pt-1 rounded-full text-[13px]'>FEATURED</span>}
                </div>
                <div className='text-very-dark-grayish-cyan font-bold'>{job.position}</div>
                <div className='text-dark-grayish-cyan mt-[8px]'>
                    {job.postedAt} <span className='opacity-40 font-bold'>·</span> {job.contract} <span className='opacity-40 font-bold'>·</span> {job.location}
                </div>
                <div className='h-[1px] bg-dark-grayish-cyan opacity-40 my-[12px]'></div>
                <div className='flex gap-[16px] mt-[20px] flex-wrap'>
                    {[...job.tools, ...job.languages].map(elem => <div key={elem} className='text-desaturated-dark-cyan bg-light-grayish-cyan font-bold px-2 pt-1 rounded text-[16px]'>{elem}</div>)}
                </div>
            </div>
        </div>
    </li>
  )
}
