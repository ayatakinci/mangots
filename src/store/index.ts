import {  Store } from 'pinia'
import router from '../router'
import { auth } from '../firebase/index'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User
} from 'firebase/auth'

interface State {
  user:  null
}

export default class AuthStore extends Store<State> {
  state() {
    return {
      user: null
    }
  }

  mutations() {
    return {
      SET_USER(state, user: User) {
        state.user = user
      },

      CLEAR_USER(state) {
        state.user = null
      }
    }
  }

  actions() {
    return {
      async login({ commit }, details: { email: string, password: string }) {
        try {
          await signInWithEmailAndPassword(auth, details.email, details.password)
        } catch (error) {
          switch (error.code) {
            case 'auth/user-not-found':
              alert("User not found")
              break
            case 'auth/wrong-password':
              alert("Wrong password")
              break
            default:
              alert("Something went wrong")
          }

          return
        }

        commit('SET_USER', auth.currentUser)

        router.push('/')
      },

      async register({ commit }, details: { email: string, password: string }) {
        try {
          await createUserWithEmailAndPassword(auth, details.email, details.password)
        } catch (error) {
          switch (error.code) {
            case 'auth/email-already-in-use':
              alert("Email already in use")
              break
            case 'auth/invalid-email':
              alert("Invalid email")
              break
            case 'auth/operation-not-allowed':
              alert("Operation not allowed")
              break
            case 'auth/weak-password':
              alert("Weak password")
              break
            default:
              alert("Something went wrong")
          }

          return
        }

        commit('SET_USER', auth.currentUser)

        router.push('/')
      },

      async logout({ commit }) {
        await signOut(auth)

        commit('CLEAR_USER')

        router.push('/login')
      },

      fetchUser({ commit }) {
        auth.onAuthStateChanged(async user => {
          if (user === null) {
            commit('CLEAR_USER')
          } else {
            commit('SET_USER', user)

           
          }
        })
      }
    }
  }
}