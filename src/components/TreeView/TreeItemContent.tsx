import  React, { FunctionComponent }  from 'react';

export type TreeItemContentProps = {
    node: any
}

export const TreeItemContent: FunctionComponent<TreeItemContentProps> = (props) => {

    return (<a className="treeItem" href="/" {...props}>
        { props.node.name }
    </a>)
}