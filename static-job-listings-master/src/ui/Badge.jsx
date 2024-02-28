import PropTypes from 'prop-types';

Badge.propTypes = {
  children: PropTypes.string,
  background: PropTypes.string
}

export default function Badge({children, background}) {
  return (
    <span className={`text-white bg-${background} font-bold px-2 pt-1 rounded-full text-[13px] mr-[8px]`}>{children}</span>
  )
}
