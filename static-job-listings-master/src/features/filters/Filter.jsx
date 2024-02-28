import PropTypes from 'prop-types';

Filter.propTypes = {
  children: PropTypes.string,
  handleRemoveFilter: PropTypes.func
}

export default function Filter({children, handleRemoveFilter}) {
  return (
    <div className='text-primary bg-light font-bold text-[16px] flex items-center rounded overflow-hidden'>
        <span className='px-2 pt-1'>{children}</span>
        <div className='bg-primary text-white px-2 pt-1 font-bold cursor-pointer hover:bg-dark' onClick={() => handleRemoveFilter(children)}>&#10005;</div>
    </div>
  )
}
