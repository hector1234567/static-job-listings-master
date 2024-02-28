import PropTypes from 'prop-types';
import Filter from './Filter';

FiltersBox.propTypes = {
  filters: PropTypes.array,
  handleRemoveFilter: PropTypes.func
}

export default function FiltersBox({filters, handleRemoveFilter}) {

  function handleClearAllFilters() {
    filters.forEach(element => {
      handleRemoveFilter(element);
    });
  }

  return (
    <div className='w-[327px] desktop:w-[1110px] bg-white mx-auto p-[24px] rounded flex gap-2 -mt-[40px] mb-[16px] justify-between shadow-small'>
      <div className='flex gap-[16px] flex-wrap'>
        {filters.map((filter, index) => <Filter handleRemoveFilter={handleRemoveFilter} key={index}>{filter}</Filter>)}
      </div>
      <div className='flex items-center'>
        <span className='font-bold text-gray cursor-pointer hover:text-primary hover:underline' onClick={handleClearAllFilters}>Clear</span>
      </div>
    </div>
  )
}
