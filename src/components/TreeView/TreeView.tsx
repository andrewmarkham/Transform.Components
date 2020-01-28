import  React, { FunctionComponent, useState }  from 'react';
import { TreeItem, ITreeviewDataItem } from './TreeItem';


export type TreeViewProps = {
    node: ITreeviewDataItem
}

export const TreeView: FunctionComponent<TreeViewProps> = (props) => {

    return (<ul className="tree-view" {...props}>
        <TreeItem node={ props.node }   ></TreeItem>
    </ul>)
}
