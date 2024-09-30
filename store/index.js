import { createStore } from 'vuex'

export const store = createStore({
    state: {
        cards: []
    },
    mutations: {
        addCard(state, card) {
            state.cards.push(card)
        },
        editCard(state, { index, newText }) {
            state.cards[index].text = newText
        },
        deleteCard(state, index) {
            state.cards.splice(index, 1)
        },
        setCards(state, cards) {
            state.cards = cards
        }
    },
    actions: {
        saveCardsToLocalStorage({ state }) {
            if (process.client) {
                localStorage.setItem('cards', JSON.stringify(state.cards))
            }
        },
        loadCardsFromLocalStorage({ commit }) {
            if (process.client) {
                const cards = JSON.parse(localStorage.getItem('cards') || '[]')
                commit('setCards', cards)
            }
        }
    }
})
