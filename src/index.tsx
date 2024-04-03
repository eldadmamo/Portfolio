import ReactDOM from "react-dom";
import React from "react";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
// import  {Parent} from "./props/Parent"
const App  = () => {
    return (
        <div>
            <GuestList/>
            <UserSearch/>
            {/*<Parent/>*/}
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));