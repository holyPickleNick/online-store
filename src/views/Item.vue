<template>
    <div v-if="loading" class="text-center">
      <b-spinner variant="primary" :label="$t('catalog.loading')" />
    </div>
    <b-container v-else-if="item">
        <h1>{{ item.name }} <b-badge variant="success">{{ $n(item.price, "currency") }}</b-badge></h1>
        <b-img :src="imageUrl" :alt="imageAlt" style="max-width: 20rem;"/>
        <p>{{ item.description }}</p>
        <b-button @click="purchase" :disabled="attemptedPurchase">{{ $t("item.buttons.purchase") }}</b-button>
        <popup :title="popupTitle" :visible="popupVisible">
            <template #default>
                {{ popupMessage }}
            </template>
        </popup>
    </b-container>
</template>

<script>
import Popup from "../components/Popup";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapGetters, mapActions } = createNamespacedHelpers("catalog");

export default {
    name: "Item",
    components: {
        Popup
    },
    data() {
        return {
            attemptedPurchase: false
        };
    },
    props: {
        id: {
            type: [String, Number],
            required: true
        }
    },
    computed: {
        ...mapGetters(["neverLoaded", "loading", "loaded"]),
        ...mapState({
            item(catalog) {
                if (this.neverLoaded) {
                    return null;
                } else if (this.loaded && catalog.data) {
                    const found = catalog.data.filter(item => item.id.toString() === this.id.toString());

                    if (found.length) {
                        return found[0];
                    }
                }

                this.$router.push({
                    name: "catalog"
                });
            }
        }),
        imageUrl() {
            if (this.item && this.item.image) {
                return this.item.image.url;
            }
        },
        imageAlt() {
            if (this.item && this.item.image) {
                return this.item.image.alt;
            }
        },
        soldOut() {
            return !this.item.available;
        },
        popupTitle() {
            const namespace = this.soldOut ? "soldOut" : "success";

            return this.$t(`item.popup.${namespace}.title`);
        },
        popupMessage() {
            const namespace = this.soldOut ? "soldOut" : "success";

            return this.$t(`item.popup.${namespace}.message`);
        },
        popupVisible() {
            return !!this.attemptedPurchase;
        }
    },
    methods: {
        ...mapActions(["load"]),
        purchase() {
            this.attemptedPurchase = true;
        },
    },
    async mounted() {
        if (this.neverLoaded) {
            return this.load();
        }
    }
}
</script>

<style>

</style>
