import {useState} from "react"
import {Link} from "react-router-dom"
import {Helmet} from 'react-helmet';
function Index(props){
//adding a state to our form
    const [newForm, setNewForm] = useState({
    date: "",
    duration: "",
    quality: "",
    environment: "",
    Disruptors: ""
  });

  // handleChange function for form
  //i want to change the property that has the name of the input 
  //and I want the target to match the value
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
      //it just makes sure the page doesnt refresh itself
      //im gonna pass create people the state in our new form
      //after form updates I want it to go back to a blank form
      //so thats why we set new form
    event.preventDefault();
    props.createSleeps(newForm);
    setNewForm({
      date: "",
      duration: "",
      quality: "",
      environment: "",
      Disruptors: ""
    });
  };

    // loaded function
  const loaded = () => {

    
    return props.sleeps.map((sleep) => (
      <div key={sleep._id} className="sleep" background="black">
          <Helmet>
                <style>{'body { background-color: grey; }'}</style>
            </Helmet>
        <hr></hr>
        <Link to={`/sleeps/${sleep._id}`}><h1>{sleep.date}</h1></Link>
        <h4>{sleep.duration} </h4>
        <h4>{sleep.quality}</h4>
        <h4>{sleep.environment}</h4>
        <h4>{sleep.Disruptors}</h4>
        <hr></hr>
      </div>
      
    ));
  };
 
  const loading = () => {
        return <h1>Loading...</h1>
    }

      
  return <section>
   <a> <div>Add Sleep DATA here</div></a>
    <br></br>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.date}
          name="date"
          //tell the user knows what to type in there
          placeholder="date"
          onChange={handleChange}
        />
        <input
          type={Number}
          value={newForm.duration}
          name="duration"
          //tell the user knows what to type in there
          placeholder="duration"
          onChange={handleChange}
        />
        <input
          type="text"
          //the value is connected to the image 
          value={newForm.quality}
          //the name is the image
          name="quality"
          //so the user knows what to put in that box
          placeholder="quality"

          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.environment}
          name="environment"
          placeholder="environment"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.Disruptors}
          name="Disruptors"
          placeholder="Disruptors"
          onChange={handleChange}
        />
        <input type="submit" value="Create Sleep-Tracker" />
      </form>
      {props.sleeps ? loaded() : loading()}
    </section>
} 
export default Index