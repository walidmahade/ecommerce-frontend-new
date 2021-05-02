import React from "react";

function DropdownMenuSubItem(props: any) {
  return (
    <div className="dd-sub-items" onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default DropdownMenuSubItem;
