import  React, { FunctionComponent }  from 'react';
import PropTypes from "prop-types";
import { TreeItemContentProps } from './props/TreeItemContentProps';
import { treeviewNodeType } from './types';

export const TreeItemContent = ({node}:TreeItemContentProps) => {
    return (<a href="/">
        { node.name }
    </a>)
}

TreeItemContent.propTypes = {
    /** node for the treeview item */
    node: treeviewNodeType.isRequired
  };