import {IProduct} from "../types/Products";
import Avocado from '../assets/images/products/avacado.jpg';
import Beetroot from '../assets/images/products/beetroots.jpg';
import Carrot from '../assets/images/products/carrot.png';
import Chickpea from '../assets/images/products/chickpea.jpg';
import Coconut from '../assets/images/products/coconut.jpg';
import Corn from '../assets/images/products/corn.jpg';
import Dhal from '../assets/images/products/dhal.png';
import Grapes from '../assets/images/products/grapes.jpg';
import Lime from '../assets/images/products/lime.jpg';
import Onions from '../assets/images/products/onions.jpg';
import RedChilli from '../assets/images/products/red_chili.jpg';
import Tomato from '../assets/images/products/tomato.png';
import dettol from '../assets/images/products/dettol.png';
import HandWash from '../assets/images/products/hand_wash.png';
import Mask from '../assets/images/products/face_mask.png';
import Diaper from '../assets/images/products/diaper.png';
import Cod_liver_oil from '../assets/images/products/cod_liver_oil.png';
import Biriyani from '../assets/images/products/biriyani.png';
import Mushroom from '../assets/images/products/mushrooms.png';
import SmokedFish from '../assets/images/products/smoked fish.png';
import Burger from '../assets/images/products/burger.png';
import Sousage from '../assets/images/products/gril-sousage.png';
import pizza from '../assets/images/products/pizza.png';
import FloorPolish from '../assets/images/products/floorPolish.png';
import Oven from '../assets/images/products/oven.png';
import CeilingFan from '../assets/images/products/ceiling fan.png';
import AirConditioner from '../assets/images/products/air conditionor.png';
import GasBurner from '../assets/images/products/gas-burner.png';
import DonutMaker from '../assets/images/products/donut-maker.png';

export const products : IProduct[] = [
    {
        id: 1,
        name: 'Avocado',
        price: 100,
        image:Avocado,
        category:'Grocery',
    },
    {
        id: 2,
        name: 'Beet Root',
        price: 120,
        image:Beetroot,
        category:'Grocery',
    },
    {
        id: 3,
        name: 'Carrot',
        price: 150,
        image:Carrot,
        category:'Grocery',
    },
    {
        id: 4,
        name: 'Chickpea',
        price: 80,
        image:Chickpea,
        category:'Grocery',
    },
    {
        id: 5,
        name: 'Coconut',
        price: 90,
        image:Coconut,
        category:'Grocery',
    },
    {
        id: 6,
        name: 'Corn',
        price: 30,
        image:Corn,
        category:'Grocery',
    },
    {
        id: 7,
        name: 'Dhal',
        price: 180,
        image:Dhal,
        category:'Grocery',
    },
    {
        id: 8,
        name: 'Grapes',
        price: 70,
        image:Grapes,
        category:'Grocery',
    },
    {
        id: 9,
        name: 'Lime',
        price: 110,
        image:Lime,
        category:'Grocery',
    },
    {
        id: 10,
        name: 'Onions',
        price: 160,
        image:Onions,
        category:'Grocery',
    },
    {
        id: 11,
        name: 'Red Chili',
        price: 200,
        image:RedChilli,
        category:'spices',
    },
    {
        id: 12,
        name: 'Tomato',
        price: 50,
        image:Tomato,
        category:'Grocery',
    },
    {
        id: 13,
        name: 'Dettol 30ml',
        price: 50,
        image:dettol,
        category:'Pharmacy',
    },
    {
        id: 14,
        name: 'Hand Wash',
        price: 200,
        image:HandWash,
        category:'Pharmacy',
    },
    {
        id: 15,
        name: 'Baby Diapers',
        price: 300.00,
        image:Diaper,
        category:'Pharmacy',
    },
    {
        id: 16,
        name: 'Codliver Oil',
        price: 100,
        image:Cod_liver_oil,
        category:'Pharmacy',
    },
    {
        id: 17,
        name: 'Face Mask',
        price: 30,
        image:Mask,
        category:'Pharmacy',
    },
    {
        id: 18,
        name: 'Dettol 30ml',
        price: 50,
        image:dettol,
        category:'Pharmacy',
    },
    {
        id: 19,
        name: 'Hand Wash',
        price: 200,
        image:HandWash,
        category:'Pharmacy',
    },
    {
        id: 20,
        name: 'Codliver Oil',
        price: 100,
        image:Cod_liver_oil,
        category:'Pharmacy',
    },
    {
        id: 21,
        name: 'Chicken Biriyani',
        price: 50,
        image:Biriyani,
        category:'Food',
    },
    {
        id: 22,
        name: 'Mushroom',
        price: 50.00,
        image:Mushroom,
        category:'Food',
    },
    {
        id: 23,
        name: 'Smoked Fish',
        price: 50,
        image:SmokedFish,
        category:'Food',
    },
    {
        id: 24,
        name: 'Burger',
        price: 50.00,
        image:Burger,
        category:'Food',
    },
    {
        id: 25,
        name: 'Grill Sausages',
        price: 50,
        image:Sousage,
        category:'Food',
    },
    {
        id: 26,
        name: 'Burger',
        price: 50,
        image:Burger,
        category:'Food',
    },
    {
        id: 27,
        name: 'Pizza',
        price: 50,
        image:pizza,
        category:'Food',
    },
    {
        id: 28,
        name: 'Gas burner',
        price: 50,
        image:GasBurner,
        category:'Electronic',
    },
    {
        id: 29,
        name: 'Floor Polisher',
        price: 50,
        image:FloorPolish,
        category:'Electronic',
    },
    {
        id: 30,
        name: 'Electric Over',
        price: 50,
        image:Oven,
        category:'Electronic',
    },
    {
        id: 31,
        name: 'Donut Maker',
        price: 50,
        image:DonutMaker,
        category:'Electronic',
    },
    {
        id: 32,
        name: 'AirConditioner',
        price: 50,
        image:AirConditioner,
        category:'Electronic',
    },
    {
        id: 33,
        name: 'Ceiling Fan',
        price: 50,
        image:CeilingFan,
        category:'Electronic',
    },
    {
        id: 34,
        name: 'Electric Oven',
        price: 50,
        image:Oven,
        category:'Electronic',
    },
    {
        id: 35,
        name: 'Floor Polisher',
        price: 50,
        image:FloorPolish,
        category:'Electronic',
    }
]

