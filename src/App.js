// DO NOT DELETE
import * as React from 'react'
import './App.css'
//const url="https://images.dog.ceo/breeds/sheepdog-english/n02105641_3543.jpg";
const url="https://images.dog.ceo/breeds/sheepdog-english/n02105641_3543.jpg";

//import DogImage from './DogImage'
import {Header} from './Header'
import {Description} from './Description'
import { DogListContainer } from './DogListContainer';

/**
 * 
 * @type {React.FC}
 */

export const App = () => {
  return (
    <>
    <Header />
    <Description />
    <DogListContainer />
    </>
  )
}




