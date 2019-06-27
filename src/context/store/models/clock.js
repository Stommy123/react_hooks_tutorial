export const clock = {
  initialState: { time: new Date() },
  reducers: {
    setTime: state => ({ ...state, time: new Date() })
  }
};
