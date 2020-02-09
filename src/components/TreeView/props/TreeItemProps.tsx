import { Dictionary } from 'lodash';
import { ITreeviewDataItem } from '../ITreeviewDataItem';
export type TreeItemProps = {
    currentNode: ITreeviewDataItem;
    nodes: Dictionary<Array<ITreeviewDataItem>>;
    requestNodeData?(id: number): void;
};
