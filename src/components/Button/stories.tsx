//import React from 'react';
/*
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';


storiesOf('Button', module)
  .add('with text', () => <Button title="nm,mn,mn">Hello Button</Button>)

*/

import React from 'react';
import { Button } from './Button';

export default {
  title: 'MyComponent',
  component: Button,
  includeStories: ['SimpleStory', 'ComplexStory']
}

export const SimpleStory = () => <Button title="sfdsdf"> </Button>;
export const ComplexStory = () => <Button title="hello" />;