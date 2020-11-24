export interface ListModelState {
  list: object;
  page: number;
  count: number;
}

export default {
  state: {
    list: [],
    page: 1,
    count: 0,
  },
  reducers: {
    next(state: ListModelState, action: object){
      state.page = state.page+1;
    },
  },
};
