
import * as React from 'react';
import ReactDOM from 'react-dom';

export interface HelloProps { compiler: string; framework: string; }

console.log(111)


export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;
export default Hello