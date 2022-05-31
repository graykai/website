
<script setup lang="ts">
import { SocialIcons } from "../../helpers/types";
import Github from "./icons/Github.vue"
import Discord from "./icons/Discord.vue"
import Instagram from "./icons/Instagram.vue"
import Mailchimp from "./icons/Mailchimp.vue"
import Email from "./icons/Email.vue"

interface Props {
    icon: SocialIcons,
    url: string,
}

const props = defineProps<Props>()

</script>
<template>
    <a :href="url">
        <Github v-if="icon === SocialIcons.Github" />
        <Discord v-if="icon === SocialIcons.Discord" />
        <Instagram v-if="icon === SocialIcons.Instagram" />
        <Mailchimp v-if="icon === SocialIcons.Mailchimp" />
        <Email v-if="icon === SocialIcons.Email" />
    </a>
</template>