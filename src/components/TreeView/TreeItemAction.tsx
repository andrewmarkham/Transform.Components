import  React, { MouseEvent, FunctionComponent }  from 'react';
import PropTypes from "prop-types";
import { Icon } from '../Icon/Icon';
import { TreeItemActionProps } from './props/TreeItemActionProps';
import { treeviewNodeType } from './types';

export const TreeItemAction= ({node, expanded, onClick}: TreeItemActionProps) => {

    let expandedCss = expanded ? "expanded" : "";

    return (<button onClick={onClick}> <Icon name="keyboard_arrow_right" className={expandedCss}></Icon></button>)
}

TreeItemAction.propTypes = {
    /** node for the treeview item */
    node: treeviewNodeType.isRequired,

    /** indicates whether the node is expanded */
    expanded: PropTypes.bool.isRequired,
    
    /** triggered when node is clicked */
    onClick: PropTypes.func
  };