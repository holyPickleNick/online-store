<template>
  <b-container>
    <h1>Catalog</h1>
    <b-row v-for="row in rowCount" :key="row">
      <b-col v-for="col in itemsPerRow" :key="col">
        <catalog-item v-if="currentItem(row, col)" :item="currentItem(row, col)" />
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import { createNamespacedHelpers } from "vuex";
import CatalogItem from "../components/catalog/CatalogItem";

const { mapState } = createNamespacedHelpers("catalog");

export default {
  name: "Catalog",
  components: {
    CatalogItem
  },
  data() {
    return {
      itemsPerRow: 5
    }
  },
  computed: {
    ...mapState({
      items: state => state
    }),
    rowCount() {
      const items = this.items.length;
      let rows = Math.floor(items / (this.itemsPerRow));

      return (items % this.itemsPerRow > 0) ? rows + 1 : rows;
    }
  },
  methods: {
    currentItem(row, col) {
      return this.items[col - 1 + ((row - 1) * this.itemsPerRow)];
    }
  }
};
</script>
