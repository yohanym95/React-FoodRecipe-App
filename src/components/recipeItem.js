import React from 'react'
import '../App.css'
import { GridListTile, GridListTileBar, IconButton } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'

function RecipeItem (props) {
  return (
    <GridListTile className='p-2'>
      <img src={props.recipes.recipe.image} alt={props.recipes.recipe.label} />
      <GridListTileBar
        title={props.recipes.recipe.label}
        subtitle={<span>Calories: {props.recipes.recipe.calories}</span>}
        actionIcon={
          <IconButton aria-label={`info about ${props.recipes.recipe.label}`}>
            <InfoIcon />
          </IconButton>
        }
      />
    </GridListTile>
  )
}

export default RecipeItem
