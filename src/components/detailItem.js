import React, { useState, useEffect } from 'react'
import '../App.css'
import { Container, Row, Col } from 'react-bootstrap'

function DetailItem (props) {
  const APP_ID = 'f04328f2'
  const APP_KEY = 'c6be58cfebb35816a46264a47a642b6c'

  const [food, setFood] = useState(null)
  const [query, setQuery] = useState('chicken')

  const apiRequest = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  useEffect(() => {
    getRecipes()
    console.log(food)
  }, [food])

  const getRecipes = async () => {
    setQuery(props.location.aboutProps.name)
    const response = await fetch(apiRequest)
    const data = await response.json()
    console.log(data.hits[props.match.params.id])
    setFood(data.hits[props.match.params.id].recipe)
  }

  return (
    <Container className='mt-2 card'>
      {food && (
        <Container className='card-body'>
          <h2 key={0} className='text-primary'>
            {food.label}
          </h2>
          <img className='p-1' src={food.image} alt={food.label} />
          <h4 key={0}>
            <span>
              <b>Calories : </b>
            </span>
            {food.calories}
          </h4>

          <p>
            {food.ingredients.map((ingredient, id) => (
              <Container className='p-2 text-justify'>
                <Row>
                  <Col key={id}>
                    {ingredient.text} - Weight: {ingredient.weight}
                  </Col>
                </Row>
              </Container>
            ))}
          </p>
        </Container>
      )}
    </Container>
  )
}

export default DetailItem
