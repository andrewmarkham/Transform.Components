import  React, { FunctionComponent }  from 'react';
import { TreeItem, ITreeviewDataItem } from './TreeItem';

export type TreeviewContainerProps = {
    node: ITreeviewDataItem,
    expanded: Boolean
}

export const TreeNode: FunctionComponent<TreeviewContainerProps> = ({ node, expanded } ) => {

    let children = node?.children ?? [] as Array<object>;
    
    return (
    <ul>
        {
            children.map( (n: ITreeviewDataItem) => (
                expanded ? <TreeItem node={n} key={n.id.toString()} ></TreeItem> : null
            ))
        }
  
    </ul>)
}