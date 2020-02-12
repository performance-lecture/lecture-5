import React from 'react';
import ListHeader from './ListHeader'
import ListBody from './ListBody'

import data from '../assets/data'

const List = (props) => {
	return (
		<table className={'Table'}>
				<ListHeader
					columns={props.columns}
				/>
			{data.map((item, index) => {
				return (
					<ListBody key={index} columns={props.columns} item={item}/>
				)
			})}
		</table>
	)
}

export default List