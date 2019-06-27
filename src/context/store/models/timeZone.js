export const timeZone = {
  initialState: {
    currentTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    allTimeZones: [],
    queriedZones: []
  },
  reducers: {
    setTimeZone: (state, payload) => ({ ...state, currentTimeZone: payload }),
    setAllTimeZones: (state, payload) => ({ ...state, allTimeZones: payload }),
    setQueriedZones: (state, payload) => ({ ...state, queriedZones: payload }),
    clearQueriedZones: state => ({ ...state, queriedZones: [] })
  }
};
