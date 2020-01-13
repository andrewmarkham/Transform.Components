import  React, { FunctionComponent, useState }  from 'react';
import { TreeItem } from './TreeItem';


export type TreeViewProps = {
    node: object
}

export const TreeView: FunctionComponent<TreeViewProps> = (props) => {

    return (<ul className="treeView" {...props}>
        <TreeItem node={ props.node } onClick={() => {}} ></TreeItem>
    </ul>)
}
