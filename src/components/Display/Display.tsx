import React from 'react'
import styles from 'styled-components'


interface IDisplay {
	today: any
	nextDate: ()=>void
	prevDate: ()=>void
	thisDay: any
}

const DisplayWrapper = styles.div`
display: flex;
justify-content: space-between;
background-color:#1F1F23;
color: #c0c0c0;
padding: 20px 10px;
`

const TextWrapper = styles('span')`
font-size: 30px;
`

const Button = styles('button')`
border: 1px solid #9c9c9c;
background-color: #707070;
color: #fff;
font-size: 14px;
border-radius: 2px;
margin: 2px;
cursor: pointer;
padding: 4px 8px;
text-transform: uppercase;
outline: none
`


export const Display: React.FC<IDisplay> = ({ today, nextDate, prevDate, thisDay }) => {
	return (
		<DisplayWrapper>
		<TextWrapper> { today.format('MMMM') } <b>  { today.format('YYYY') } </b> </TextWrapper>
		<div>  
			<Button onClick={ prevDate }> &lt; </Button>
			<Button onClick={ thisDay } > Today </Button> 
			<Button onClick={ nextDate }> &gt; </Button> 
		</div>
		</DisplayWrapper>
	)
}