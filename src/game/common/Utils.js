import Constants from './Constants';

let Utils = {
	/**
	 *
	 * @param el
	 * @param fn
	 * @returns {*}
	 */
	closest: function(el, fn) {
		let DEPTH_LIMIT = 5,
			depth = 0;
		while (depth < DEPTH_LIMIT) {
			if (fn(el)) {
				return el;
			}
			el = el.parentNode;
			depth++;
		}
	},

	/**
	 *
	 * @param target
	 * @param tagName
	 * @returns {*}
	 */
	closestTag: function (target, tagName) {
		return this.closest(target, function(el) {
			return el.nodeName === tagName;
		});
	},

	/**
	 *
	 * @returns {{width: number, height: number}}
	 */
	getWindowSize: function () {
		let size = {
			width: 0,
			height: 0
		};

		if (document.body && document.body.offsetWidth) {
			size.width = document.body.offsetWidth;
			size.height = document.body.offsetHeight;
		} else if (document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetWidth ) {
			size.width = document.documentElement.offsetWidth;
			size.height = document.documentElement.offsetHeight;
		} else if (window.innerWidth && window.innerHeight) {
			size.width = window.innerWidth;
			size.height = window.innerHeight;
		}

		return size;
	},

	/**
	 * return random row, column index(randomly)
	 * @param rowCount
	 * @param columnCount
	 * @returns {[null,null]}
	 */
	createIndexRandomly: function (rowCount, columnCount) {
		let row = Math.floor(Math.random() * rowCount),
		 	column = Math.floor(Math.random() * columnCount);
		return [row, column]
	},

	/**
	 * return new Block value.
	 * @param limit
	 * @returns {number}
	 */
	createBlockValue: function (limit) {
		return (Math.floor(Math.random() * (limit / 2)) + 1) * 2;
	},

	/**
	 * return color string
	 * @param value
	 * @returns {*}
	 */
	getColor: function (value) {
		let MIN_VALUE = Constants.constants.TR_COUNT / 2,
			index = 0;

		while (value > MIN_VALUE) {
			value = value / MIN_VALUE;
			index++;
		}

		return Constants.colors[index];
	},

	/**
	 * clone array.
	 * @param arr
	 * @returns {Blob|ArrayBuffer|Array.<T>|string|SharedArrayBuffer|Buffer|*}
	 */
	cloneArray: function (arr) {
		return arr.slice(0);
	}
};

export default Utils;