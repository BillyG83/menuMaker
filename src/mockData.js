const mockData = {
    createdAt: "2021-03-02",
    displayName: "Bill Gilmore",
    email: 'bill.multimediamonsters@gmail.com',
    id: 'ZSpvTufpfgZKikuXCDsZPQHboVh2',
    accounts: [
        {
            businessCurrency: "euro",
            businessId: "PQHboVh2-20210302-28004-billsbar",
            businessJoinDate: "2021-03-02",
            businessLogo: "/img/logo.jpg",
            businessName: "Bill's Bar",
            businessPostCode: "28004",
            businessInfo: {
                businessAddress: "San Marco 12, Chueca",
                businessCity: "Madrid",
                businessCountry: "Spain",
                businessEmail: "bill@thebar.com",
                businessPhone: "07712345678",
                businessWebUrl: "https://www.google.com/",
            },
            businessSocial: [
                { name: 'facebook', url: 'https://www.facebook.com/' },
                { name: 'twitter', url: 'https://twitter.com/' },
                { name: 'instagram', url: 'https://instagram.com/' },
            ],
            businessMenu: [
                {
                    catName: "Drinks",
                    catIcon: "drink",
                    catOrder: 3,
                    isActive: true,
                    catItems: [
                        {
                            name: "Coca Cola",
                            id: '1',
                            detail: "Classic Coke with ice and a slice",
                            price: 1.50,
                            subCat: "Soft Drinks",
                            isActive: true,
                            moreInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                            icons: [
                                { name: 'soft drink', icon: 'drink' },
                                { name: 'sweet', icon: 'sugar' },
                            ],
                            variants: [
                                {
                                    name: "Small",
                                    price: 1.50
                                },
                                {
                                    name: "Large",
                                    price: 2.50
                                }
                            ]
                        },
                        {
                            name: "Ice Tea",
                            id: '2',
                            detail: "Cool iced tea with lemon",
                            price: 1.50,
                            subCat: "Soft Drinks",
                            isActive: true,
                            moreInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                            icons: [
                                { name: 'soft drink', icon: 'drink' },
                                { name: 'sweet', icon: 'sugar' },
                                { name: 'sugar free option', icon: 'sugar-free' },
                            ],
                            variants: [
                                {
                                    name: "Small",
                                    price: 1.50
                                },
                                {
                                    name: "Large",
                                    price: 2.50
                                },
                                {
                                    name: "No Sugar Small",
                                    price: 1.25
                                },
                                {
                                    name: "No Sugar Large",
                                    price: 1.75
                                }
                            ]
                        },
                        {
                            name: "Coffee",
                            id: '3',
                            detail: "Fresh ground beans into your cup",
                            price: 1.50,
                            subCat: "Coffee",
                            isActive: true,
                            icons: [
                                { name: 'hot drink', icon: 'mug' },
                                { name: 'coffee', icon: 'coffee' },
                            ],
                            variants: [
                                {
                                    name: "Short Black",
                                    price: 1.50
                                },
                                {
                                    name: "Americano",
                                    price: 2.50
                                },
                                {
                                    name: "La Tea",
                                    price: 2.25
                                },
                                {
                                    name: "Cappuccino",
                                    price: 2.75
                                }
                            ]
                        }
                    ]
                },
                {
                    catName: "Starters",
                    catIcon: "fork",
                    catOrder: 1,
                    isActive: true,
                    catItems: [
                        {
                            name: "Duck Spring Rolls",
                            id: '4',
                            detail: "served with salad and sweet chilli sauce",
                            price: 4.50,
                            subCat: "Meats",
                            isActive: true,
                            moreInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                            icons: [
                                { name: 'cheese', icon: 'cheese' },
                                { name: 'dairy', icon: 'milk' },
                                { name: 'spicey', icon: 'chili' },
                                { name: 'vegetarian', icon: 'plant' },
                            ],
                            ingredients: [
                                "cup milk",
                                "white vinegar",
                                "flour",
                                "white sugar",
                                "baking powder",
                                "baking soda",
                                "salt",
                                "egg",
                                "butter, melted",
                                "cooking spray",
                            ],
                        },
                        {
                            name: "Veg Spring Rolls",
                            id: '5',
                            detail: "served with salad and sweet chilli sauce",
                            price: 4.50,
                            subCat: "Vegan",
                            isActive: true,
                            moreInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                            icons: [
                                { name: 'cheese', icon: 'cheese' },
                                { name: 'dairy', icon: 'milk' },
                                { name: 'spicey', icon: 'chili' },
                                { name: 'vegetarian', icon: 'plant' },
                            ],
                            ingredients: [
                                { value: "cup milk" },
                                { value: "white vinegar" },
                                { value: "flour" },
                                { value: "white sugar" },
                                { value: "baking powder" },
                                { value: "baking soda" },
                                { value: "salt" },
                                { value: "egg" },
                                { value: "butter }, melted" },
                                { value: "cooking spray" },
                            ],
                        },
                        {
                            name: "Boiled Eggs on toast",
                            id: '6',
                            detail: "served on fresh baked brown bread",
                            price: 2.50,
                            subCat: "Vegetarian",
                            isActive: true,
                            moreInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                            icons: [
                                { name: 'cheese', icon: 'cheese' },
                                { name: 'dairy', icon: 'milk' },
                                { name: 'spicey', icon: 'chili' },
                                { name: 'vegetarian', icon: 'plant' },
                            ],
                            ingredients: [
                                "eggs",
                                "bread"
                            ],
                        }
                    ]
                },
                {
                    catName: "Mains",
                    catIcon: "plate",
                    catOrder: 2,
                    isActive: true,
                    catItems: [
                        {
                            name: "Pasta and Pesto",
                            id: '7',
                            detail: "home made spice pesto on pasta",
                            price: 9.50,
                            subCat: "Vegetarian",
                            isActive: true,
                            variants: [
                                {
                                    name: "Red Pesto",
                                    details: "chilli, garlic, red peppers"
                                },
                                {
                                    name: "Green Pesto",
                                    details: "chilli, garlic, pees"
                                }
                            ],
                            moreInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                            icons: [
                                { name: 'cheese', icon: 'cheese' },
                                { name: 'dairy', icon: 'milk' },
                                { name: 'spicey', icon: 'chili' },
                                { name: 'vegetarian', icon: 'plant' },
                            ],
                            ingredients: [
                                "cup milk",
                                "white vinegar",
                                "flour",
                                "white sugar",
                                "baking powder",
                                "baking soda",
                                "salt",
                                "egg",
                                "butter, melted",
                                "cooking spray",
                            ],
                        },
                        {
                            name: "Chicken Burger",
                            id: '8',
                            detail: "Fresh tempura chicken on home made bap",
                            price: 9.50,
                            subCat: "Chicken",
                            isActive: true,
                            moreInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                            icons: [
                                { name: 'cheese', icon: 'cheese' },
                                { name: 'dairy', icon: 'milk' },
                                { name: 'spicey', icon: 'chili' },
                                { name: 'vegetarian', icon: 'plant' },
                            ],
                        },
                        {
                            name: "Pizza",
                            id: '9',
                            detail: "fresh baked pizza with our special sauce",
                            price: 7.50,
                            subCat: "Pizza",
                            isActive: true,
                            variants: [
                                {
                                    name: "Margarita",
                                    details: "classic cheese and tomato"
                                },
                                {
                                    name: "Pepperoni",
                                    details: "slice of cheap meats"
                                },
                                {
                                    name: "Hawaiian",
                                    details: "ham and pineapple"
                                },
                                {
                                    name: "Veggie",
                                    details: "a selection of fresh veg"
                                },
                                {
                                    name: "Meat Feast",
                                    details: "all the meats"
                                }
                            ],
                            moreInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
                            icons: [
                                { name: 'cheese', icon: 'cheese' },
                                { name: 'dairy', icon: 'milk' },
                                { name: 'spicey', icon: 'chili' },
                                { name: 'vegetarian', icon: 'plant' },
                            ],
                        }
                    ]
                }
            ],
        },
    ],
}

export default mockData