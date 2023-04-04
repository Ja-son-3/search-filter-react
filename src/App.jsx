import { useState } from "react"
import "./app.css"
import {Users} from "./users"

const App = () => {
  const [query,setQuery] = useState("")


  return (
    <div>
      <input type="text" placeholder="Search..." className="search" onChange={e=> setQuery(e.target.value)} />
      <ul className="list">
        {Users.filter(user=>user.first_name.toLowerCase().includes(query)).map((user)=>(
          <li key={user.id} className="listItem">{user.first_name}</li>
        ))}
        

      </ul>
    </div>
  )
}

export default App