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
			'border': '1px solid #000000'
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