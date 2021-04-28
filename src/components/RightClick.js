import React from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

/* const handleClick = (e, data) => {
    console.log(data.foo);
} */

export default function RightClick() {
    return (
        <div>
      {/* NOTICE: id must be unique between EVERY <ContextMenuTrigger> and <ContextMenu> pair */}
      {/* NOTICE: inside the pair, <ContextMenuTrigger> and <ContextMenu> must have the same id */}

    <ContextMenuTrigger id="same_unique_identifier">
        <div className="well">Right click to see the menu</div>
    </ContextMenuTrigger>

    <ContextMenu id="same_unique_identifier">
        <MenuItem data={{foo: 'bar'}} /* onClick={this.handleClick} */>
        ContextMenu Item 1
        </MenuItem>
        <MenuItem data={{foo: 'bar'}} /* onClick={this.handleClick} */>
        ContextMenu Item 2
        </MenuItem>
        <MenuItem divider />
        <MenuItem data={{foo: 'bar'}} /* onClick={this.handleClick} */>
        ContextMenu Item 3
        </MenuItem>
    </ContextMenu>

    </div>
    )
}
