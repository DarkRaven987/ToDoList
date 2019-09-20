import React from 'react';

export const EditTaskPanel = (props) => {

    const {
        editTask,
        setEditingTaskTitle,
        setPanelMode,
        setEditingTask,
        getEditTaskNumber,
        getEditingTaskTitle,
        getEditingTask
    } = props;


    const buttonClickHandler = ( isEdit = false ) => {
        let titleCondition = getEditingTaskTitle().length > 4;

        if ( isEdit ) {
            if ( titleCondition ) {
                editTask( getEditingTask() );
                setEditingTask({});
                setPanelMode(true);
            } else alert('Task title is too short. Should be more than 4 symbols.');
        } else {
            setEditingTask({});
            setPanelMode(true);
        }
    };

    return(
        <div className="addTaskContainer">
            <h3>Task #{ getEditTaskNumber() + 1 }:</h3>
            <input id="editTask" type="text" placeholder="Enter task title" value={ getEditingTaskTitle() } onChange={ (e) => setEditingTaskTitle(e) }/>
            <div className="newTaskControlPanel">
                <div className="newTaskButton Add" onClick={ () => buttonClickHandler(true) }>Edit</div>
                <div className="newTaskButton Clear" onClick={ () => buttonClickHandler() }>Cancel</div>
            </div>
        </div>

    )
};

export default EditTaskPanel;