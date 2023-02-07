import {useEffect, useState} from "react"
import {Route} from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

function Main(props){
    const [sleeps, setSleeps] = useState(null)
    
     const URL = "https://sleep-tracker.herokuapp.com/sleeps/"

    const getSleeps = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setSleeps(data)
    }

    const createSleeps = async (sleep) => {
        await fetch(URL, {
            method: "post", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sleep)
        })

        getSleeps()
    }

    const updateSleeps = async (sleep, id) => {
        // make the put request to update a one cheese
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sleep)
        })
        // update list of one cheese
        getSleeps()
    }

    const deleteSleeps = async (id) => {
      //make delete request 
      await fetch(URL + id, {
        method: "delete",
      })
      //update list of people
      getSleeps()
    }

    useEffect(() => {
        getSleeps()
    }, [])
  
  
    return (
    <main>
      
        <Route exact path="/">
          <Index sleeps={sleeps} createSleeps={createSleeps} />
        </Route>
        <Route
          path="/sleeps/:id"
          //the way router props are made available is through this function
          //router props are "rp", we do this so show gets them as props. 
          //
          render={rp => (
            <Show
              sleeps={sleeps}
              updateSleeps={updateSleeps}
              deleteSleeps={deleteSleeps}
              //because the router props are an object and 
              //Im going to spread the object so I can show all of its props
              //we do this so we can make each individual property its own props
              {...rp}
            />
          )}
        />
      
    </main>
  )
}

export default Main

   