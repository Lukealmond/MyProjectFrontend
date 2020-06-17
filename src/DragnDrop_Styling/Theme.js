import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";



// Styled components -----------------------------------------------

const ChangeColor = styled.button`
  margin-left: 5px;
  color: black
  outline: none;
  padding: 5px;
  border: 1px solid black
  border-radius: 2px;
  background: white;
`;

const ChangeFont = styled.button`
  margin-left: 5px;
  color: black
  outline: none;
  padding: 5px;
  border: 1px solid red
  border-radius: 2px;
  background: white;
`;










// Styled components -----------------------------------------------





const ThemeContainer = ({ theme, children, dispatch, }) => {
  return (
    <div className="App">
      <ChangeFont  onClick={() => {
            dispatch({
              type: "CHANGE_FONT",
              font:
                "Arial, Helvetica, sans-serif"
            });
          }}
      >
        Arial
      </ChangeFont>
      <ChangeFont  onClick={() => {
            dispatch({
              type: "CHANGE_FONT",
              font:
                "Impact, Charcoal, sans-serif"
            });
          }}
      >
        Impact
      </ChangeFont>
        <ChangeColor
          onClick={() => {
            dispatch({
              type: "CHANGE_COLOR",
              theme:
                "red"
            });
          }}
          theme={theme}
        >
          Red
        </ChangeColor>
        <ChangeColor
          onClick={() => {
            dispatch({
              type: "CHANGE_COLOR",
              theme:
                "Blue"
            });
          }}
          theme={theme}
        >
          Blue
        </ChangeColor>
        <ChangeColor
          onClick={() => {
            dispatch({
              type: "CHANGE_COLOR",
              theme:
                "Green"
            });
          }}
          theme={theme}
        >
          Green
        </ChangeColor>
        <ChangeColor
          onClick={() => {
            dispatch({
              type: "CHANGE_COLOR",
              theme:
                "Black"
            });
          }}
          theme={theme}
        >
          Default
        </ChangeColor>

      {children}
    </div>
  );
};




export default connect(({ theme, font }) => ({ theme, font }))(ThemeContainer);


// Only want to render this in App 
//Where is theme coming from 