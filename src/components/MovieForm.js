import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function MovieForm({ onAddMovie }) {
  const [formData, setFormData] = useState ({
    name: "",
    summary: "",
    review: "",
    image: ""
  })

  const handleChange = (event) => {
    setFormData({
      ...formData, 
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const addNewMovie = {
      name: formData.name,
      summary: formData.summary,
      review: formData.review,
      image: formData.image 
    }

    fetch("http://localhost:3001/movies",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(addNewMovie)
    })
        .then((r) => r.json())
        .then(onAddMovie)
  }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
          fluid label="Name"
          placeholder="smallerinput"
          name="name"
          value={formData.name}
          onChange={handleChange}
          />
          <Form.Input 
            fluid label="summary" 
            placeholder="summary" 
            name="summary" 
            value={formData.summary}
            onChange={handleChange}
            />
          <Form.Input
            fluid
            label="review"
            placeholder="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="image"
            placeholder="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </form>
    </div>
  );
}


export default MovieForm;