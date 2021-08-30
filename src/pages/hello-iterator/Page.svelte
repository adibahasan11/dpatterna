<script>
    import{ getData } from "./iterator-provider";
    import { onMount } from 'svelte';

  
  onMount(async () => {
 
    const iterator = await getData()
    console.log('Straight traversal:');
    
    console.log({iterator})
});
</script>

<h1>Weather Data</h1>