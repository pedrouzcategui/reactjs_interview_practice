import { generateMinesGrid } from "../../utils";
import "./styles.css";
import Cell from "../Cell/Cell";
import { GameContext } from "../../context/GameContext";
import { useEffect, useState } from "react";

const LENGTH = 10;

export default function MinesGrid() {
    const [grid, setGrid] = useState<number[][]>();
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const maxScore = window.localStorage.getItem('maxScore');

    useEffect(() => {
        setGrid(generateMinesGrid(LENGTH));
    }, []);

    return (
        <GameContext.Provider
            value={{ isGameOver, setIsGameOver, score, setScore }}
        >
            <div>
                <div className="score_bar">
                    <span>Score: {score}</span>
                    <span>Max Score: {maxScore ? maxScore : 0}</span>
                </div>
                <div className="minesgrid">
                    {grid?.map((row: Array<number>) => {
                        return row.map((value, index) => {
                            return <Cell key={`${value}-${index}`} cell={value} />;
                        });
                    })}
                </div>
            </div>
        </GameContext.Provider>
    );
}
