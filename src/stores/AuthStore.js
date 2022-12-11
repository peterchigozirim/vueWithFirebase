import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/config/firebase'
// import {useRouter} from 'vue-router'
// const router = useRouter();

export const AuthStore = defineStore('storeAuth', {
    state: () => {
        return{
            user: null,
            errors: null,
            loader: false
        }
    },
    actions:{
        init(){
            onAuthStateChanged(auth, (user) => {
                this.loader = true
                if (user) {
                  this.user = user
                    this.loader = false
                  setTimeout(() => {
                    this.router.push( { name: 'home'})
                  }, 1000);
                } else {
                    this.loader = false
                    this.router.push({name: 'auth'});
                }
              });
        },
        registerUser(data){
            this.loader = true
            createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                this.user = userCredential.user;
                this.router.push( { name: 'home'} )
            })
            .catch((error) => {
                this.loader = false
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
                this.loader = false
            }).catch((error) => {
                console.log(error)
            });
        },
        loginUser(data){
            this.loader = true
            signInWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    this.user = userCredential.user;
                    this.router.push( { name: 'home'})
                })
                .catch((error) => {
                    this.loader = false
                    console.log(error.message);
                });
        },
        
    }
})