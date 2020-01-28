import React from 'react';
import { action } from '@storybook/addon-actions';

import { Icon } from './Icon';

/**
 * Use `Icon` to create Material Design Icons
 */
export default {
  title: 'Atoms|Icon',
  component: Icon,
  includeStories: /.*Story$/,
  parameters: {
    componentSubtitle: "Material Design Icons"
  }
}


export const DefaultPropsStory = () => <Icon></Icon>;

export const SetIconStory = () => <><Icon name="cloud" ></Icon>
                                  <Icon name="face" ></Icon></>;

export const SizesStory = () => <><Icon name="cloud" size={18} ></Icon>
                                <Icon name="cloud" size={24} ></Icon>
                                <Icon name="cloud" size={36} ></Icon>
                                <Icon name="cloud" size={48} ></Icon></>;

export const CustomClassStory = () => <Icon name="cloud" className="red"  ></Icon>
CustomClassStory.story = {
decorators: [(storyfn: () => React.ReactNode)  => <div><style>.red {'{ color: red'}}</style>{storyfn()}</div>]
}