import React from 'react';

export default class DropDown extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isOpened: false
        }
    }

    changeOpenStatus = () => {
        this.setState({isOpened: !this.state.isOpened});
    }

    render() {
        const { title, children } = this.props;
        const { isOpened } = this.state;
        return (
                <div className="DropDown">
                    <div className='dropdowner' onClick={() => this.changeOpenStatus()}> 
                        <span>{ title }</span>
                        {
                            isOpened ? 
                                <i className="material-icons md-24">keyboard_arrow_up</i>
                                :
                                <i className="material-icons md-24">keyboard_arrow_down</i>
                        }
                    </div>
                    <div className={ isOpened ? "under_dropdown_item opened" : "under_dropdown_item" }>
                        {
                            children
                        }
                    </div>
                </div>
        )
    }
}