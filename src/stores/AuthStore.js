import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/config/firebase'
// import {useRouter} from 'vue-router'
// const router = useRouter();

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
                  this.router.push( { name: 'home'})
                } else {
                    this.router.push({name: 'auth'});
                }
              });
        },
        registerUser(data){
            createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                this.user = userCredential.user;
                this.router.push( { name: 'home'} )
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
                this.router.push( { name: 'auth'})
            }).catch((error) => {
                console.log(error)
            });
        },
        loginUser(data){
            signInWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    this.user = userCredential.user;
                    this.router.push( { name: 'home'})
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    }
})