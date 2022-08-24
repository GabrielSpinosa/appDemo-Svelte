<script>
  import "../app.scss";
  import "../app.scss";
  import { signOut, onAuthStateChanged } from "firebase/auth";
  import { auth } from "../firebase";
  import { isLoggedIn, user } from "../stores";

  let logo = "logo.png";
  let principal = "principal.png";
  let salir = "logout.png";

  const logout = async () => {
    try {
      await signOut(auth);
      $isLoggedIn = false;
      $user = {};
    } catch (error) {
      console.error(error);
    }
  };
  onAuthStateChanged(auth, (authUser) => {
    // @ts-ignore
    $user = authUser;
    $isLoggedIn = !!authUser;
  });
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a href="/">
      <img
        src={logo}
        alt="pokemon_logo"
        width="150"
        height="50"
        class="d-inline-block align-text-top"
      />
    </a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        {#if $isLoggedIn}
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              title="Pokedex"
              href="/pokemon"
            >
              <img width="50" height="50" src={principal} alt="pokemon" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" title="Mi perfil" href="/profile">
              <img
                width="50"
                height="50"
                class="rounded"
                src={$user.photoURL}
                alt={$user.displayName}
              />
            </a>
          </li>
          <li class="nav-item d-flex">
            <a
              class="nav-link"
              style="padding-top: 0.7rem;"
              title="Cerrar sesi&#xF3;n"
              href="/"
              on:click={logout}
            >
              <img width="40" height="40" src={salir} alt="logout" />
            </a>
          </li>
        {:else}
          <li class="nav-item">
            <a class="nav-link" href="/login">Entrar</a>
          </li>
        {/if}
      </ul>
    </div>
  </div>
</nav>
<slot />

<style>
  .navbar-collapse {
    flex-grow: 0;
  }
</style>
