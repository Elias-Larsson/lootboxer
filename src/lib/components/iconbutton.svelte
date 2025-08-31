
<script lang="ts">
    import { Icon as IconType } from '@lucide/svelte';
    type Props = {
        href: string
        icon: typeof IconType
    }
    let { href, icon}: Props = $props();
    const Icon = icon
</script>

<a
  {href}
  class="h-10 w-10 flex items-center justify-center rounded group"
>
  <Icon class="text-slate-300 group-hover:text-green-300 transition ease-in-out " />
</a>