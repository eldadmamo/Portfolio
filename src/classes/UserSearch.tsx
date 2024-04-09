import {useState} from "react";

const users = [
    {name: 'Sarah', age: 20},
    {name: 'Alex', age: 20},
    {name: 'Micheal', age: 20}
]

export const UserSearch: React.FC = ()  => {
    const [name, setName] = useState("");
    const [seek, setSeek] = useState<{name: String, age: number} | undefined>()

    const onClick = () => {
        const love = users.find((seek) => {
            return seek.name === name;
        })
        setSeek(love);
    }
    return (
        <div>
            <h2>Find User</h2>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={onClick}> Find </button>
            <div>
                {seek && seek.name}
                {seek && seek.age}
            </div>
        </div>
    )
}

export default UserSearch;