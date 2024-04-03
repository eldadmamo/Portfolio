import {useState} from "react";


export const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    const onClick  = () => {
        setName('');
        setGuests([...guests,name])
    }

    return (
        <div>
            <h3>Hi There</h3>
            <ul>
                {guests.map((guest) => (
                    <li key={guest}>{guest}</li>
                    )
                )}
            </ul>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={onClick}>Add Guest</button>
        </div>
    )
}

export default GuestList;