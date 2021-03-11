import React, { useEffect, useState } from 'react';
import TopBanner from '../TopBanner/TopBanner';
import Leagues from '../Leagues/Leagues';
import './Home.css';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const allLeaguesUrl = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
        fetch(allLeaguesUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data.leagues);
                setLeagues(data.leagues.slice(0, 21));
            })
    }, [])

    return (
        <div>
            <TopBanner />
            <div className="all-leagues container">
                {
                    leagues.map(league => <Leagues key={league.idLeague} league={league}></Leagues>)
                }
            </div>
        </div>
    );
};

export default Home;