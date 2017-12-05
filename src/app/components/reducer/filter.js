const defaultFilters = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
};


export default (filter = defaultFilters, action) => {
  if( action.type === 'DATE_RANGE') {
    return {...filter, dateRange: action.payload.dateRange};
  }

  return filter;
}