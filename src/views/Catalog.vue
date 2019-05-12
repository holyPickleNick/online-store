<template>
  <b-container>
    <h1>{{ $t("catalog.title") }}</h1>
    <div v-if="loading" class="text-center">
      <b-spinner variant="primary" :label="$t('catalog.loading')" />
    </div>
    <div v-else-if="items">
      <b-row v-for="row in rowCount" :key="row">
        <b-col v-for="col in itemsPerRow" :key="col">
          <catalog-item v-if="currentItem(row, col)" :item="currentItem(row, col)" />
        </b-col>
      </b-row>
    </div>
    <error-jumbotron 
      v-else-if="!neverLoaded && error"
      :header="$t('catalog.errors.jumbotron.default.header')"
      :lead="$t('catalog.errors.jumbotron.default.lead')"
    >
      {{ $t("catalog.errors.jumbotron.default.message") }}
    </error-jumbotron>
  </b-container>
</template>


<script>
import ErrorJumbotron from "../components/ErrorJumbotron";
import { createNamespacedHelpers } from "vuex";
import CatalogItem from "../components/catalog/CatalogItem";

const { mapState, mapGetters, mapActions } = createNamespacedHelpers("catalog");

export default {
  name: "Catalog",
  components: {
    CatalogItem,
    ErrorJumbotron
  },
  data() {
    return {
      itemsPerRow: 5
    }
  },
  computed: {
    ...mapGetters(["neverLoaded", "loading", "error"]),
    ...mapState({
      items: state => state.data
    }),
    rowCount() {
      const items = this.items.length;
      let rows = Math.floor(items / (this.itemsPerRow));

      return (items % this.itemsPerRow > 0) ? rows + 1 : rows;
    }
  },
  methods: {
    ...mapActions(["load"]),
    currentItem(row, col) {
      return this.items[col - 1 + ((row - 1) * this.itemsPerRow)];
    }
  },
  async mounted() {
    if (this.neverLoaded) {
      return this.load();
    }
  }
};
</script>
