import  React, { FunctionComponent }  from 'react';
import { TreeItem, ITreeviewDataItem } from './TreeItem';

export type TreeviewContainerProps = {
    node: ITreeviewDataItem,
    expanded: Boolean
}

export const TreeNode: FunctionComponent<TreeviewContainerProps> = (props) => {

    let { node, expanded } = props;
      
    let children = node?.children ?? [] as Array<object>;
    
    return (
    <ul className="treeview-container" {...props}>
        {
            children.map( (n: any) => (
                expanded ? <TreeItem node={n} ></TreeItem> : null
            ))
        }
 
    </ul>)
}