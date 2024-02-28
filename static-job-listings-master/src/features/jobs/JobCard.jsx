import PropTypes from 'prop-types'
import Badge from '../../ui/Badge'
import Label from '../../ui/Label'

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
        <div className='rounded overflow-hidden shadow-primary'>
            <div className='bg-white mx-auto border-l-[5px] border-desaturated-dark-cyan p-[24px] pl-[20px] desktop:flex z-10'>
                <img className="rounded-full w-[48px] h-[48px] desktop:w-[88px] desktop:h-[88px] desktop:mx-[16px] desktop:block left-[24px] desktop:left-0 top-0 absolute desktop:relative" 
                    src={job.logo} alt="image description"/>
                <div className="desktop:mx-[20px]">
                    <div className='flex items-baseline mt-[8px] desktop:mt-0'>
                        <span className='text-desaturated-dark-cyan font-bold text-[13px] mr-[29px] desktop:mr-[15px] py-[10px] desktop:pt-0 desktop:pb-[4px] desktop:text-[18px]'>
                            {job.company}
                        </span>
                        {job.new && <Badge background={'desaturated-dark-cyan'}>NEW!</Badge>}
                        {job.featured && <Badge background={'very-dark-grayish-cyan'}>FEATURED</Badge>}
                    </div>
                    <div className='text-very-dark-grayish-cyan font-bold desktop:text-[22px]'>{job.position}</div>
                    <div className='text-dark-grayish-cyan mt-[8px]  desktop:mt-0 desktop:text-[18px]'>
                        {job.postedAt}<span className='opacity-40 font-bold mx-[8px] desktop:mx-[15px]'>·</span>
                        {job.contract}<span className='opacity-40 font-bold mx-[8px] desktop:mx-[15px]'>·</span>
                        {job.location}
                    </div>
                </div>
                <div className='h-[1px] bg-dark-grayish-cyan opacity-40 my-[12px] desktop:hidden'></div>
                <div className='flex gap-[16px] mt-[20px] flex-wrap desktop:mt-0 desktop:items-center desktop:ml-auto'>
                    {[...job.tools, ...job.languages].map(elem => <Label key={elem}>{elem}</Label>)}
                </div>
            </div>
        </div>
    </li>
  )
}
