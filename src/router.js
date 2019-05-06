import Catalog from "./views/Catalog"
import Item from "./views/Item";
import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        name: "catalog",
        component: Catalog
    },
    {
        path: "/items/:id",
        name: "item_view",
        component: Item,
        props: true
    }
];

export const router = new VueRouter({ mode: "history", routes });
