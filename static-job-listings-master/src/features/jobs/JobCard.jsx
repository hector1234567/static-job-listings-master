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
        tools: PropTypes.array,
    }),
    handleAddFilter: PropTypes.func
}

export default function JobCard({job, handleAddFilter}) {
    const {featured, postedAt, contract, location, tools, languages, company, logo} = job;
    return (
        <li className='my-[16px] pt-[24px] relative'>
            <div className='rounded overflow-hidden shadow-small'>
                <div className={`bg-white mx-auto ${job.new || featured ? 'border-l-[5px] border-primary ' : ''}p-[24px] pl-[20px] desktop:flex z-10`}>
                    <img className="rounded-full w-[48px] h-[48px] desktop:w-[88px] desktop:h-[88px] desktop:mx-[16px] desktop:block left-[24px] desktop:left-0 top-0 absolute desktop:relative" 
                        src={logo} alt="image description"/>
                    <div className="desktop:mx-[20px]">
                        <div className='flex items-baseline mt-[8px] desktop:mt-0'>
                            <span className='text-primary font-bold text-[13px] mr-[29px] desktop:mr-[15px] py-[10px] desktop:pt-0 desktop:pb-[4px] desktop:text-[18px]'>
                                {company}
                            </span>
                            {job.new && <Badge background={'primary'}>NEW!</Badge>}
                            {featured && <Badge background={'dark'}>FEATURED</Badge>}
                        </div>
                        <div className='text-dark font-bold desktop:text-[22px] cursor-pointer hover:text-primary'>{job.position}</div>
                        <div className='text-gray mt-[8px]  desktop:mt-0 desktop:text-[18px]'>
                            {postedAt}<span className='opacity-40 font-bold mx-[8px] desktop:mx-[15px]'>·</span>
                            {contract}<span className='opacity-40 font-bold mx-[8px] desktop:mx-[15px]'>·</span>
                            {location}
                        </div>
                    </div>
                    <div className='h-[1px] bg-gray opacity-40 my-[12px] desktop:hidden'></div>
                    <div className='flex gap-[16px] mt-[20px] flex-wrap desktop:mt-0 desktop:items-center desktop:ml-auto'>
                        {[...tools, ...languages].map((elem, index) => <Label key={index} handleAddFilter={handleAddFilter}>{elem}</Label>)}
                    </div>
                </div>
            </div>
        </li>
    )
}
