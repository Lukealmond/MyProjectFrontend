import React from "react";
import { connect } from "react-redux";


class MultipleChoice extends React.Component {
  state = {
    questions: [""]
  };

  handlePollText = i => e => {
    const { questions } = this.state;
    let ques = [...questions];
    ques[i] = e.target.value;
    this.setState({
      questions: ques
    });
  };

  handlePollDelete = i => e => {
    const { questions } = this.state;
    e.preventDefault();
    let que = [...questions.slice(0, i), ...questions.slice(i + 1)];

    this.setState({
      questions: que
    });
  };

  addPollOption = e => {
    const { questions } = this.state;
    e.preventDefault();
    let ques = questions.concat([""]);
    this.setState({
      questions: ques
    });
  };

  render() {
    const { theme } = this.props;
    const { font } = this.props;

    console.log("questions", this.state.questions);
    const { questions } = this.state;
    return (
      <div>
        {questions.map((question, index) => {
          const length = questions.length;

          return (
            <span key={index}>
              <input
                type="text"
                onChange={this.handlePollText(index)}
                value={question}
                style={{color: theme, fontFamily: font}}
              />

              {length - 1 === index ? (
                <button  onClick={this.addPollOption}>+</button>
              ) : (
                <button onClick={this.handlePollDelete(index)}>X</button>
              )}
              <br />
            </span>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      // To get the list of employee details from store
      theme: state.theme,
      font: state.font
  }
};


export default connect(mapStateToProps, null)(MultipleChoice);