import React from 'react'

const ListHeader = (props) => {
	return (
		<div className={'ListHeader row'}>
			{props.columns.map((col, index) => {
				return (
					<span key={index} className={'head column'}>{col.title}</span>
				)
			})}
		</div>
	)
}

export default ListHeader