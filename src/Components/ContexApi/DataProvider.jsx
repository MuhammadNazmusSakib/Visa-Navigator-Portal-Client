import React, { useEffect, useState } from 'react'
import { Contex } from './Contex'
import { auth } from '../Firebase/Firebase.init'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'


const DataProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // creating new user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unSubscribe()
    }
  }, [])

    // update user profile
    const updateUserProfile = (updateData) => {
      return updateProfile(auth.currentUser, updateData)
    }

  // login with existing account
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  //  Google signIn
  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, provider)
  }

  // signing out
  const logOut = () => {
    return signOut(auth)
  }

  const dataInfo = {
    user, setUser, createNewUser, logOut, userLogin, googleSignIn, loading, updateUserProfile
  }
  return (
    <Contex.Provider value={dataInfo}>
      {children}
    </Contex.Provider>
  )
}

export default DataProvider

