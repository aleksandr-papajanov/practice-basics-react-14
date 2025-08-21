import type { IPage } from "./IPage";

export const pages: IPage[] = [
    {
        id: "hot",
        title: "Hot",
        info: ["SHot freshly ground black coffee or a cup of exquisite tea?", "We give you that perfect cup every time."],
        image: "/hot.jpg",
        menuItems: [
            { name: "Mocha Latte", price: "€ 2.50" },
            { name: "Caffe Formaggio", price: "€ 3.50" },
            { name: "Espresso", price: "€ 5.50" },
            { name: "Chai Verde Latte", price: "€ 2.50" }
        ]
    },
    {
        id: "juicy",
        title: "Juicy",
        info: ["Ripe fruit - freshly squeezed.", "It's as simple as that. Chunky or smooth - it's your choice."],
        image: "/juicy.jpg",
        menuItems: [
            { name: "Branched Apricots", price: "€ 4.20" },
            { name: "Deep Rasberries", price: "€ 3.50" },
            { name: "Smooth Oranges", price: "€ 6.50" }
        ]
    },
    {
        id: "cosy",
        title: "Cozy",
        info: ["Hang around. Enjoy the settings.", "Use our fast WiFi. Borrow a newspaper or a novel."],
        image: "/cosy.jpg",
        menuItems: [
            { name: "Mon-Sun", price: "8am – 11pm" },
            { name: "Caffe Retro", price: "Canto VI" },
            { name: "0123-45 67 89", price: "caffe@lorem.pge" }
        ]
    }
]