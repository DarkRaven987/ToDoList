import React from 'react';
import editIcon from '../../img/edit_icon.svg';
import deleteIcon from '../../img/delete_icon.png';

export const ToDoListItem = (props) => {
  const { item } = props;
  return(
      <div className="itemContainer">
        <div className="itemNumber">{item.id}.</div>
        <div className="itemTitle">{item.title}</div>
        <div className="itemControlPanel">
          <div className="iconContainer edit"><img src={ editIcon } alt="###"/></div>
          <div className="iconContainer delete"><img src={ deleteIcon } alt="###"/></div>
        </div>
      </div>
  )
}
