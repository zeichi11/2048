import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux';
import Constants from '../common/Constants';

class TableRow extends Component {
	constructor(props) {
		super(props);
	}

	/**
	 * render Component
	 * @returns {XML}
	 */
	render() {
		const inlineStyle = {
			'outline': '10px solid #f7e19b',
			'border': '2px solid #f7e19b',
			'borderRadius': '10px 10px 10px 10px'
		};
		const renderColumns = function (columns) {
			return columns.map((column, i) => {
				return (
					<td key={i}
						style={inlineStyle}>
					</td>
				);
			});
		};

		return(
			<tr>
				{renderColumns(this.props.columns)}
			</tr>
		);
	}
}

export default TableRow;