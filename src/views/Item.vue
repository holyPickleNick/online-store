<template>
    <b-container v-if="item">
        <h1>{{ item.name }} <b-badge variant="success">{{ $n(item.price, "currency") }}</b-badge></h1>
        <b-img :src="imageUrl" :alt="imageAlt" style="max-width: 20rem;"/>
        <p>{{ item.description }}</p>
        <b-button @click="purchase" :disabled="attemptedPurchase">I want it!</b-button>
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

const { mapState } = createNamespacedHelpers("catalog");

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
        ...mapState({
            item(catalog) {
                const found = catalog.filter(item => item.id === this.id);

                if (found.length) {
                    return found[0];
                } else {
                    this.$router.push({
                        name: "catalog"
                    });
                }
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
            if (this.soldOut) {
                return "Sold out!"
            } else{
                return "Sold!";
            }
        },
        popupMessage() {
            if (this.soldOut) {
                return "Better luck next time!";
            } else {
                return "Thank you for your purchase.";
            }
        },
        popupVisible() {
            return !!this.attemptedPurchase;
        }
    },
    methods: {
        purchase() {
            this.attemptedPurchase = true;
        }
    }
}
</script>

<style>

</style>
