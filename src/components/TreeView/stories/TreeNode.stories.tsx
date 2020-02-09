import React from 'react';
import { TreeNode } from '../TreeNode';

import { ITreeviewDataItem } from "../ITreeviewDataItem";

import { Dictionary } from 'lodash';

import testdata  from '../data/testdata.json';

import { action } from '@storybook/addon-actions';


export default {
  title: 'TreeView|TreeNode',
  component: TreeNode,
  decorators: [(storyfn:any) => {return (<div className="border"><ul className="tree-view">{storyfn()}</ul></div>)}],
  //includeStories: ['TreeviewWithData', 'ReduxStory'],
  parameters: {
    componentSubtitle: "TreeNode"
  }
}

var someData:Dictionary<Array<ITreeviewDataItem>>  = {
    "-1": [],
    "0": [{
        id: 2,
        parentId: 0,
        name: "Child 1",
        expanded: false
    },
    {
        id: 3,
        parentId: 0,
        name: "Child 2",
        expanded: false
    }]
};

var currentNode = testdata[-1][0];

export const TreeNodeExpanded = () => <TreeNode currentNode={currentNode} nodes={someData} expanded={true} ></TreeNode>;
export const TreeNodeWithEvent = () => <TreeNode currentNode={currentNode} nodes={someData} expanded={true} requestNodeData={action('requestNodeData')} ></TreeNode>;

export const TreeNodeCollapsed = () => <TreeNode currentNode={currentNode} nodes={someData} expanded={false} ></TreeNode>;

//export const TreeItemWithChildren = () => <TreeItem currentNode={currentNode} nodes={someData}></TreeItem>;




