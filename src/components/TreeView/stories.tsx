import React from 'react';
import { TreeNode } from './TreeNode';
import { TreeView } from './TreeView';

import testdata  from './data/testdata.json';
import { ITreeviewDataItem } from './TreeItem';

export default {
  title: 'Treeview',
  component: TreeView,
  includeStories: ['SimpleStory']
}

export const SimpleStory = () => <TreeView node={testdata as ITreeviewDataItem}></TreeView>;
