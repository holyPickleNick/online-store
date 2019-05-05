import Catalog from "./views/Catalog"
import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        component: Catalog
    }
];

export const router = new VueRouter({ mode: "history", routes });
