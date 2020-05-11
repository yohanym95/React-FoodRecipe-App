import React from 'react'
import '../App.css'
import { GridListTile, GridListTileBar } from '@material-ui/core'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RecipeItem (props) {
  
  return (
    <Link to={{pathname: `/ItemDetail/${props.ItemId}`, aboutProps:{name:`${props.category}`}}}>
      <GridListTile className='p-2'>
        <Container>
          <img
            src={props.recipes.recipe.image}
            alt={props.recipes.recipe.label}
          />
          <GridListTileBar
            className='ml-3 mr-3'
            title={props.recipes.recipe.label} 
            subtitle={<span>Calories: {props.recipes.recipe.calories}</span>}
          />
        </Container>
      </GridListTile>
    </Link>
  )
}

export default RecipeItem
