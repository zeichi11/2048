import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux';
import Constants from '../common/Constants';
import Utils from '../common/Utils';

class Block extends Component {
	constructor(props) {
		super(props);
	}

	/**
	 * render Component
	 * @returns {XML}
	 */
	render() {
		const renderBlocks = (board, width, height) => {
			const GRID_LINE_WIDTH = Constants.constants.GRID_LINE_WIDTH;
			const GRID_LINE_BORDER_WIDTH = Constants.constants.GRID_LINE_BORDER_WIDTH;
			const TR_COUNT = Constants.constants.TR_COUNT;

			// const getSize = () => ((width - GRID_LINE_BORDER_WIDTH * 2) - ((GRID_LINE_WIDTH + GRID_LINE_BORDER_WIDTH + 1) * (TR_COUNT + 1))) / TR_COUNT;
			const getSize = () => (width - (GRID_LINE_WIDTH + (GRID_LINE_BORDER_WIDTH * 2)) * (TR_COUNT + 1)) / TR_COUNT;
			const getPosition = (i, j, size) => {
				let left = j * size + ((GRID_LINE_WIDTH + (GRID_LINE_BORDER_WIDTH * 2)) * (j + 1)),
					top = i * size + ((GRID_LINE_WIDTH + (GRID_LINE_BORDER_WIDTH * 2)) * (i + 1));
				return [top, left];
			};

			let blockList = [];

			board.map((rowBlocks, i) => {
				blockList[i] = rowBlocks.map((blockValue, j) => {
					if (blockValue > 0) {
						let size = getSize(i, j),
							position = getPosition(i, j, size),
							fontSize = size * 0.6,
							backgroundColor = Utils.getColor(blockValue),
							inlineStyle = {
								'position': 'absolute',
								'width': size + 'px',
								'height': size + 'px',
								'lineHeight': size + 'px',
								'top': position[0] + 'px',
								'left': position[1] + 'px',
								'backgroundColor': backgroundColor,
								'color': '#ffffff',
								'fontSize': fontSize + 'px',
								'fontWeight': 'bold',
								'textAlign': 'center',
								'borderRadius': '8px 8px 8px 8px'
							};

						return (
							<div key={j}
								 style={inlineStyle}>
								{blockValue}
							</div>
						);
					}
				});
			});

			return blockList;
		};

		return (
			<div>
				{renderBlocks(this.props.board, this.props.width, this.props.height)}
			</div>
		)
	}
}

export default Block;