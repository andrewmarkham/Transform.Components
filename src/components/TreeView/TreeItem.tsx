import  React, { FunctionComponent }  from 'react';
import { TreeItemAction } from './TreeItemAction';
import { TreeItemContent }from './TreeItemContent';
import { TreeNode } from './TreeNode';

export type TreeItemProps = {
    node: object
    onClick():void
}

export const TreeItem: FunctionComponent<TreeItemProps> = (props) => {

    function handleOnClick(){
        //alert("Hello World");
        props.onClick();
    }

    return (<li className="treeItem" {...props}>
        <TreeItemAction onClick={handleOnClick}></TreeItemAction>
        <TreeItemContent node={ props.node }></TreeItemContent>
        <TreeNode node={ props.node }></TreeNode>
    </li>)
}

