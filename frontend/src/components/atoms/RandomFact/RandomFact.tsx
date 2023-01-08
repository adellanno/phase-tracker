import "./RandomFact.css";
import { useEffect, useState} from "react";
import { getRandomFact } from '../../../services/getRandomFact'

function RandomFact() {
    const [randomFact, setRandomFact] = useState('');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    useEffect(() => {
        async function getToken() {
            const randomFact = await getRandomFact()
            setRandomFact(randomFact);
        }
        getToken();
    }, [])

  return (
    <div className="random-fact-container">
        <h1>Congratulations on completing all phases, here is a random fact:</h1>
        <div>{randomFact}</div>
    </div>
  );
}

export default RandomFact;
