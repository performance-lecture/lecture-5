import React from 'react';
import Tag from './Tag'
import {zeroPad} from '../helpers'

const ListItem = (props) => {

	const processItem = (value, type) => {
		if(type === 'date') {
			const date = new Date(value * 1000)
			return date.getFullYear() + '.' + zeroPad(date.getMonth(), 2) + '.' + zeroPad(date.getDate(), 2)
		}
		else if(type === 'tag') {
			const data = JSON.parse(value.replace(/\'/gi, '"'))
			let tags = []
			for(let i=0; i<data.length && i<4; i++) {
				tags.push(<Tag key={'tag' + i}>{data[i]}</Tag>)
			}
			if(data.length > 4) {
				tags.push(<span key={'tag-end'}>+{data.length - 4}</span>)
			}
			return tags
		}
		else {
			return value
		}
	}

	const item = props.data.items[props.index]

	return (
		<div style={{...props.style, ...{textAlign: 'center', border: '1px solid black'}}}>
			{/*{props.data.columns.map((col, index) => {
				return (
					<span key={index} style={{border: "1px solid black", padding: '2px', margin: '2px'}} className={'column'}>
						{processItem(item[col.key], col.type)}
					</span>
				)
			})}*/}
			{props.index} Row
		</div>
	)
}

export default ListItem