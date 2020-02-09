import  React, { FunctionComponent }  from 'react';
import { TreeItem } from './TreeItem';
import { ITreeviewDataItem } from "./ITreeviewDataItem";
import PropTypes from "prop-types";
import { TreeviewContainerProps } from './props/TreeviewContainerProps';
import { treeviewNodeType, treeviewNodeDictionaryType } from './types';

export const TreeNode = ({ currentNode, nodes, expanded, requestNodeData }:TreeviewContainerProps ) => {

    let children = nodes[currentNode.id] ?? [] as Array<object>;
    
    return (
    <ul>
        {
            children.map( (n: ITreeviewDataItem) => (
                expanded ? <TreeItem currentNode={n} nodes={nodes} key={n.id.toString()} requestNodeData={requestNodeData} ></TreeItem> : null
            ))
        }
    </ul>)
}

TreeNode.propTypes = {
    /** current Treeview node data */
    currentNode: treeviewNodeType.isRequired,

    /** all of the loaded treeview data */
    nodes: treeviewNodeDictionaryType.isRequired,

    /** indicates whether the node is expanded */
    expanded: PropTypes.bool.isRequired,

    /** triggered when requred to load data */
    requestNodeData: PropTypes.func
  };