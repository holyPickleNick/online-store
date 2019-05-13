<template>
  <b-card
    :title="item.name"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-img-lazy
      :src="imageUrl"
      :alt="imageAlt"
    />
    <b-card-text>{{ item.description }}</b-card-text>
    <slot>
      <router-link :to="{ name: 'item_view', params: { id: item.id } }">
        <b-button
          :variant="buttonVariant"
          :disabled="!item.available"
        >{{ $n(item.price, "currency") }}</b-button>
      </router-link>
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
  data() {
    return {
      imageLoading: true
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
    },
    buttonVariant() {
      if (this.item.available) {
        return "outline-primary";
      }
    }
  },
  methods: {
    showImage() {
      this.imageLoading = false;
    }
  }
};
</script>

<style>
</style>
