// DO NOT DELETE

import * as React from 'react'
import { DogImage } from './DogImage'

export const BreedsSelect = props => {
  //console.log(Object.keys(props.breeds))
  return (
    <>
      <select
        value={props.selectedBreed}
        onChange={e => props.setSelectedBreed(e.target.value)}
      >
        {Object.keys(props.breeds).map((breed, i) => (
          <option key={i} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <button
        onClick={() =>
          fetch(
            'https://dog.ceo/api/breed/' +
              props.selectedBreed +
              '/images/random/50',
          )
            .then(response => response.json())
            .then(data => {
              props.setDoglist(data.message)
            })
        }
      >
        表示
      </button>
      {props.doglists.map(dogUrl => (
        <DogImage url={dogUrl} />
      ))}
    </>
  )
}
