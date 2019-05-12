<template>
    <div v-if="loading" class="text-center">
      <b-spinner variant="primary" :label="$t('catalog.loading')" />
    </div>
    <b-container v-else-if="item">
        <h1>{{ item.name }} <b-badge variant="success">{{ $n(item.price, "currency") }}</b-badge></h1>
        <b-img :src="imageUrl" :alt="imageAlt" style="max-width: 20rem;"/>
        <p>{{ item.description }}</p>
        <b-button @click="purchaseItem" :disabled="buttonDisabled">
            <span v-if="loading">
                <b-spinner small type="grow" />
                {{ $t("item.buttons.loading") }}
            </span>
            <span v-else-if="purchasing">
                <b-spinner small />
                {{ $t("item.buttons.purchasing") }}
            </span>
            <span v-else-if="purchased">
                {{ $t("item.buttons.purchased") }}
            </span>
            <span v-else>
            {{ $t("item.buttons.purchase") }}
            </span>
        </b-button>
        <popup :title="$t(`item.popup.success.title`)" :visible="popupVisible">
            <template #default>
                {{ $t(`item.popup.success.message`) }}
            </template>
        </popup>
    </b-container>
</template>

<script>
import Popup from "../components/Popup";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapGetters: mapItemGetters, mapActions: mapItemActions } = createNamespacedHelpers("item");
const { mapGetters: mapPurchaseGetters, mapActions: mapPurchaseActions, mapMutations } = createNamespacedHelpers("item/purchase");

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
        ...mapItemGetters(["neverLoaded", "loading", "loaded"]),
        ...mapPurchaseGetters({ purchasing: "loading", purchased: "success" }),
        ...mapState({
            item(catalog) {
                if (this.neverLoaded) {
                    return null;
                } else if (this.loaded && catalog.data) {
                    return catalog.data;
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

            return null;
        },
        imageAlt() {
            if (this.item && this.item.image) {
                return this.item.image.alt;
            }

            return null;
        },
        soldOut() {
            return !this.item.available;
        },
        popupVisible() {
            return !!this.attemptedPurchase;
        },
        buttonDisabled() {
            return this.loading || this.purchasing || this.soldOut;
        }
    },
    methods: {
        ...mapItemActions(["load"]),
        ...mapPurchaseActions(["purchase"]),
        ...mapMutations({ reset: "clear" }),
        async purchaseItem() {
            await this.purchase(this.id);

            this.attemptedPurchase = true;
        }
    },
    async mounted() {
        this.reset();

        return this.load(this.id);
    }
}
</script>

<style>

</style>
