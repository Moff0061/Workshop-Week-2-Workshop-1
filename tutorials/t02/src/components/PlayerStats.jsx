import { useState } from 'react';

function PlayerStats() {
    ///const stats = { health: 100, gold: 0 };
    const [stats, setStats] = useState({
        health: 100,
        gold: 0
    });
    const { health, gold } = stats;

    const takeDamage = () => {
        const updatedStats = { ...stats, health: health - 20 };
        setStats(updatedStats);
    };

    const findLoot = () => {
        const updatedStats = { ...stats, gold: gold + 10 };
        setStats(updatedStats);
    };

    return (
    <>
    <div className="stats-card">
        <h2>Player Stats</h2>
        <p>Health: {health}</p>
        <p>Gold: {gold}</p>
        <button onClick={takeDamage}>Take Damage</button>
        <button onClick={findLoot}>Find Loot</button>
        {health <= 40 ? <p>Warning: Low Health!</p> : <p>Status: Healthy</p>}
    </div>
    </>
);
}

export default PlayerStats;