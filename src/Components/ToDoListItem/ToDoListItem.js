import React from 'react';
import MaterialIcon from 'material-icons-react'

const ToDoListItem = ( props ) => {

  const { number, item, setEditingTask, setTaskDone, setTaskUndone, setPanelMode, deleteTask } = props;
  let isNeutral = item.isDone === 'neutral',
      isDone = item.isDone === 'done',
      isUndone = item.isDone === 'undone';


  return(
      <div className={ isDone ? "itemContainer doneItem" : isUndone ? "itemContainer undoneItem" : 'itemContainer' }>
          <div className="itemNumber">{number+1}.</div>
          <div className="itemTitle">{item.title}</div>
          <div className="itemControlPanel">

              <div className="iconContainer edit" onClick={ async () => { await setEditingTask( item, number ); setPanelMode(false) }}>
                  <MaterialIcon icon="edit" invert/>
              </div>

              { !isDone && (
                  <div className="iconContainer done" onClick={() => setTaskDone(item.id) }>
                      <MaterialIcon icon="done" invert/>
                  </div>
              )}

              { !isUndone && (
                  <div className="iconContainer delete undone" onClick={ () => setTaskUndone(item.id) } >
                      <MaterialIcon  icon= "close" invert/>
                  </div>
              )}

              { (isUndone || isDone) && (
                  <div className="iconContainer delete undone" onClick={ () => deleteTask(item.id) }>
                      <MaterialIcon  icon= "delete_forever" invert />
                  </div>
              )}
          </div>
      </div>
  )
}


export default ToDoListItem;