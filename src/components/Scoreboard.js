import { useState } from "react"

export default function Scoreboard(props) {
    const [curScore, setCurScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    return (
        <div className="d-flex gap-5">
            <div className="currentScore">Current Score: {curScore}</div>
            <div className="highScore">High Score: {highScore}</div>
        </div>
    )
}