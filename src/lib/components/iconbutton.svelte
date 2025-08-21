
<script lang="ts">
    export let alt: string;
    export let src: string;
    export let href: string;
</script>

<a href={href}>
    <img alt={alt} src={src} class="icon"/>
</a>

<style>
.icon {
    height: 40px;
    width: 40px;
    position: relative;
}
</style>