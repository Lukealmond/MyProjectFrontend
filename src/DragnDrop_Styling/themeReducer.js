
const CHANGE_COLOR = 'CHANGE_COLOR'
const CHANGE_FONT = 'CHANGE_FONT'


const initState = {
  theme: "Black",
  font: '',
};

export default (state = initState, action) => {
          switch (action.type) {
            case CHANGE_FONT: {
              return { 
                font: action.font,
                theme: state.theme
              };
            }
            case CHANGE_COLOR: {
              return { 
                theme: action.theme,
                font: state.font
               };
            }

             default: {
                    return state;
                  }            
  
              }
            }


