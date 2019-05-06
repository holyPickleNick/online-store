<template>
    <b-toast :title="title" :visible="visible" static no-auto-hide no-close-button>
        <slot />
    </b-toast>
</template>

<script>
export default {
    name: "Popup",
    props: {
        title: {
            type: String,
            default: () => ""
        },
        visible: {
            type: Boolean,
            default: () => true
        }
    }
}
</script>

<style>

</style>
