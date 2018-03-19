export default function cryptocurrency(state = {data:[],
    loading:"Please click the 'Get data' button to get currency data"}, action){
      switch (action.type) {
        case 'CRYPTOCURRENCY':
          return {...state,
            data: action.data,
            loading: "loaded"
          };
        case 'CRYPTOCURRENCY_LOADING':
          return {...state,
            loading: "loading..."
          };
        default:
          return state;
      }
  }
  