import React from "react";

export default class SidebarHeading extends React.Component {
    handleClick = (event) => {
        const { createNewListCallback } = this.props;
        createNewListCallback();
    };
    render() {
        const {canAddList} = this.props;
        let addListButton= "toolbar-button";
        if (canAddList) addListButton += " disabled";
        return (
            <div id="sidebar-heading">
                <input 
                    type="button" 
                    id="add-list-button" 
                    className={addListButton} 
                    onClick={this.handleClick}
                    value="+"
                    disabled={canAddList} />
                    
                Your Playlists
            </div>
        );
    }
}