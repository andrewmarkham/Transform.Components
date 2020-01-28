import  React, { FunctionComponent, useState }  from 'react';
import { TreeItemAction } from './TreeItemAction';
import { TreeItemContent }from './TreeItemContent';
import { TreeNode } from './TreeNode';

export type TreeItemProps = {
    node: ITreeviewDataItem
}

export interface ITreeviewDataItem  {
    id: number,
    parentId: number,
    name: string,
    expanded: boolean
}

export const TreeItem: FunctionComponent<TreeItemProps> = (props) => {

    let { node } = props;
    
    const [expanded, setExpanded] = useState(node?.expanded as boolean);
    function handleOnClick(){
        //alert("Hello Worldddd");
        setExpanded(!expanded);
    }

    return (<li className="tree-item" {...props} key={node.id.toString()} >
        <TreeItemAction node={ props.node } onClick={handleOnClick} expanded={expanded} ></TreeItemAction>
        <TreeItemContent node={ node }></TreeItemContent>
        <TreeNode node={ node } expanded={expanded}></TreeNode>
    </li>)
}

