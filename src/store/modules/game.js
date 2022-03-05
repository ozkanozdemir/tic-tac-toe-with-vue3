export default {
	state () {
		return {
			cells: [],
			crossClass: {},
			finished: false,
			message: '',
			oScore: parseInt(localStorage.getItem('oScore') || 0),
			messageStatus: 'danger',
			sign: 'x',
			signO: 'o',
			signX: 'x',
			started: false,
			winningOrder: [],
			winningOrders: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6],
			],
			xScore: parseInt(localStorage.getItem('xScore') || 0),
		}
	},
	getters: {
		cells : state => state.cells,
		crossClass : state => {
			const winningOrder = state.winningOrder;
			if (winningOrder && winningOrder.length > 0) {
				return {
					'cross-line-012': winningOrder.every(w => [0, 1, 2].includes(w)),
					'cross-line-345': winningOrder.every(w => [3, 4, 5].includes(w)),
					'cross-line-678': winningOrder.every(w => [6, 7, 8].includes(w)),
					'cross-line-036': winningOrder.every(w => [0, 3, 6].includes(w)),
					'cross-line-147': winningOrder.every(w => [1, 4, 7].includes(w)),
					'cross-line-258': winningOrder.every(w => [2, 5, 8].includes(w)),
					'cross-line-048': winningOrder.every(w => [0, 4, 8].includes(w)),
					'cross-line-246': winningOrder.every(w => [2, 4, 6].includes(w)),
				}
			}
			return {}
		},
		finished : state => state.finished,
		message : state => state.message,
		oScore : state => state.oScore,
		messageStatus : state => state.messageStatus,
		sign : state => state.sign,
		signO : state => state.signO,
		signX : state => state.signX,
		started : state => state.started,
		winningOrder : state => state.winningOrder,
		winningOrders : state => state.winningOrders,
		xScore : state => state.xScore,
	},
	mutations: {
		addCell(state, cell) {
			state.cells.push(cell)
		},
		incrementOScore(state) {
			state.oScore++
			localStorage.setItem('oScore', state.oScore.toString())
		},
		incrementXScore(state) {
			state.xScore++
			localStorage.setItem('xScore', state.xScore.toString())
		},
		resetScores(state) {
			state.oScore = 0
			state.xScore = 0
			localStorage.setItem('oScore', '0')
			localStorage.setItem('xScore', '0')
		},
		setCrossClass(state, payload) {
			state.crossClass = payload
		},
		setFinished(state, payload) {
			state.finished = payload
		},
		setMessage(state, payload) {
			state.message = payload
		},
		setMessageStatus(state, payload) {
			state.messageStatus = payload
		},
		setSign(state, payload) {
			state.sign = payload
		},
		setWinningOrder(state, payload) {
			state.winningOrder = payload
		},
		startGame(state) {
			// Initial values for new game
			state.message = '';
			state.sign = state.signX;
			state.started = true;
			state.finished = false;
			state.winningOrder = [];
			state.crossClass = {};
			state.cells = []
		},
	},
	actions: {
		addCell(context, payload) {
			context.commit('addCell', payload)
		},
		getCellSign(context, payload) {
			context.commit('getCellSign', payload)
		},
		incrementOScore(context) {
			context.commit('incrementOScore')
		},
		incrementXScore(context) {
			context.commit('incrementXScore')
		},
		resetScores(context) {
			context.commit('resetScores')
		},
		setCrossClass(context, payload) {
			context.commit('setCrossClass', payload)
		},
		setFinished(context, payload) {
			context.commit('setFinished', payload)
		},
		setMessage(context, payload) {
			context.commit('setMessage', payload)
		},
		setMessageStatus(context, payload) {
			context.commit('setMessageStatus', payload)
		},
		setSign(context, payload) {
			context.commit('setSign', payload)
		},
		setWinningOrder(context, payload) {
			context.commit('setWinningOrder', payload)
		},
		startGame(context) {
			context.commit('startGame')
		},
		winnerControl(context, payload) {
			context.commit('winnerControl', payload)
		},
	},
}
