/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
const initialState = {
  searchTerm: "",
  filterBy: "",
  sortBy: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "filter/sortBy":
      console.log(action.payload);
      return {
        ...state,
        sortBy: action.payload,
      };
    case "filter/searchTerm":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "filter/filterBy":
      // console.log(action.payload);
      return {
        ...state,
        filterBy: action.payload,
      };
    default:
      return state;
  }
};
const FilterContext = createContext();
function FilterContextProvider({ children }) {
  const [{ searchTerm, filterBy, sortBy }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <FilterContext.Provider value={{ searchTerm, filterBy, sortBy, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
}
function useFilterContext() {
  return useContext(FilterContext);
}

export { FilterContext, FilterContextProvider, useFilterContext };
