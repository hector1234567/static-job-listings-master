import PropTypes from 'prop-types';

FiltersBox.propTypes = {
  filters: PropTypes.array
}

export default function FiltersBox({filters}) {
  return (
    <div className='w-[327px] desktop:w-[1110px] bg-white mx-auto p-[24px] rounded flex gap-2 -mt-[40px] mb-[16px] justify-between shadow-primary'>
      <div className='flex gap-[16px] flex-wrap'>
      {filters.map(filter => (
        <div key={filter} className='text-desaturated-dark-cyan bg-light-grayish-cyan font-bold text-[16px] flex items-center rounded overflow-hidden'>
          <span className='px-2 pt-1'>{filter}</span><div className='bg-desaturated-dark-cyan text-white px-2 pt-1 font-bold'>&#10005;</div>
        </div>
      ))}
      </div>
      <div className='flex items-center'>
        <span className='font-bold text-dark-grayish-cyan cursor-pointer'>Clear</span>
      </div>
    </div>
  )
}
