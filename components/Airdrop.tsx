import React from "react"
import dayjs from "dayjs"

const Airdrop: React.FC<any> = ({ airdrop, styles }) => {

  const getAirdropDate = (date: string): string => {
    const airdropDate = dayjs(date)
    const currentDate = dayjs().subtract(1, 'day')
    return airdropDate > currentDate ? airdropDate.format('MMMM Do') : 'Passed'
  }

  const date = getAirdropDate(airdrop.date)

  return (
    <tr>
      <td className={styles.date}>
        <div>{date}</div>
      </td>
      <td className={styles.name}>
        <div>{airdrop.name}</div>
      </td>
      <td className={styles.value}>
        <div>{airdrop.description}</div>
      </td>
    </tr>
  )
}

export default Airdrop