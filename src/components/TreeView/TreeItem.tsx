import  React, { FunctionComponent, useState }  from 'react';
import { TreeItemAction } from './TreeItemAction';
import { TreeItemContent }from './TreeItemContent';
import { TreeNode } from './TreeNode';
import PropTypes from "prop-types";
import { TreeItemProps } from './props/TreeItemProps';
import { treeviewNodeType, treeviewNodeDictionaryType } from './types';

export const TreeItem= ({ currentNode, nodes, requestNodeData }: TreeItemProps) => {

    const [expanded, setExpanded] = useState(currentNode?.expanded as boolean);
    
    function handleOnClick(){

        if (!expanded && (nodes[currentNode.id] ?? []).length === 0) {
            requestNodeData(currentNode.id);
        }

        setExpanded(!expanded);
    }

    return (<li className="tree-item" key={currentNode.id.toString()} >
        <div className="tree-item-action-container">
            <TreeItemAction node={ currentNode } onClick={handleOnClick} expanded={expanded} ></TreeItemAction>
                <TreeItemContent node={ currentNode }></TreeItemContent>
        </div>
        <TreeNode nodes={ nodes } currentNode={ currentNode } expanded={expanded} requestNodeData={requestNodeData}></TreeNode>
    </li>)
}

TreeItem.propTypes = {
    /** current Treeview node data */
    currentNode: treeviewNodeType.isRequired,

    /** all of the loaded treeview data */
    nodes: treeviewNodeDictionaryType.isRequired,
    
    /** triggered when requred to load data */
    requestNodeData: PropTypes.func
  };