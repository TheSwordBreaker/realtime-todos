<script>
	import { count } from './store' ;
	import { todoStore } from './todoStore';
	import { fade, fly } from 'svelte/transition';
	export let name = "Awesome Svelte Todo App";
	import { writable } from 'svelte/store';
	import Smart from './Smart.svelte';

	import Login from './Login.svelte';

	let offline = true;
	// let num = 0;
	// let user = { loggedIn: false };
	// let m = { x: 0, y: 0 };
	// function toggle() {
	// 	user.loggedIn = !user.loggedIn;
	// }

	


	// $: power = Math.pow(num,2)
	// $: if(power > 50) {
	// 	offline = false;
	// }

	function enter() {
		offline = !offline;
	}

	// const incre = () => num += 1;
	
	//store 

	// const count = writable(0);
	// Subscribe to store  vs auto subscribe  {} $count }
	
	// const unsubscribe = count.subscribe(value => {
	// 	count_value = value;
	// });
	// let count_value2
	// const unsubscribe2 = todoStore.subscribe(value => {
	// 	count_value2 = value;
	// });
	// console.log(count)
	// console.log(todoStore);
	// const reset = () => count.set(0);
	// const inc = () => count.update(n => n + 1);
	// const dec = () => count.update(n => n - 1);

</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
</svelte:head>

<style>

	h1 {
		color: purple;
	}

	main {
		margin: 20px;
	}

</style>

<main class="content"> 
	
	<!-- This is count using store { $count }
	
	<button on:click={count.inc}>+</button>
	<button on:click={count.dec}>-</button>
	<button on:click={count.reset}>Reset</button>
	<br>
	<br>
	<br>
	<br> -->
	<!-- {#if user.loggedIn}
	<button on:click={toggle}>
		Log out
	</button>

	You Logout
{:else}
	<button on:click={toggle}>
		Log in
	</button>

	Welcome Robot 47777
{/if}
<div on:mousemove="{e => m = { x: e.clientX, y: e.clientY }}">
	The mouse position is {m.x} x {m.y}
</div>
<h2 in:fly="{{ x: 900, duration: 500 }}" out:fade> Hii</h2>

<button on:click="{incre}"> Click</button>

Count is  {num }
Power is  { power }
-->
<button on:click="{enter}"> Changed to 
	{#if !offline}
	Offline 
	{:else}
	Online
	{/if} Todos
</button>

<h1> Welcome To { name }</h1>
	{#if offline }
	<Smart />
	{:else}
	<Login/>
	{/if} 

</main>