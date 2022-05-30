<script setup lang="ts">
interface Props {
    extraClasses?: string
}
const props = defineProps<Props>()
</script>

<template>
<div class="ml-24 mr-24 flex flex-row grow gap-10 justify-center" :class="props.extraClasses">
<slot />
</div>
</template>