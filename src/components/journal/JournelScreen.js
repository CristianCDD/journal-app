import React from 'react'
import Sidebar from './Sidebar'
import NothingSelected from './NothingSelected'
import NotesScreen from '../notes/NotesScreen'

export default function JournelScreen() {
  return (
    <div className='journal__main-content'>
        <Sidebar/>
        <main>
         {/*  <NothingSelected/> */}
         <NotesScreen/>
        </main>
    </div>
  )
}
