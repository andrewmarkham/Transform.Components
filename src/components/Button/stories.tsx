import React from 'react';
import { Button } from './Button';

export default {
  title: 'MyComponent',
  component: Button,
  includeStories: ['SimpleStory', 'ComplexStory']
}

export const SimpleStory = () => <Button title="sfdsdf"> </Button>;
export const ComplexStory = () => <Button title="hello" />;