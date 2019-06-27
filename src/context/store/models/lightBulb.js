export const lightBulb = {
  initialState: { lightOn: false },
  reducers: {
    toggleLightBulb: state => ({ ...state, lightOn: !state.lightOn })
  }
};
