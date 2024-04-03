import {useState} from "react";

const users = [
    {name: 'Sarah', age: 20},
    {name: 'Alex', age: 20},
    {name: 'Micheal', age: 20}
]
export const UserSearch: React.FC = () => {
    const [name, setName] = useState("");
    const [user, setUser] = useState<{name:String, age: number} | undefined>();

    const onClick = () => {
        const foundUser =
            users.find((user) => {
                return user.name === name;

        });
        setUser(foundUser)
    }
    return (
        <div>

            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Click Me</button>
            <div>
                <h3>{user && user.name}</h3>
                {user && user.age}
            </div>
        </div>
    )

}
export default UserSearch;

