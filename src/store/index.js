import {createStore} from "vuex";

// store game module
import game from './modules/game'

// create store
const store = createStore({
	modules: {
		game
	},
});

export default store;