<script>
	import Profile from './Profile.svelte';
	import Todos from './Todos.svelte';
	
	import { auth, googleProvider } from './firebase';
	import { authState } from 'rxfire/auth';
	import App from './App.svelte';

	let user;

	const unsubscribe = authState(auth).subscribe(u => user = u);

	function login(){
		auth.signInWithPopup(googleProvider);
	}
</script>

<section>
	{#if user}
		<!-- <Profile { ...user } /> -->
		<Profile displayName={user.displayName}  uid={user.uid}  photoURL= {user.photoURL}></Profile>
		<button on:click={ () => auth.signOut() }> Logout </button>
		<hr>
		<Todos uid={user.uid} />
	{:else}
		<button on:click={login}>
			Singin with Google
		</button>
	{/if}
</section>


<style>
    section {
        background: rgb(235, 235, 235);
        padding: 20px;
    }
</style>