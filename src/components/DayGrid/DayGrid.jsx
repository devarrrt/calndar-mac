import React from 'react'
import styles from 'styled-components'
import moment from 'moment'



const GridWrapper = styles.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-row: repeat(6, 1fr);
background-color: #474e54;
grid-gap: 1px
`

const CellWrapper = styles.div`
min-width: 140px;
background-color: ${props => props.isWeekend ? '#999' : '#1f1f23'};
height: ${props => props.isHeader ? '24px' : '80px'};
color: ${props => props.isCurrentMonth ? '#fff' : '#000'};
border-bottom: ${props => props.isHeader ? '1px solid #474e54' : null};
`

const RowInCell = styles.div`
display: flex;
color: '#fff';
justify-content: ${props => props.justifyContent ? 'flex-end' : 'flex-start'}`

const DayWrapper = styles.div`
height: 33px;
width: 33px;
display: flex;
align-items: center;
justify-content: center;
`
const CurrentDay = styles.div`
height: 100%;
width: 100%;
background: #b20a10;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
`

export const DayGrid = ({ startDay, today }) => {

	const day = startDay.clone().subtract(1, 'day') //копируем первый день и вычитаем 1, потому что начинается неделя с понедельника, а не с воскресенья
	const arrayDays = [...Array(42)].map(() => day.add(1, 'day').clone()) // создали массив и заполнили его 42 элементами ( 6 * 7 ). эти элементы заполнили "днем"
	const isCurrentDay = (day) => moment().isSame(day, 'day')
	const isCurrentMonth = (day) => today.isSame(day, 'month')

	console.log(isCurrentMonth)

	return (
		<>
			<GridWrapper isHeader>
				{[...Array(7)].map((_, i) => (
					<CellWrapper isHeader isCurrentMonth>
						<RowInCell
							justifyContent>
							{moment().day(i).format('ddd')}
						</RowInCell>
					</CellWrapper>


				))}
			</GridWrapper>

			<GridWrapper>
				{arrayDays.map((day, index) => (
					<CellWrapper
						isWeekend={day.day() === 6 || day.day() === 0} //передаем пропс в CellWrapper. если день суббота или воскресенье, то выходной и будет светлого цвета
						key={index}
						isCurrentMonth={isCurrentMonth(day)}
					>
						<RowInCell
							justifyContent='flex-end'>
							<DayWrapper>
								{isCurrentDay(day) ? <CurrentDay>{day.format('DD')}</CurrentDay> :
									<div>{day.format('DD')} </div>
								}
							</DayWrapper>
						</RowInCell>
					</CellWrapper>
				))}
			</GridWrapper>
		</>
	)
}

//2lesson