import uuid from "uuid/v4";
import React, { Component } from "react";
import MultipleChoice from "./MultipleChoice";
import { connect } from "react-redux";
import styled from "styled-components";


export const ITEMS = [
  {
    id: uuid(),
    content: "Video",
    name: "Video"
  },
  {
    id: uuid(),
    content: "Contact",

    name: "Contact"
  },
  {
    id: uuid(),
    content: "Payment",
    name: "Payment"
  },
  {
    id: uuid(),
    content: "Question tool",
    name: "Question tool"
  },
  {
    id: uuid(),
    content: "Legal",
    name: "Legal"
  },
  {
    id: uuid(),
    content: "Multiple Choice",
    name: "Multiple Choice"
  },
  {
    id: uuid(),
    content: "Add Image",
    name: "Add Image"
  },
  {
    id: uuid(),
    content: "Calendar",
    name: "Calender"
  },
  {
    id: uuid(),
    content: "Quotes",
    name: "Quotes"
  },
  {
    id: uuid(),
    content: "Section",
    name: "Section"
  },
];


 const TextArea = styled.textarea`
 
`


export const checkIndex = (name, position) => {
  console.log(`${name} ${position}`)
}


class DisplayedItems extends Component {
  


  
  DisplayIntegration = (name, theme, font, position) => {
    if (name === "Contact") {
      return (
        <div>
          <p>Contact</p>
          <TextArea theme={theme} font={font} style={{color: theme, fontFamily: font}}/>
          <select>
            <option>Email</option>
            <option>Phone</option>
          </select>
        {() => checkIndex(name, position)}
        </div>
      );
    }
    if (name === "Payment") {
      return (
        <div>
        <p>Payment</p>
        <div>
       <TextArea theme={theme} font={font} style={{color: theme, fontFamily: font}}/>
        </div>
        </div>
      );
    }
    if (name === "Video") {
      return (
        <div>
          <p>Video</p>
          <form onSubmit={e => e.preventDefault()}>
          <TextArea theme={theme} font={font} style={{color: theme, fontFamily: font}}/>
          </form>
        </div>
      );
    }
    if (name === "Question tool") {
      return (
        <div>
          <p>Question tool</p>
          <form onSubmit={e => e.preventDefault()}>
          <TextArea theme={theme} font={font} style={{color: theme, fontFamily: font}}/>
          </form>
        </div>
      );
    }
    if (name === "Legal") {
      return (
        <div>
          <p>Legal</p>
          <form onSubmit={e => e.preventDefault()}>
            <input font={font} style={{color: theme, fontFamily: font}} type="file" />
          </form>
        </div>
      );
    }
    if (name === "Multiple Choice") {
      return (
        <div>
          <p>Multiple Choice</p>
          <form onSubmit={e => e.preventDefault()}>
            <MultipleChoice />
          </form>
        </div>
      );
    }
    if (name === "Add Image") {
      return (
        <div>
          <p>Add Image</p>
          <form onSubmit={e => e.preventDefault()}>
          <TextArea theme={theme} font={font} style={{color: theme, fontFamily: font}}/>
            <input type="file" />
          </form>
        </div>
      );
    }
    if (name === "Calender") {
      return (
        <div>
          <p>Calender</p>
          <form onSubmit={e => e.preventDefault()}>
                <input theme={theme} font={font} style={{border: '0', fontFamily: font, color: theme}} type='date'></input>
                <input theme={theme} font={font} style={{border: '0', fontFamily: font, color: theme}} type='time'></input>
          </form>
        </div>
      );
    }
    if (name === "Quotes") {
      return (
        <div>
          <p>Quotes</p>
          <q>
              <TextArea theme={theme} font={font} style={{color: theme, fontFamily: font}}></TextArea>
          </q>
        </div>
      );
    }
    if (name === "Section") {
      return (
        <div>
          <p>Section</p>
              <TextArea placeholder='Heading' theme={theme} font={font} style={{color: theme, fontFamily: font, fontSize: '20px'}}></TextArea>
              <TextArea placeholder='SubHeading' theme={theme} font={font} style={{color: theme, fontFamily: font, fontSize: '13px'}}></TextArea>
        </div>
      );
    }
  };

  state = {
    userInput: ""
  };

  
  handleChange = event => {
    event.preventDefault();
    const ActualInput = event.target.value;
    this.setState({
      userInput: ActualInput
    });
    console.log(ActualInput);
  };

 
 

  render() {
    const { theme } = this.props;
    const { font } = this.props;
    return (
      <div>
      <div>
           {this.DisplayIntegration(this.props.name, theme, font, this.props.position)}
      </div>
     </div>)
  }

  
}

const mapStateToProps = state => {
  return {
      theme: state.theme,
      font: state.font
  }
};


export default connect(mapStateToProps, null)(DisplayedItems);



