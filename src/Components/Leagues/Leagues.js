import React from 'react';
import './Leagues.css';
import { useHistory } from 'react-router';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Leagues = (props) => {
    const { idLeague, strLeague, strSport } = props.league;
    const history = useHistory();
    const handleClick = (leagueId) => {
        history.push(`/league/${leagueId}`)
    }
    return (
        <Card className="league-card border-info">
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{strLeague}</Card.Title>
                <Card.Text><b>Sport Type:</b> {strSport}</Card.Text>
                <Button variant="info" onClick={() => handleClick(idLeague)}>Explore</Button>
            </Card.Body>
        </Card>
    );
};

export default Leagues;