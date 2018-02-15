import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import {
    QuizQuestion,
} from 'components';

const codeFigure = `var name = "Bill";

function caller(func){
  var myObject = {
    name: "Joe"
  };
  
  return func(myObject);
}

function callee(param) {
  return param.name
}

var c = caller(callee);`;

const question = `Select the answer below that would set a variable named \`myVariable\` to \`3\``;

const answers = [
    {
        type: `code`,
        text: `myVariable(3)`,
    },
    {
        type: `code`,
        text: `var myVariable = 3;`,
    },
    {
        type: `code`,
        text: `var myVariable[3]`,
    },
    {
        type: `code`,
        text: `var myVariable = {
    3
}`,
    },
];

const incorrectFeedback = `This is a basic question. If this wasn't a mistake input, you need to learn the fundamentals of Javascript.`;


export default class VariableDeclaration extends PureComponent {
    render() {
        return (
            <QuizQuestion
                codeFigure={codeFigure}
                question={question}
                answers={answers}
                incorrectFeedback={incorrectFeedback}
            />
        );
    }
}
