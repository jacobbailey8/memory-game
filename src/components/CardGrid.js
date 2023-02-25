import { useEffect } from "react";
import ironman from '../images/007_IronMan_2x_44222.png'
import '../index.css'


export default function CardGrid(props) {

    const cards = [
        {
            name: "Iron Man",
            id: 1,
            style: {
                backgroundImage: ironman
            }
        }
    ]

    function setGrid() {
        return (
            <div style={{ backgroundImage: ironman }} className="cardGrid d-flex flex-wrap" >

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