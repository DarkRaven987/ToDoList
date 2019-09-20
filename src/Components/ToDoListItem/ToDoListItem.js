import React from 'react';
import MaterialIcon from 'material-icons-react'

const ToDoListItem = ( props ) => {

  const { number, item, setEditingTask, setTaskDone, setTaskUndone, } = props;
  let isNeutral = item.isDone === 'neutral',
      isDone = item.isDone === 'done',
      isUndone = item.isDone === 'undone';


  return(
      <div className={ isDone ? "itemContainer doneItem" : isUndone ? "itemContainer undoneItem" : 'itemContainer' }>
          <div className="itemNumber">{number+1}.</div>
          <div className="itemTitle">{item.title}</div>
          <div className="itemControlPanel">

              <div className="iconContainer edit" onClick={() => setEditingTask(item)}>
                  <MaterialIcon icon="edit" invert/>
              </div>

              { !isDone && (
                  <div className="iconContainer done" onClick={() => setTaskDone(item.id) }>
                      <MaterialIcon icon="done" invert/>
                  </div>
              )}

              { !isUndone && (
                  <div className="iconContainer delete undone">
                      <MaterialIcon  icon= "close" invert onClick={ () => setTaskUndone(item.id) }/>
                  </div>
              )}
          </div>
      </div>
  )
}


export default ToDoListItem;