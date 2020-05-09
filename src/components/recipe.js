import React, { useState, useEffect } from 'react'
import '../App.css'
import {
  Container,
  Col,
  InputGroup,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'
import RecipeItem from '../components/recipeItem'
import { GridList } from '@material-ui/core'

function Recipe () {
  const APP_ID = 'f04328f2'
  const APP_KEY = 'c6be58cfebb35816a46264a47a642b6c'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  const apiRequest = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(apiRequest)
    const data = await response.json()
    console.log(data.hits)
    setRecipes(data.hits)
  }

  const getSearchItem = e => {
    setSearch(e.target.value)
    // console.log(e.target.value)
  }

  const getSearchResult = e => {
    e.preventDefault()
    setQuery(search)
    console.log(search)
  }
  return (
    <Container>
      <Col>
        <Container>
          <Form onSubmit={getSearchResult}>
            <InputGroup className='p-3'>
              <FormControl
                placeholder='Search Food Item'
                aria-label='Search Food Item'
                aria-describedby='basic-addon2'
                type='text'
                onChange={getSearchItem}
              />
              <InputGroup.Append className='pl-2'>
                <Button className='searchBtn' type='submit'>
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Container>
        <Container className='pb-5'>
          <GridList cellHeight={200} cols={3}>
            {recipes.map((recipes, id) => (
              <RecipeItem recipes={recipes} key={id} />
            ))}
          </GridList>
        </Container>
      </Col>
    </Container>
  )
}

export default Recipe
