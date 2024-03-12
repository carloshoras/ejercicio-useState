import './App.css'
import {useState} from 'react'

function App() {
    const [name, setName] = useState("Sofía")
    const [newName, setNewName] = useState("")

    const changeName = function (event) {
        event.preventDefault()
        if (newName) {
            setName(newName)
            setNewName("")
        }
    }

    return (
        <>
        <h2>Teacher's Name: {name}</h2>
        <form onSubmit={changeName}>
            <input type="text" value={newName} onChange={(event) => {setNewName(event.target.value)}} placeholder="add a name"></input>
            <button type="submit">Add</button>
        </form>

        {/* <ul>
            <li key="Data" onClick={() => {setName("Data")}}>Data</li>
            <li key="Reyes" onClick={() => {setName("Reyes")}}>Reyes</li>
            <li key="Yolanda" onClick={() => {setName("Yolanda")}}>Yolanda</li>
        </ul> */}
        </>
    )

}

export default App
