<template>
  <b-container>
    <h1>{{ $t("catalog.title") }}</h1>
    <div class="mb-3" v-if="hasFilters">
      <b-button v-if="type" class="mr-3 mb-3" @click="clearType">
        &times; {{ $t("catalog.filters.type.label") }}: {{ $t(`catalog.filters.type.options.${type}`) }}
      </b-button>
    </div>
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
  props: {
    type: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      itemsPerRow: 5
    }
  },
  computed: {
    ...mapGetters(["neverLoaded", "loading", "error"]),
    ...mapState({
      items(state) {
        let results = state.data;

        if (this.type) {
          results = results.filter(item => item.type === this.type);
        }

        return results;
      }
    }),
    rowCount() {
      const items = this.items.length;
      let rows = Math.floor(items / (this.itemsPerRow));

      return (items % this.itemsPerRow > 0) ? rows + 1 : rows;
    },
    hasFilters() {
      return this.type !== null;
    }
  },
  methods: {
    ...mapActions(["load"]),
    currentItem(row, col) {
      return this.items[col - 1 + ((row - 1) * this.itemsPerRow)];
    },
    clearType() {
      this.$router.push({
        name: "catalog"
      });
    }
  },
  async mounted() {
    if (this.neverLoaded) {
      return this.load();
    }
  }
};
</script>
