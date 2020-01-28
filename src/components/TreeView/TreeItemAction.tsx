import  React, { MouseEvent, FunctionComponent }  from 'react';
import { ITreeviewDataItem } from './TreeItem';
import { Icon } from '../Icon/Icon';

export type TreeItemActionProps = {
    node: ITreeviewDataItem,
    expanded: boolean,
    onClick(): void
}

export const TreeItemAction: FunctionComponent<TreeItemActionProps> = (props) => {

    let iconName = props.expanded ? "keyboard_arrow_down" : "keyboard_arrow_right";
    let expandedCss = props.expanded ? "expanded" : "";

    return (<button onClick={props.onClick}> <Icon name="keyboard_arrow_right" className={expandedCss}></Icon></button>)
}