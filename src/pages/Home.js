import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './Home.css'

function Home() {
    const {name, date, days} = useParams();

    const daysDifference = (d) => {
        if (d === "0" || d === 0) {
            d = date
        }
        const now = new Date()
        const difference = Math.abs((new Date(d).getTime() - now.getTime()) / (1000 * 3600 * 24))

        return difference.toFixed()

    }

    const [player] = useState(name)
    const [daysSince] = useState(daysDifference(date))
    const [record, setRecord] = useState(days)

    useEffect(() => {
        if (record < Number(daysSince)) {
            setRecord(daysSince)
        }
    }, [record, daysSince])

    const formatDays = (days) => {
        return days.toString().split('').map(
            (char, index) => {
                return <span key={index}>{char}</span>
            }
        )
    }

    return (
        <section className="home">
            <header>
                <h2>CIPA <br /><small>COMISSÃO INTERNA DE PLAYERS ANÔNIMOS</small></h2>
            </header>
            <div className="content">
                <div className="image">
                    <img src="https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$" alt="playstation 4" />
                </div>
                <div className="data">
                    <p>{player} está há {formatDays(daysSince)} dias sem jogar.</p>
                    <p>Seu recorde é de {formatDays(record)}  dias.</p>
                </div>
            </div>
            <footer><p>Colabore para melhorar esse índice</p></footer>
        </section>
    );
}

export default Home
