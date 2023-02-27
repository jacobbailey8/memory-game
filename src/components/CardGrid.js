import { useEffect, useState } from "react";
import ironman from '../images/ironman.png'
import spiderman from '../images/spiderman.png'
import hulk from '../images/hulk.png'
import thor from '../images/thor.png'
import thanos from '../images/thanos.png'
import deadpool from '../images/deadpool.png'
import wolverine from '../images/wolverine.png'
import magneto from '../images/magneto.png'
import '../index.css'


export default function CardGrid(props) {
    const [cardsPicked, setCardsPicked] = useState([]);
    const [cardsUnpicked, setCardsUnpicked] = useState([1, 2, 3, 4, 5, 6, 7, 8])

    const cards = [
        {
            name: "Iron Man",
            id: 1,
            style: {
                backgroundImage: `url(${ironman})`,
            }
        },
        {
            name: "Hulk",
            id: 2,
            style: {
                backgroundImage: `url(${hulk})`
            }
        },
        {
            name: "Spiderman",
            id: 3,
            style: {
                backgroundImage: `url(${spiderman})`
            }
        },
        {
            name: "Thanos",
            id: 4,
            style: {
                backgroundImage: `url(${thanos})`
            }
        },
        {
            name: "Wolverine",
            id: 5,
            style: {
                backgroundImage: `url(${wolverine})`
            }
        },
        {
            name: "Thor",
            id: 6,
            style: {
                backgroundImage: `url(${thor})`
            }
        },
        {
            name: "Magneto",
            id: 7,
            style: {
                backgroundImage: `url(${magneto})`
            }
        },
        {
            name: "Deadpool",
            id: 8,
            style: {
                backgroundImage: `url(${deadpool})`
            }
        }
    ]

    function getRandomItem(arr) {

        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);

        // get random item
        const item = arr[randomIndex];
        arr = arr.splice(randomIndex, 1)

        return item;
    }

    function setGrid() {
        let cardsHTML = cards.map((el) =>
            <div className='card' style={el.style} ></div>
        );
        return (
            <div className="cardGrid d-flex flex-wrap" >

                <div className="cardRow row col-sm-12 col-lg-6 my-5">

                    {getRandomItem(cardsHTML)}
                    {getRandomItem(cardsHTML)}

                </div>

                <div className="cardRow row col-sm-12 col-lg-6 my-5">
                    {getRandomItem(cardsHTML)}
                    {getRandomItem(cardsHTML)}
                </div>

                <div className="cardRow row col-sm-12 col-lg-6 my-5">
                    {getRandomItem(cardsHTML)}
                    {getRandomItem(cardsHTML)}
                </div>

                <div className="cardRow row col-sm-12 col-lg-6 my-5">
                    {getRandomItem(cardsHTML)}
                    {getRandomItem(cardsHTML)}
                </div>
            </div >
        )
    }

    useEffect(() => {
        setGrid()
    })
    return (
        setGrid()
    )
}