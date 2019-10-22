import React from 'react';
import MaterialIcon from 'material-icons-react'
import {sendRequest} from "../../utility";
import { send } from 'q';

const ToDoListItem = ( props ) => {

  const { number, item, setEditingTask, setPanelMode, editTask, deleteTask } = props;
  let isDone = item.task_status === 'done',
      isUndone = item.task_status === 'undone',
    {task_id, task_title, task_status} = item;


  return(
      <div className={ isDone ? "itemContainer doneItem" : isUndone ? "itemContainer undoneItem" : 'itemContainer' }>
          <div className="itemNumber">{number+1}.</div>
          <div className="itemTitle">{task_title}</div>
          <div className="itemControlPanel">

              <div className="iconContainer edit" onClick={ async () => { await setEditingTask( item, number ); setPanelMode(false) }}>
                  <MaterialIcon icon="edit" invert/>
              </div>

              { !isDone && (
                  <div className="iconContainer done" onClick={() => sendRequest('POST', '/tasks/update', `task_id=${task_id}&task_title=${task_title}&task_status=done`, editTask) }>
                      <MaterialIcon icon="done" invert/>
                  </div>
              )}

              { !isUndone && (
                  <div className="iconContainer delete undone" onClick={ () => sendRequest('POST', '/tasks/update', `task_id=${task_id}&task_title=${task_title}&task_status=undone`, editTask)} >
                      <MaterialIcon  icon= "close" invert/>
                  </div>
              )}

              { (isUndone || isDone) && (
                  <div className="iconContainer delete undone" onClick={ () => sendRequest('POST', '/tasks/delete', `task_id=${task_id}`, deleteTask) }>
                      <MaterialIcon  icon= "delete_forever" invert />
                  </div>
              )}
          </div>
      </div>
  )
}


export default ToDoListItem;