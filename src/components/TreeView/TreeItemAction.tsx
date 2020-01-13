import  React, { MouseEvent, FunctionComponent }  from 'react';

export type TreeItemActionProps = {
    onClick(): void
}

export const TreeItemAction: FunctionComponent<TreeItemActionProps> = (props) => {

    function handleOnClick(e: any):void {
        //alert("Hello World 1");
        props.onClick();
    }

    return (<span onClick={handleOnClick} className="treeAction" {...props}>
        
    </span>)
}