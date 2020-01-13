import  React, { FunctionComponent, useState }  from 'react';
import { TreeItem } from './TreeItem';
import {isArray, isFunction} from 'lodash';

export type TreeviewContainerProps = {
    node: object
}

export const TreeNode: FunctionComponent<TreeviewContainerProps> = (props) => {

    let node = props.node as any;
    const [expanded, setExpanded] = useState(node?.expanded as Boolean);

    let children = node?.children ?? [] as Array<object>;

    function handleOnClick(){
        //alert("Hello Worldddd");
        setExpanded(!expanded);
    }

    return (
    <ul className="treeview-container" {...props}>
        {
            children.map( (n: any) => (
                expanded ? <TreeItem node={n} onClick={handleOnClick}></TreeItem> : null
            ))
        }
 
    </ul>)
}