import React from 'react';
import { TreeItem } from '../TreeItem';

import { ITreeviewDataItem } from "../ITreeviewDataItem";

import { Dictionary } from 'lodash';

import testdata  from '../data/testdata.json';

import { action } from '@storybook/addon-actions';


export default {
  title: 'TreeView|TreeItem',
  component: TreeItem,
  decorators: [(storyfn:any) => {return (<ul className="tree-view">{storyfn()}</ul>)}],
  //includeStories: ['TreeviewWithData', 'ReduxStory'],
  parameters: {
    componentSubtitle: "TreeItem"
  }
}

var emptyData:Dictionary<Array<ITreeviewDataItem>> = {};
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

export const TreeItemOnly = () => <TreeItem currentNode={currentNode} nodes={emptyData}></TreeItem>;
export const TreeItemWithChildren = () => <TreeItem currentNode={currentNode} nodes={someData}></TreeItem>;
export const TreeItemWithEvent = () => <TreeItem currentNode={currentNode} nodes={someData} requestNodeData={action('requestNodeData')} ></TreeItem>;




