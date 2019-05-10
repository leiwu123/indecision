import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
// ReactDOM.render(<IndecisionApp options={['Option one', 'Option two']} />, document.getElementById('app'));


// class OldSyntax {
//     constructor() {

//         console.log(this)
//     }
//     getGreeting = () => {
//         console.log(this);
//         const func = () => console.log(this);
//         func()
//     }
// }

// new OldSyntax().getGreeting()
// const func = new OldSyntax()
// console.log(new OldSyntax())

