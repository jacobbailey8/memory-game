
import Scoreboard from './Scoreboard.js'
import '../index.css'
export default function Header(props) {



    return (
        <div className="header d-flex justify-content-around flex-wrap">
            <div>logo</div>
            <Scoreboard />
        </div>

    )
}