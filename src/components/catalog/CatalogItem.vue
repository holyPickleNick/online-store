<template>
    <b-card
        :title="item.name"
        :img-src="imageUrl"
        :img-alt="imageAlt"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
    >
       <b-card-text>
            {{ item.description }}
       </b-card-text>

       <slot>
           <b-button>{{ $n(item.price, "currency") }}</b-button>
       </slot> 
    </b-card>
</template>

<script>
export default {
    name: "CatalogItem",
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        imageUrl() {
            if (this.item.image) {
                return this.item.image.url;
            }
        },
        imageAlt() {
            if (this.item.image) {
                return this.item.image.alt;
            }
        }
    }
}
</script>

<style>

</style>
