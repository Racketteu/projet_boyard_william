const { Product } = require('./models/index');

const products = [
    {
      "name": "Thé Équinoxe des Feuilles",
      "category": "Thé",
      "price": 11.99,
      "imageURL":"/assets/Products/TheAutomne.png"
    },
    {
      "name": "Thé Lumière de l'Aube",
      "category": "Thé",
      "price": 11.99,
      "imageURL":"../../assets/Products/ThePrintemps.png"
    },
    {
      "name": "Thé Nébuleuse des Tropiques",
      "category": "Thé",
      "price": 11.99,
      "imageURL":"../../assets/Products/TheEte.png"
    },
    {
      "name": "Thé Étoile des neiges",
      "category": "Thé",
      "price": 11.99,
      "imageURL":"../../assets/Products/TheHiver.png"
    },
    {
      "name": "Café du Nord",
      "category": "Café",
      "price": 13.99,
      "imageURL":"../../assets/Products/CafeNord.png"
    },
    {
      "name": "Café du Sud",
      "category": "Café",
      "price": 13.99,
      "imageURL":"../../assets/Products/CafeSud.png"
    },
    {
      "name": "Café de l'Est",
      "category": "Café",
      "price": 13.99,
      "imageURL":"../../assets/Products/CafeEst.png"
    },
    {
      "name": "Café de l'Ouest",
      "category": "Café",
      "price": 13.99,
      "imageURL":"../../assets/Products/CafeOuest.png"
    },
    {
      "name": "Machine à café",
      "category": "Machine",
      "price": 149.99,
      "imageURL":"../../assets/Products/MachineCafe.png"
    },
    {
      "name": "Machine à thé",
      "category": "Machine",
      "price": 129.99,
      "imageURL":"../../assets/Products/MachineThe.png"
    },
    {
      "name": "Machine à café Wario",
      "category": "Machine",
      "price": 299.99,
      "imageURL":"../../assets/Products/MachineWario.png"
    }
];

const seedDatabase = async () => {
    await Product.bulkCreate(products);
    console.log('Products have been added to the database.');
};

module.exports = seedDatabase;
