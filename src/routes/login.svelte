<script>
    import { auth }  from '../firebase';
    import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
    import { isLoggedIn, user } from "../stores";
    import { goto } from "$app/navigation";

    export const login= async () => {
       try {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider);
        $user = res.user //le asignamos el valor a user del objeto que capturamos al logearnos
        $isLoggedIn = true //seteamos en true
        goto("/pokemon") //nos movemos a profile
       }
       catch(error) {
           console.error(error)
       }
    }
</script>

<div class="container" style="margin-top:25px ;">
    <div class="row">
      <div class="col">
      </div>
      <div class="col">
        <h1 style="color: whitesmoke;">Login</h1>
        <br>
        <a class="btn btn-lg btn-block btn-light" href="#" on:click={login}>
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="google">
            Login con Google
        </a>
      </div>
      <div class="col">
      </div>
    </div>
</div>
