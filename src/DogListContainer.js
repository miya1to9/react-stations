// DO NOT DELETE
import * as React from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = React.useState(0)
  const [selectedBreed, setSelectedBreed] = React.useState('affenpinscher')
  const [doglists, setDoglist] = React.useState([])
  React.useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        setBreeds(data.message)
        //console.log(data.message)
      })
    // setDogURl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg")
  }, [])

  return (
    //<BreedsSelect
    <>
      <div>testです</div>
      {/* <select>
        <option value="nomu">飲む</option>
        <option value="utsu">うつ</option>
        <option value="kau">買う</option>
      </select> */}
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
        doglists={doglists}
        setDoglist={setDoglist}
      />
    </>
  )
}
