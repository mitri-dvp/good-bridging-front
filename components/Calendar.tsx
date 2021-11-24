import React, { useState } from 'react'
import Airdrop from './Airdrop'
import { AirdropT } from '../types'

const Calendar: React.FC<{airdrops: AirdropT[], styles: any}> = ({airdrops, styles}) => {
  const [airdropsState, setAirdropsState] = useState(airdrops)
  const [page, setPage] = useState(0)
  const limit = 3;
  const totalPages =  Math.ceil(airdrops.length / 3)

  const displayAirdrops = () => {
    const array = [];
    for (let i = page * limit; i < (page * limit) + limit; i++) {
      array.push(<Airdrop key={airdrops[i] === undefined ? i : airdrops[i].id} airdrop={airdrops[i]} styles={styles} />);
    }
    return array
  }

  const prevPage = () => {
    if(page < 1) return
    setPage(page - 1)
    displayAirdrops()
  }
  
  const nextPage = () => {
    if(page + 1 >= totalPages) return
    setPage(page + 1)
    displayAirdrops()
  }


  return (
    <>
      <section className={styles.calendar} id="calendar">
        <table>
          <thead>
            <tr>
              <th colSpan={3}>
                <div><img src="/assets/svg/home-airdrop-banner-icon.svg" alt="" /> Calendar</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {displayAirdrops()}
          </tbody>
        </table>
        <div className={styles.controls}>
          <button onClick={prevPage}>
            <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.30184 4.42155L5.09965 7.21937L5.09966 7.21938C5.30011 7.41986 5.30011 7.74487 5.09966 7.94535L5.09961 7.94541C4.89913 8.14579 4.57416 8.14581 4.37368 7.94539L4.37365 7.94537L1.21284 4.78455L1.21281 4.78452C1.0124 4.58405 1.0124 4.25905 1.21281 4.05858L1.21284 4.05855L4.37365 0.897737L4.37362 0.897711L4.37675 0.894687C4.58071 0.697712 4.90572 0.703366 5.1027 0.907324L5.10271 0.907333C5.29483 1.10628 5.29485 1.42169 5.1027 1.62064L5.10272 1.62066L5.09965 1.62374L2.30184 4.42155Z" fill="#fa538b" stroke="#fa538b" strokeWidth="0.5"></path></svg>
          </button>
          <span className={styles.page}>
            <div>{page + 1}</div>
            <div>/</div>
            <div>{totalPages}</div>
          </span>
          <button onClick={nextPage}>
            <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.30184 4.42155L5.09965 7.21937L5.09966 7.21938C5.30011 7.41986 5.30011 7.74487 5.09966 7.94535L5.09961 7.94541C4.89913 8.14579 4.57416 8.14581 4.37368 7.94539L4.37365 7.94537L1.21284 4.78455L1.21281 4.78452C1.0124 4.58405 1.0124 4.25905 1.21281 4.05858L1.21284 4.05855L4.37365 0.897737L4.37362 0.897711L4.37675 0.894687C4.58071 0.697712 4.90572 0.703366 5.1027 0.907324L5.10271 0.907333C5.29483 1.10628 5.29485 1.42169 5.1027 1.62064L5.10272 1.62066L5.09965 1.62374L2.30184 4.42155Z" fill="#fa538b" stroke="#fa538b" strokeWidth="0.5"></path></svg>
          </button>
        </div>
      </section>
    </>
  )
}

export default Calendar
