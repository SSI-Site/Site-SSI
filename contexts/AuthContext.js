import cookie from 'js-cookie'
import Router from 'next/router'
import { createContext, useEffect, useState } from 'react'

import axios from 'axios'
import {
  signOut as firebaseSignOut,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth'
import { auth } from '../lib/firebase'
const API_BASE_URL = process.env.NEXT_PUBLIC_SAPHIRA_URL

const AuthContext = createContext()

const formatUser = async (user) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  token: user.za,
  provider: user.providerData[0].providerId,
  photoUrl: user.photoURL,
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleStudent = async (currentUser) => {
    if (currentUser) {
      const formatedUser = await formatUser(currentUser)
      setUser(formatedUser)
      setSession(true)
      return formatedUser.email
    }

    setUser(false)
    setSession(false)
    return false
  }

  const setSession = (session) => {
    if (session) {
      cookie.set('ssi-site-auth', session, {
        expires: 1,
      })
    } else {
      cookie.remove('ssi-site-auth')
    }
  }

  const signInGoogle = async () => {
    try {
      setLoading(true)
      const provider = new GoogleAuthProvider()
      const response = await signInWithPopup(auth, provider)
      const firebaseToken = await getIdToken(response.user)
      console.log('firebaseToken', firebaseToken)

      // try {
      //   const loginAPIResponse = await axios.post(
      //     `${API_BASE_URL}/student/login`,
      //     {
      //       name: response.user.displayName,
      //       email: response.user.email,
      //     },
      //     {
      //       headers: {
      //         Authorization: `Bearer ${firebaseToken}`,
      //         'Content-Type': 'application/json',
      //       },
      //     }
      //   )

      //   const { access, refresh, id } = loginAPIResponse.data

      //   if (access && refresh && id) {
      //     localStorage.setItem('access_token', access)
      //     localStorage.setItem('refresh_token', refresh)
      //     localStorage.setItem('student_id', id)
      //   }
      // } catch (error) {
      //   console.error('Erro ao fazer login no Saphira...', error)
      // }

      handleStudent(response.user)
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        console.log('O usuário fechou o pop-up antes de concluir o login.')
      }
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    try {
      Router.push('/')
      await firebaseSignOut(auth)
      handleStudent(false)
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      localStorage.removeItem('student_id')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleStudent)
    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signInGoogle,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const AuthConsumer = AuthContext.Consumer
export default AuthContext
