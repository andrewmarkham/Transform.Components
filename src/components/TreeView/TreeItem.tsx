import  React, { FunctionComponent, useState }  from 'react';
import { TreeItemAction } from './TreeItemAction';
import { TreeItemContent }from './TreeItemContent';
import { TreeNode } from './TreeNode';

export type TreeItemProps = {
    node: ITreeviewDataItem
}

export interface ITreeviewDataItem  {
    name: string,
    expanded: boolean,
    children: ITreeviewDataItem[]
}

export const TreeItem: FunctionComponent<TreeItemProps> = (props) => {

    let node = props.node as any;
    const [expanded, setExpanded] = useState(node?.expanded as Boolean);
    function handleOnClick(){
        //alert("Hello Worldddd");
        setExpanded(!expanded);
    }

    return (<li className="treeItem" {...props}>
        <div className="tree-item-action-container">
        <TreeItemAction onClick={handleOnClick}></TreeItemAction>
        <TreeItemContent node={ props.node }></TreeItemContent>
        </div>
        <TreeNode node={ props.node } expanded={expanded}></TreeNode>
    </li>)
}

