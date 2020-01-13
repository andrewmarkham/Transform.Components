import  React, { FunctionComponent }  from 'react';

export type ButtonProps = {
  title: string
}

export const Button: FunctionComponent<ButtonProps> = ({ title }) => <button>{ title }</button>
