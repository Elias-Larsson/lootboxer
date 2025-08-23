
<script lang="ts">
    let {alt, src, href} = $props();
 
</script>

<a {href}>
    <img {alt} {src} class="icon"/>
</a>

<style>
.icon {
    height: 40px;
    width: 40px;
    position: relative;
}
</style>