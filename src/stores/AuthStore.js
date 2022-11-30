import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/config/firebase'

export const AuthStore = defineStore('storeAuth', {
    state: () => {
        return{
            user: null,
            errors: null
        }
    },
    actions:{
        init(){
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  this.user = user
                } else {
                    console.log('User is signed out');
                }
              });
        },
        registerUser(data){
            createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                this.user = userCredential.user;
                console.log(userCredential.user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                this.errors = {
                    errorCode,
                    errorMessage
                }

            });
        },
        signoutUser(){
            signOut(auth).then(() => {
                this.user = null
                console.log('user sign out');
            }).catch((error) => {
                console.log(error)
            });
        },
        loginUser(data){
            signInWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    // Signed in 
                    this.user = userCredential.user;
                    console.log(userCredential.user);
                    // ...
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    }
})