import { ITreeviewDataItem } from "../ITreeviewDataItem";
import { Dictionary } from 'lodash';
export type TreeViewProps = {
    nodes?: Dictionary<Array<ITreeviewDataItem>>;
    requestNodeData?(id: number): any;
};
