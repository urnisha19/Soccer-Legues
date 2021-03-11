import './Leagues.css';
import { useHistory } from 'react-router';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const Leagues = (props) => {
    const { idLeague, strLeague, strSport } = props.league;
    const history = useHistory();
    const handleClick = (leagueId) => {
        history.push(`/league/${leagueId}`)
    }

    const [leagueImg, setLeagueImg] = useState({});
    useEffect(() => {
        const leagueDetailUrl = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(leagueDetailUrl)
            .then(response => response.json())
            .then(data => {
                setLeagueImg(data.leagues[0]);
            })
    }, [idLeague]);

    return (
        <Card className="league-card border-info  shadow">
            <Card.Img variant="top" src={leagueImg.strBadge} />
            <Card.Body>
                <Card.Title className="text-info">{strLeague}</Card.Title>
                <Card.Text><b>Sport Type:</b> {strSport}</Card.Text>
                <Button
                    variant="info"
                    onClick={() => handleClick(idLeague)}>
                    <FontAwesomeIcon icon={faArrowRight} /> Explore
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Leagues;