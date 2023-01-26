import {  _GettersTree, _ActionsTree, MutationType } from 'pinia'

interface User {
    id: number,
    name: string,
    role: string
}

interface State {
    userList: User[]
}

const state: State = {
    userList: [
        { id: 1, name: 'Mario', role: 'Admin' },
        { id: 2, name: 'ddd', role: 'hh' },
        { id: 3, name: 'ttt', role: 'yy' }
    ]
}

const getters: _GettersTree<State> = {
    userlist: state => {
        return state.userList
    },
    user: state => (id: number) => {
        return state.userList.find(user => user.id === id)
    }
}



