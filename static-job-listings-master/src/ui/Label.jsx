import PropTypes from 'prop-types';

Label.propTypes = {
  children: PropTypes.string
}

export default function Label({children}) {
  return (
    <div className='text-desaturated-dark-cyan bg-light-grayish-cyan font-bold px-2 pt-1 rounded text-[16px]'>{children}</div>
  )
}
