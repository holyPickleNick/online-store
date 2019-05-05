const state = [
    {
        id: 1,
        name: "ASUS Laptop",
        description: "This is a shiny asus laptop.",
        image: {
            url: "https://www.inrent.com.au/siteassets/product/tp501uqdn081t_1_med---cpq2dn081t.png",
            alt: "Buy it"
        },
        price: 999.9
    },
    {
        id: 2,
        name: "Macbook Air",
        description: "This is a fancy macbook",
        image: {
            url: "https://amp.businessinsider.com/images/5b7c167a04f16230008b53a8-750-375.png",
            alt: "Don't buy it"
        },
        price: 1399.99
    },
    {
        id: 3,
        name: "Microsoft Surface",
        description: "It detatches!",
        image: {
            url: "https://c.s-microsoft.com/en-us/CMSImages/SurfaceHome_Lg_ImagePanel_4_new_V4.png?version=6f9932e4-fc69-3b60-277b-844827f84e44",
            alt: "Bit expensive..."
        },
        price: 2999.99
    },
    {
        id: 4,
        name: "Another surface",
        description: "It comes with a pen",
        image: {
            url: "https://c.s-microsoft.com/en-th/CMSImages/SurfaceHome_HL_ImagePanel_1_Pro6_Platinum_V4.png?version=333f9f40-297f-9b4c-cfc7-e18f0cf6e06b",
            alt: "Shiiiinyyy"
        },
        price: 799.99
    },
    {
        id: 5,
        name: "I'm not sure what this is",
        description: "Mysterious.",
        image: {
            url: "https://img.purch.com/rc/673x433/aHR0cHM6Ly93d3cubGFwdG9wbWFnLmNvbS9pbWFnZXMvdXBsb2Fkcy81NTkzL2cvbGhwLXNwZWN0cmUtZm9saW8tMDEwLmpwZw==",
            alt: "lol"
        },
        price: 1000.30
    },
    {
        id: 6,
        name: "Macbook Pro with Touchbar",
        description: "And 4 usb-c ports!",
        image: {
            url: "https://amp.businessinsider.com/images/5b50ab4101180c3f008b46cc-750-563.jpg",
            alt: "Expensive"
        },
        price: 3300.00
    },
    {
        id: 7,
        name: "Dell XPS 13",
        description: "No bezels included",
        image: {
            url: "https://icdn2.digitaltrends.com/image/dell-xps-13-screen-screen1_1.jpg",
            alt: "Nice screen"
        },
        price: 1500.00
    },
    {
        id: 8,
        name: "8K iMac",
        description: "Not a laptop",
        image: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzZD8-SXs8A6nCmFp0J4nlN9_q8R2uxN7yqnHMI_URV_-wZjO",
            alt: "its an imac"
        },
        price: 4000.00
    },
    {
        id: 9,
        name: "Generic laptop",
        description: "Really, its just kinda there",
        image: {
            url: "https://www.rentacenter.com/medias/100025460-01-300.jpg?context=bWFzdGVyfGltYWdlc3wxMDAyOHxpbWFnZS9qcGVnfHN5cy1tYXN0ZXIvaW1hZ2VzL2g1ZS9oOWMvOTM0NzQzNjQ0NTcyNi8xMDAwMjU0NjBfMDFfMzAwLmpwZ3wyODJkMDI4MjFmMzkwYjMxMTA0MmYyYjM2YWE1YTAyNTBkMjk1YzhlMmVjNjU4ZWU3NjFmNjhkYmYzNzc4YjFh",
            alt: "That's a long url"
        },
        price: 200.00
    },
    {
        id: 10,
        name: "Another iMac",
        description: "Just needed something to fill the gaps",
        image: {
            url: "https://www.apple.com/v/imac/h/images/meta/og__f6ewkzfr71qy_image.png?201904172148",
            alt: "hi"
        },
        price: 7000.00
    },
    {
        id: 11,
        name: "AlienWare",
        description: "This looks expensive and shiny",
        image: {
            url: "https://i.dell.com/sites/imagecontent/app-merchandizing/responsive/LearnSegment/alienware/assets/en/PublishingImages/alienware_images/2195-alienware_area-51_aw-17_homepage_tile-534x360.jpg",
            alt: "Its an alienware desktop"
        },
        price: 3000.00
    },
    {
        id: 12,
        name: "FuuLLllLLl HHHHDDDDD",
        description: "All those pixels (tm)",
        image: {
            url: "https://images.wisegeek.com/computer-tower-monitor-keyboard-and-mouse.jpg",
            alt: "Computer tower monitor keyboard and mouse"
        },
        price: 600.00
    }
];

export default {
    namespaced: true,
    state,
};