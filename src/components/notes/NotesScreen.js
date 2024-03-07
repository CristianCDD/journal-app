import React from 'react'
import NotesAppBar from './NotesAppBar'

export default function NotesScreen() {
  return (
    <div className='notes__main-content'>
        <NotesAppBar/>

        <div className='notes__content'>
            <input type='text' placeholder='Some awesome title' 
            className='notes__title-input'  />
            <textarea placeholder='what happend today' 
            className='notes__textarea'></textarea>

            <div className='notes__image'>
            <img width={480} src='https://e.rpp-noticias.io/xlarge/2022/02/20/494349_1220265.jpg'/>

            </div>
        </div>
    </div>
  )
}
