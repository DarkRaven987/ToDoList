import React from 'react';
import { sendRequest } from '../../utility';

export const EditTaskPanel = (props) => {

    const {
        editTask,
        setEditingTaskTitle,
        setPanelMode,
        getEditingTask,
        getEditingTaskNumber
    } = props;


    const buttonClickHandler = ( isEdit = false ) => {
        const { task_id, task_title, task_status } = getEditingTask();
        let titleCondition = task_title.length > 4;

        if ( isEdit ) {
            if ( titleCondition ) {
                sendRequest("POST", '/tasks/update', `task_id=${task_id}&task_title=${task_title}&task_status=${task_status}`, editTask);
                setPanelMode(true);
            } else alert('Task title is too short. Should be more than 4 symbols.');
        } else {
            setPanelMode(true);
        }
    };

    return(
        <div className="editTaskContainer">
            <h3>Task #{ getEditingTaskNumber() + 1 }:</h3>
            <input id="editTask" type="text" placeholder="Enter task title" value={ getEditingTask().task_title } onChange={ (e) => setEditingTaskTitle(e) }/>
            <div className="TaskControlPanel">
                <div className="Button Add" onClick={ () => buttonClickHandler(true) }>Edit</div>
                <div className="Button Clear" onClick={ () => buttonClickHandler() }>Cancel</div>
            </div>
        </div>

    )
};

export default EditTaskPanel;