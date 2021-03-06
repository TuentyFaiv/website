export const reducer = (state, action) => {
  switch (action.type) {
    case 'THEME':
      typeof window !== 'undefined' && localStorage.setItem('theme', action.payload ? 'dark' : 'light');
      return {
        ...state,
        dark: action.payload,
      };
    case 'NATIVE':
      return {
        ...state,
        native: action.payload,
      }
    case 'MAIN_REF':
      return {
        ...state,
        mainRef: action.payload,
      }
    default:
      return state;
  }
};