import React, { useState, useEffect } from 'react'
import '../App.css'
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap'
import RecipeItem from '../components/recipeItem'

function Recipe () {
  const APP_ID = 'f04328f2'
  const APP_KEY = 'c6be58cfebb35816a46264a47a642b6c'
  const apiRequest = `https://api.edamam.com/search?q=$chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(apiRequest)
    const data = await response.json()
    console.log(data.hits)
    setRecipes(data.hits)
  }
  return (
    <Container>
      <Col>
        <Container>
          <InputGroup className='mb-3 pt-3'>
            <FormControl
              placeholder='Search Food Item'
              aria-label='Search Food Item'
              aria-describedby='basic-addon2'
            />
            <InputGroup.Append className='pl-2'>
              <Button className='searchBtn'>Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Container>
        <Container className='pt-5'>
          {recipes.map((recipes, id) => (
            <RecipeItem recipes={recipes} key={id} />
          ))}
        </Container>
      </Col>
    </Container>
  )
}

export default Recipe
