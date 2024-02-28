import PropTypes from 'prop-types';

Badge.propTypes = {
  children: PropTypes.string,
  background: PropTypes.string
}

export default function Badge({children, background}) {
    let bg = 'hsl(180, 29%, 50%)';
    if(background === 'dark') bg = 'hsl(180, 14%, 20%)';

    return (
        <span className="text-white font-bold px-2 pt-1 rounded-full text-[13px] mr-[8px]"
        style={{backgroundColor: bg}}>{children}</span>
    )
}
