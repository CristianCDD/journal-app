import React from 'react'

export default function JournalEntry() {
  return (
    <div className='journal__entry'>
        <div className='journal_entry-picture' style={{
            backgroundSize: "cover",
            backgroundImage: "url(https://saposyprincesas.elmundo.es/wp-content/uploads/2019/04/imprescindibles-de-peru-machu-picchu.jpg)"
        }}></div>
        
        <div className='journal__entry-body pointer'>
            <p className='journal__entry-title'>Un nuevo dia</p>
            <p className='journal__entry-content'>qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi   </p>
        </div>

        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>28</h4>
        </div>
    </div>
  )
}
