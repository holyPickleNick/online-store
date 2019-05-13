export default {
    errors: {
        jumbotron: {
            default: {
                header: "Something went wrong!",
                lead: "Sorry about that. We're looking into it now.",
                message: "Please contact customer service if you need help or have any questions."
            },
            buttons: {
                phone: "Call us at {phoneNumber}",
                email: "Or email us at {email}"
            }
        }
    },
    catalog: {
        title: "Catalog",
        loading: "Loading...",
        errors: {
            jumbotron: {
                default: {
                    header: "I couldn't find anything!",
                    lead: "Sorry about that. We're rushing to re-stock for you.",
                    message: "Please contact customer service if you have any questions about our stock."
                }
            }
        },
        filters: {
            type: {
                label: "Type",
                options: {
                    desktop: "Desktop",
                    laptop: "Laptop"
                }
            }
        }
    },
    item: {
        buttons: {
            loading: "Loading...",
            purchase: "I want it!",
            purchasing: "Purchasing...",
            purchased: "Sold!"
        },
        popup: {
            success: {
                title: "Sold!",
                message: "Thank you for your purchase."
            },
            soldOut: {
                title: "Sold out!",
                message: "Sorry about that- we'll have it in stock again soon!"
            }
        }
    },
    navbar: {
        brand: "Online Store",
        links: {
            desktop: "Desktops",
            laptop: "Laptops"
        },
        search: {
            placeholder: "Search coming soon!",
            button: "Search"
        }
    }
}