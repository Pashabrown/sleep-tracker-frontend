import { useState } from "react"
function Show(props) {
  const id = props.match.params.id
  const sleeps = props.sleeps
  const sleep = sleeps.find((p) => {
        return p._id === id
    })

  const [editForm, setEditForm] = useState(sleep)

  // handleChange function for form
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.updateSleeps(editForm, sleep._id)
    props.history.push("/")
  }

  const removeSleep = () => {
    props.deleteSleeps(sleep._id)
    props.history.push("/")
  }

    return (
      
    <div className="sleep">
      
      <h1>{sleep.date}</h1>
      <h2>{sleep.duration}</h2>
      <h2>{sleep.quality}  </h2>
      <h2>{sleep.environment}</h2>
      <h2>{sleep.Disruptors}</h2>
      <button id="delete" onClick={removeSleep}>Delete</button>

        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={editForm.date}
                name="date"
                placeholder="date"
                onChange={handleChange}
                
            />
            <input 
                type={Number}
                value={editForm.duration}
                name="duration"
                placeholder="duration"
                onChange={handleChange}
                
            />

            <input
                type="text"
                value={editForm.quality}
                name="quality"
                placeholder="quality"
                onChange={handleChange}
                />

            <input
                type="text"
                value={editForm.environment}
                name="environment"
                placeholder="environment"
                onChange={handleChange}
            />
            <input
                type="text"
                value={editForm.Disruptors}
                name="Disruptors"
                placeholder="Disruptors"
                onChange={handleChange}
                />
            <input type="submit" value="Update Sleep"/>
            
        </form>
    </div>
  )
}

export default Show