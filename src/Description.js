// DO NOT DELETE
import * as React from 'react'
import {DogImage} from './DogImage'

export const Description = () => {
  const [dogUrl,setDogURL] = React.useState("https://images.dog.ceo/breeds/sheepdog-english/n02105641_3543.jpg")
  const createdogUrl = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json() )
    .then(data => {setDogURL(data.message)})
    // setDogURl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg")
  }
  return(
    <>
    <div>犬の画像を表示するサイトです</div>
   <DogImage url={dogUrl}/>
    <button onClick={() => createdogUrl()}>更新</button>
    </>
  );
};

//export default Description;
