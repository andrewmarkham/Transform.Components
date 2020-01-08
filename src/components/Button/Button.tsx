import  React, { FunctionComponent }  from 'react';


export type ButtonProps = {
  title: string
}

const Button: FunctionComponent<ButtonProps> = ({ title }) => <button>{ title }</button>

export default Button;
