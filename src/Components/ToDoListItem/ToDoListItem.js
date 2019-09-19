import React from 'react';
import MaterialIcon from 'material-icons-react'

class ToDoListItem extends React.Component {
  constructor(props){
      super(props);

      this.state =  {
          status: 'neutral',
      }
  }

    setItemDone = () => {
        this.setState({ status: 'done'});
    };

    setItemUndone = () => {
        this.setState({ status: 'undone'});
    };

  render(){
      const { number, item} = this.props;
      const { status } = this.state,
          isNeutral = status === 'neutral',
          isDone = status === 'done',
          isUndone = status === 'undone';

      return(
          <div className={ isDone ? "itemContainer doneItem" : isUndone ? "itemContainer undoneItem" : 'itemContainer' }>
              <div className="itemNumber">{number+1}.</div>
              <div className="itemTitle">{item.title}</div>
              <div className="itemControlPanel">

                  <div className="iconContainer edit">
                      <MaterialIcon icon="edit" invert/>
                  </div>

                  { !isDone && (
                      <div className="iconContainer done" onClick={() => this.setItemDone() }>
                          <MaterialIcon icon="done" invert/>
                      </div>
                  )}

                  { !isUndone && (
                      <div className="iconContainer delete undone">
                          <MaterialIcon  icon= "close" invert onClick={ () => this.setItemUndone() }/>
                      </div>
                  )}
              </div>
          </div>
      )
  }
}


export default ToDoListItem;