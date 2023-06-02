const RastlineArr = [
    {
        index: 0,
        title: 'Ilirska perunika',
        sciName: 'Iris illyrica',
        description: 'Listi ilirske perunike. Medij akvarel.',
    },
    {
        index: 1,
        title: 'Ilirska perunika',
        sciName: 'Iris illyrica',
        description: 'Neodprti cvetovi ilirske perunike. Medij akvarel.'
    },
        {
        index: 2,
        title: 'Ilirska perunika',
        sciName: 'Iris illyrica',
        description: 'Odprti cvet ilirske perunike. Medij akvarel.'
    },
        {
        index: 3,
        title: 'Ilirska perunika',
        sciName: 'Iris illyrica',
        description: 'Plodovi ilirske perunike. Medij akvarel.'
    },
        {
        index: 4,
        title: 'Veliki pajesen',
        sciName: 'Ailanthus altissima',
        description: 'Mladi listi invazivnega velikega pajesna. Medij akvarel.'
    },
        {
        index: 5,
        title: 'Navadna kanela',
        sciName: 'Arundo donax',
        description: 'Navadna kanela ob koncu sezone. Medij Akvarel.'
    },
        {
        index: 6,
        title: 'Luskasta nebina',
        sciName: 'Aster squamatus',
        description: 'Invazivna vrsta luskasta nebina. Medij akvarel'
    },
        {
        index: 7,
        title: 'Tolščkasta loboda',
        sciName: 'Atriplex portulacoides',
        description: 'Tolščkasta loboda. Medij akvarel.'
    },
        {
        index: 8,
        title: 'Klasnata tavžentroža',
        sciName: 'Centaurium spicatum',
        description: 'Redka klasnata tavžentroža'
    },
        {
        index: 9,
        title: 'Ozkolistni jesen',
        sciName: 'Fraxinus angustifolia',
        description: 'Ozkolisti jesen. Medij akvarel.'
    },
        {
        index: 10,
        title: 'Dvokrpi ginko',
        sciName: 'Ginkgo biloba',
        description: 'Dvokrpi ginko. Medij ink in akvarel'
    },
        {
        index: 11,
        title: 'Dvokrpi ginko',
        sciName: 'Ginkgo biloba',
        description: 'Dvokrpi ginko. Medij ink.'
    },
    {
        index: 12,
        title: 'Obmorski oman',
        sciName: 'Inula crithmoides',
        description: 'Obmorski oman. Medij akvarel.'
    },
    {
        index: 13,
        title: 'Ilirska perunika',
        sciName: 'Iris illyrica',
        description: 'Odprti cvetovi ilirske perunike. Medij ink.'
    },
    {
        index: 14,
        title: 'Obmorsko ločje',
        sciName: 'Juncus maritimus',
        description: 'Obmorsko ločje. Medij akvarel.'
    },
        {
        index: 15,
        title: 'Ozkolistna mrežica',
        sciName: 'Limonium angustifolium',
        description: 'Ozkolistna mrežica. Medij akvarel.'
    },
        {
        index: 16,
        title: 'Obmorski lan',
        sciName: 'Linum maritimum',
        description: 'Obmorski lan. Medij akvarel'
    },
        {
        index: 17,
        title: 'Oljka',
        sciName: 'Olea europaea',
        description: 'Oljka. Medij suhi pasteli.'
    },
        {
        index: 18,
        title: 'Navadni trst',
        sciName: 'Phragmites australis',
        description: 'Navadni trst. Medij akvarel.'
    },
]

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sTerm = '';

rl.question('search term: ', (searchTerm) => {
    sTerm = searchTerm;
    console.log(`this is you search term: ${sTerm}`);
    rl.close();
    regSearch();
});

if (sTerm) {
    regSearch()
}


function regSearch() {

    const regex = new RegExp(sTerm, 'i');
    console.log(regex) 

    for (let i = 0; i <= RastlineArr.length -1; i++) {
        
        if (regex.test(RastlineArr[i].title)) {
            console.log(RastlineArr[i].title);
        }
        if (regex.test(RastlineArr[i].sciName)) {
            console.log(RastlineArr[i].sciName);
        }
        if (regex.test(RastlineArr[i].description)) {
            console.log(RastlineArr[i].description);
        }
    }

}
