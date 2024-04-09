import ReactDOM from "react-dom";
import React from "react";
import GuestList from "./state/GuestList";
// import UserSearch from "./classes/UserSearch";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
// import  {Parent} from "./props/Parent"
const App  = () => {
    return (
        <div>
            {/*<EventComponent/>*/}
            {/*<GuestList/>*/}
            <UserSearch/>
            {/*<Parent/>*/}
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));