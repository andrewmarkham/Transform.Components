import React from 'react';
import { TreeView } from './TreeView';

import testdata  from './data/testdata.json';
import testdataFlat  from './data/testdata-flat.json';

import { ITreeviewDataItem } from './TreeItem';

import { Provider } from 'react-redux'
import { createStore } from 'redux';

//import ProviderWrapper  from '../../_test/provider';

export default {
  title: 'Treeview',
  component: TreeView,
  includeStories: ['SimpleStory', 'ReduxStory']
}

export const SimpleStory = () => <TreeView node={testdata as ITreeviewDataItem}></TreeView>;


/** */

const REQUEST_NODE_CHILDREN = 'REQUEST_NODE_CHILDREN';
const RECEIVED_NODE_CHILDREN = 'RECEIVED_NODE_CHILDREN';

/** reducers */
function reducer(state:any = [], action:any) {

  switch(action.type){
    case REQUEST_NODE_CHILDREN:
      break;
    case RECEIVED_NODE_CHILDREN:
      break;
  }

  return state;
}


/** actions */

function requestTreeViewChildren(parentId: number) {
  return {
    type: REQUEST_NODE_CHILDREN,
     id: parentId
  }
}

function recieveTreeViewChildren(nodes: ITreeviewDataItem[]) {
  return {
    type: RECEIVED_NODE_CHILDREN,
    nodes: nodes
  }
}

/** */

const store:any= createStore(reducer);

const withProvider = (story: () => React.ReactNode) => (
  <Provider store={store}>
    { story() }
  </Provider>
)

export const ReduxStory = () => <TreeView node={testdataFlat as ITreeviewDataItem}></TreeView>

ReduxStory.story = {
  //name: 'So simple!',
  decorators: [ withProvider ]
  //parameters: { ... }
};