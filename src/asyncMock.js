const products = [
    {
        id: '1',
        name: 'Duelist Nexus',
        price: 1500,
        category: 'Expansion',
        img: 'https://ms.yugipedia.com//f/fc/DUNE-BoosterEN.png',
        stock: 10,
        description: '¡Acelera las cosas de nuevo y entra en el Duelist Nexus con la expansión de refuerzo de este verano!',
    },
    {
        id: '2',
        name: 'Legendary Duelists: Soulburning Volcano',
        price: 1300,
        category: 'Expansion',
        img: 'https://ms.yugipedia.com//9/90/LD10-BoosterEN.png',
        stock: 5,
        description: 'The flames of battle burn bright in Legendary Duelists: Soulburning Volcano!',
    },
    {
        id: '3',
        name: 'Age of Overlord',
        price: 1500,
        category: 'Expansion',
        img: 'https://ms.yugipedia.com//6/60/AGOV-BoosterEN.png',
        stock: 7,
        description: 'A new age dawns this Fall with Age of Overlord, the latest core booster for the YuGiOh! TRADING CARD GAME (TCG)',
    },
    {
        id: '4',
        name: '25th Anniversary Rarity Collection',
        price: 1400,
        category: 'Caja',
        img: 'https://ms.yugipedia.com//a/a9/RA01-BoosterEN.png',
        stock: 10,
        description: 'The 25th Anniversary Rarity Collection is a spectacular all-foil set with 79 of the game’s most popular cards, each available in 7 different rarities, including 2 brand-new rarities:',
    },
    {
        id: '5',
        name: 'Gold Pride Carrie’s Crew Card Sleeves',
        price: 300,
        category: 'Accesorios',
        img: 'https://img.yugioh-card.com/en/wp-content/uploads/2023/02/GOPR_sleeves_550.png',
        stock: 7,
        description: 'Las Fundas de Cartas Oficiales de YuGiOh! JUEGO DE CARTAS COLECCIONABLES (JCC) ayudan a los Duelistas a proteger sus cartas durante los Duelos.',
    },
    {
        id: '6',
        name: '25th Anniversary Tin: Dueling Heroes',
        price: 800,
        category: 'Lata',
        img: 'https://ms.yugipedia.com//thumb/5/57/25thAnniversaryTin-PromoEN.png/386px-25thAnniversaryTin-PromoEN.png',
        stock: 6,
        description: '¡Celebra nuestro 25.º aniversario con la Lata 25.º Aniversario: Héroes de los Duelos con cartas Raras Secretas Prismáticas duplicadas y una Rara Secreta Cuarto de Siglo de regalo en cada Lata!',
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        console.log (productCategory)
        setTimeout(() => {
            resolve(products.filter(prod => prod.category.toLowerCase() === productCategory.toLowerCase()))
        }, 500)
    })
}
