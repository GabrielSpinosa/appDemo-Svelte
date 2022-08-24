<script>
    import { isLoggedIn, user } from "../stores";
</script>

<div class="container" style="margin-top:25px ;">
    <div class="row">
      <div class="col">
      </div>
      <div class="col">        
            {#if $isLoggedIn}
            <div class="d-flex">
                <div class="flex-shrink-0">
                    <img class="rounded" src={$user.photoURL} alt={$user.displayName}>
                </div>
                <div class="flex-grow-1 ms-3">
                    <h3 style="color: whitesmoke;">{$user.displayName}</h3>
                    <p style="color: whitesmoke;">{$user.email}</p>
                </div>
            </div>
            {/if}
        {#if $isLoggedIn == false}
            <div class="container">
                <h1 style="color: whitesmoke;">No esta logeado</h1>
            </div>
        {/if}

      </div>
      <div class="col">
      </div>
    </div>
  </div>