import PropTypes from 'prop-types';

Label.propTypes = {
  children: PropTypes.string
}

export default function Label({children}) {
  return (
    <div className='text-primary bg-light font-bold px-2 pt-1 rounded text-[16px] cursor-pointer hover:bg-primary hover:text-white'>{children}</div>
  )
}
