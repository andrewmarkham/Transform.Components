import  React, { FunctionComponent }  from 'react';
import { ITreeviewDataItem } from './TreeItem';

export type TreeItemContentProps = {
    node: ITreeviewDataItem
}

export const TreeItemContent: FunctionComponent<TreeItemContentProps> = (props) => {

    return (<a href="/" {...props}>
        { props.node.name }
    </a>)
}