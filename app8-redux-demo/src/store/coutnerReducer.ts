export interface CounterState {
  count: number;
}

const initialData: CounterState = {
  count: 0,
};

interface Action {
  type: string;
}
export const counerReducer = (state = initialData, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

      break;
    case "DECREMENT":
      return { ...state, count: state.count - 1 };

      break;
    case "RESET":
      return { ...state, count: 0 };

      break;

    default:
      return state;
  }
};
