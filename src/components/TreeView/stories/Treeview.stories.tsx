import React from 'react';
import { TreeView } from '../TreeView';

import testdata  from '../data/testdata.json';

import { ITreeviewDataItem } from "../ITreeviewDataItem";

import { Provider, connect } from 'react-redux'

import { Dictionary } from 'lodash';

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

//import ProviderWrapper  from '../../_test/provider';

export default {
  title: 'TreeView|Treeview',
  component: TreeView,
  includeStories: ['TreeviewWithData', 'ReduxStory'],
  parameters: {
    componentSubtitle: "Treeview"
  }
}

var testD = testdata as Dictionary<Array<ITreeviewDataItem>>;

export const TreeviewWithData = () => <TreeView nodes={testdata}></TreeView>;


/** */

const REQUEST_NODE_CHILDREN = 'REQUEST_NODE_CHILDREN';
const RECEIVED_NODE_CHILDREN = 'RECEIVED_NODE_CHILDREN';

const initialState = {
  //currentNodeId:-1,
  //isLoading:false,
  nodes: {
    "-1": [
      {
        id: 0,
        parentId: -1,
        name: "Root",
        expanded: false
      }
    ]
  }
}

/** reducers */
function reducer(state:any, action:any) {

  switch(action.type){
    case REQUEST_NODE_CHILDREN:
        console.log("requestNodeData :" + action.id);
      break;
    case RECEIVED_NODE_CHILDREN:
      console.log("recieveNodeData :" + action.parentId);

      var newNodes = state.nodes;
      newNodes[action.parentId] = action.nodes;

      return {
        nodes: newNodes
      }

      break;
  }

  //console.log("here :)");
  //console.log(state);

  return state;
}


/** actions */
function requestNodeData(id: number) {
  return {
    type: REQUEST_NODE_CHILDREN,
     id: id
  }
}

function recieveNodeData(parentId:number, nodes: ITreeviewDataItem[]) {
  return {
    type: RECEIVED_NODE_CHILDREN,
    parentId:parentId,
    nodes: nodes
  }
}

function fetchData(id: number) {
  return (dispatch:any) => {
    
    dispatch(requestNodeData(id));

    var nodes:Array<ITreeviewDataItem> = [];

    switch (id)
    {
      case 0:
         nodes = [
          {
            id: 1,
            parentId: 0,
            name: "child 1",
            expanded: false
          },
          {
            id: 2,
            parentId: 0,
            name: "child 2",
            expanded: false
          }
        ];
        break;
        case 1:
          nodes = [
           {
             id: 3,
             parentId: 1,
             name: "g child 1",
             expanded: false
           },
           {
             id: 4,
             parentId: 1,
             name: "g child 2",
             expanded: false
           }
         ];
         break;
         nodes = [];
         default:
         break;
    }


    setTimeout(() => dispatch(recieveNodeData(id, nodes)), 500);
    
    /*
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(nodes => dispatch(recieveNodeDat(id, nodes)))
    */
  }
}

const mapStateToProps = (state:any) => ({
  nodes: state.nodes as Dictionary<Array<ITreeviewDataItem>>
})

const mapDispatchToProps = (dispatch:any) => ({
  requestNodeData: (id: number) => dispatch(fetchData(id))
})

/** */

const store:any= createStore(reducer, initialState,applyMiddleware(thunkMiddleware));

const withProvider = (story:any) => (<Provider store={store}>
    { story() }
  </Provider>)

 const TreeViewConnect = connect(
  mapStateToProps,
  //@ts-ignore
  mapDispatchToProps
)(TreeView);

export const ReduxStory = () => <TreeViewConnect></TreeViewConnect>;

ReduxStory.story = {
  //name: 'So simple!',
  decorators: [ withProvider ]
  //parameters: { ... }
};
