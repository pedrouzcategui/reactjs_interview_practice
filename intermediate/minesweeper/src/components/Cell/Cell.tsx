import { useContext, useState } from "react";
import styles from "./style.module.css"
import { GameContext } from "../../context/GameContext";

const BOMB = 'BOMB'

type CellProps = {
    cell: number | string;
    display?: boolean
}


export default function Cell({ cell }: CellProps) {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const { isGameOver, setIsGameOver, setScore, score } = useContext(GameContext);
    const handleDisplay = () => {
        if (isGameOver) return;
        if (isDisplayed) return;
        setIsDisplayed(!isDisplayed);
        if (cell == BOMB) {
            alert('Game Over');
            window.localStorage.setItem('maxScore', score.toString());
            setIsGameOver(true);
            return;
        }
        setScore(score + 1)
    }

    return (
        <div onClick={() => handleDisplay()} className={styles.cell}>
            {
                isDisplayed &&
                <span className={styles.cell_content}>
                    {cell === BOMB ? '🎃' : cell}
                </span>
            }
        </div>
    )
}
