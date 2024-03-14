<script>
    export let data;
    console.log(data, 'wtffff')
</script>

<div>
    <h1>{data.title}</h1>
    &nbsp;
    <h4>[{data.slug}]</h4>
</div>
<p>{data.content}</p>

<style>
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    p {
       white-space: pre-line; 
    }
</style>