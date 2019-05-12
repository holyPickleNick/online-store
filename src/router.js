import VueRouter from "vue-router";
// Views
import Navbar from "./views/Navbar";
import Catalog from "./views/Catalog"
import Item from "./views/Item";

const routes = [
    {
        path: "/",
        name: "catalog",
        components: {
            navbar: Navbar,
            default: Catalog
        }
    },
    {
        path: "/items/:id",
        name: "item_view",
        components: {
            navbar: Navbar,
            default: Item
        },
        props: {
            default: true
        }
    }
];

export const router = new VueRouter({ mode: "history", routes });
