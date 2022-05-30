<script setup lang="ts">
interface Props {
    extraClasses?: string
}
const props = defineProps<Props>()
</script>

<template>
<div class="ml-36 mr-36" :class="props.extraClasses">
<slot />
</div>
</template>