import React from 'react';
import { TreeNode } from './TreeNode';
import { TreeView } from './TreeView';

import testdata from './data/testdata.json';

export default {
  title: 'Treeview',
  component: TreeView,
  includeStories: ['SimpleStory']
}

export const SimpleStory = () => <TreeView node={testdata}></TreeView>;
