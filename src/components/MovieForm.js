import React, { useState } from "react"
import { Form } from "semantic-ui-react"

function MovieForm ({ onAddMovie }) {
  const [formData, setFormData] = useState({
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

    fetch("http://localhost:3001/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(addNewMovie)
    })
      .then((r) => r.json())
      .then((data) => {
        onAddMovie(data)
        setFormData({
          name: "",
          summary: "",
          review: "",
          image: ""
        })
      })
  }

  return (
    <div value="">
      <h3>Add a Movie!</h3>
      <form onSubmit={handleSubmit} className="userInputs" value="">
        <Form.Group widths="equal">
          <Form.Input
            className={"input-field"}
            fluid label="Name"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Form.Input
            className={"input-field"}
            fluid label="summary"
            placeholder="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            />
          <Form.Input
            className={"input-field"}
            fluid
            label="review"
            placeholder="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
          />
          <Form.Input
            className={"input-field"}
            fluid
            label="image"
            placeholder="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button className="submitButton">Submit</Form.Button>
      </form>
    </div>
  )
}

export default MovieForm
