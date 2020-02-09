import  React from 'react';
import { TreeItem } from './TreeItem';
import { ITreeviewDataItem } from "./ITreeviewDataItem";
import PropTypes from "prop-types";
import { TreeViewProps } from './props/TreeViewProps';
import { treeviewNodeDictionaryType } from './types';

//** Treeview */
export const TreeView = ({nodes, requestNodeData}:TreeViewProps) => {

    let id = -1;
    let children = nodes[id] ?? [] as Array<ITreeviewDataItem>;

    return (<ul className="tree-view" >
       { children.map( (n: ITreeviewDataItem) => (
            <TreeItem currentNode={n} nodes={nodes} key={n.id.toString()} requestNodeData={requestNodeData} ></TreeItem>
        ))}
    </ul>)
}


TreeView.propTypes = {

    /** all of the loaded treeview data */
    nodes: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.any)),

    /** triggered when requred to load data */
    requestNodeData: PropTypes.func
  };

TreeView.defaultProps = {
    nodes: {}
}