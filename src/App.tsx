import React, { useState } from 'react'
import moment from 'moment'
import { DayGrid } from './components/DayGrid/DayGrid'
import { Header } from './components/Header/Header'
import styles from 'styled-components'
import { Display } from './components/Display/Display'


interface Props {}
window.moment = moment

const AppWrapper = styles.div`
border-radius: 8px;
overflow: auto;
-webkit-box-shadow: 0px 5px 21px 8px rgba(0, 0, 0, 0.2);
-moz-box-shadow: 0px 5px 21px 8px rgba(0, 0, 0, 0.2);
box-shadow: 0px 5px 21px 8px rgba(0, 0, 0, 0.2);
border: 1px solid #ccc
`


const App = (props: Props) => {
const [today, setToday] = useState(moment())
	
moment.updateLocale('el', { week: { dow: 1 }}) //изменили исчисление
const startDay = today.clone().startOf('month').startOf('week')//нашли первый день месяца первой недели

const prevDate = ()=> {
setToday( prev => prev.clone().subtract(1, 'month' )) 
}
const nextDate = ()=> {
	setToday( prev => prev.clone().add( 1, 'month' ))
}

const thisDay = () => {
	setToday(moment())
}

	return (
		<AppWrapper>
			<Display 
			prevDate={ prevDate }
			nextDate={ nextDate }
			thisDay={ thisDay }
			today={ today } />
			<DayGrid startDay={ startDay }  today={ today } />
		</AppWrapper>
	)
}

export default App
