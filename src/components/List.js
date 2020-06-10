import React from 'react'
import ListHeader from './ListHeader'
import ListItem from './ListItem'
import {FixedSizeList} from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

import data from '../assets/data'

const List = (props) => {
	console.log(data.length)
	return (
		<div style={{height: '1000px'}}>
			{/*<ListHeader
				columns={props.columns}
			/>*/}

			{/*<AutoSizer>
				{({height, width}) => (*/}
					<FixedSizeList
						height={700}
						width={900}
						itemCount={data.length}
						itemSize={50}
						itemData={{columns: props.columns, items: data}}
						overscanCount={100}
					>
						{ListItem}
					</FixedSizeList>
				{/*)}
			</AutoSizer>*/}
		</div>
	)
}

/*
{data.map((item, index) => {
				return (
					<ListItem key={index} columns={props.columns} item={item}/>
				)
			})}
 */
export default List