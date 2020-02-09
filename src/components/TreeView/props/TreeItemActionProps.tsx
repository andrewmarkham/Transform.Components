import { ITreeviewDataItem } from "../ITreeviewDataItem";
export type TreeItemActionProps = {
    node: ITreeviewDataItem;
    expanded: boolean;
    onClick(): void;
};
