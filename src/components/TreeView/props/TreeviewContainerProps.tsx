import { ITreeviewDataItem } from "../ITreeviewDataItem";
import { Dictionary } from 'lodash';
export type TreeviewContainerProps = {
    currentNode: ITreeviewDataItem;
    nodes: Dictionary<Array<ITreeviewDataItem>>;
    expanded: Boolean;
    requestNodeData?(id: number): any;
};
