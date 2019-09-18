import React from 'react';
import MaterialIcon from 'material-icons-react'

export const ToDoListItem = (props) => {
  const { item, number } = props;
  return(
      <div className="itemContainer">
        <div className="itemNumber">{number+1}.</div>
        <div className="itemTitle">{item.title}</div>
        <div className="itemControlPanel">
            <div className="iconContainer done">
                <MaterialIcon icon="face" invert/>
            </div>
          <div className="iconContainer edit">
              <MaterialIcon icon="edit" invert/>
          </div>
          <div className="iconContainer delete">
              <MaterialIcon icon="delete_forever" invert/>
          </div>
        </div>
      </div>
  )
}
