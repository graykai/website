<script setup lang="ts">

import { reactive } from 'vue'
import { ExtraClasses, BoxColor } from '../helpers/types';

interface Props {
    title: string,
    color: BoxColor,
    extraClasses?: ExtraClasses
}

const props = defineProps<Props>()

const blockClasses = reactive({
    'text-red-100': props.color === BoxColor.Red,
    'text-green-100': props.color === BoxColor.Green,
    'block-text-color-red-500': props.color === BoxColor.Red,
    'block-text-color-green-500': props.color === BoxColor.Green,

})
const boxClasses = reactive({
    ...props.extraClasses,
    "content-box-primary-color-red-100": props.color === BoxColor.Red,
    "content-box-secondary-color-red-500": props.color === BoxColor.Red,
    "content-box-primary-color-green-100": props.color === BoxColor.Green,
    "content-box-secondary-color-green-500": props.color === BoxColor.Green
})
</script>

<template>
    <div class="rounded content-box" :class="boxClasses">
        <div class="font-headerFont text-3xl -mt-7 grow min-w-max text-center block-text" :class="blockClasses">{{
                title
        }}</div>
        <div class="mt-4 px-12 pb-12 text-center">
            <slot />
        </div>
    </div>
</template>
