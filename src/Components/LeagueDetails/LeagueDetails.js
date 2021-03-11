import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDay, faFlag, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-regular-svg-icons';

const LeagueDetails = () => {
    const { leagueId } = useParams();
    const [league, setLeague] = useState({});
    useEffect(() => {
        const leagueDetailUrl = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(leagueDetailUrl)
            .then(response => response.json())
            .then(data => {
                setLeague(data.leagues[0]);
            })
    }, [leagueId]);
    const {strLogo, strLeague, dateFirstEvent, strCountry, strSport, strGender, strDescriptionEN, strDescriptionFR, strTwitter, strFacebook, strYoutube } = league;
    const maleImg = "https://i.ibb.co/VTzGhqj/male.jpg";
    const femaleImg = "https://i.ibb.co/rykV7jV/female.jpg";
    return (
        <div className="league-details-page">

            <section className="top-banner">
                <img src={strLogo} alt="" style={{ display: 'flex', position: 'relative' }} className="w-50" />
            </section>

            <section>
                <div className="container py-3">
                    <div className="card league-details-card border-info">
                        <div className="row ">
                            <div className="col-md-4">
                                <img src={strGender === 'Male' ? maleImg : femaleImg} alt="" class="w-100" />
                            </div>
                            <div className="col-md-8 px-3">
                                <div className="card-block px-3">
                                    <h2 className="card-title">{strLeague}</h2>
                                    <p className="card-text">
                                        <FontAwesomeIcon icon={faCalendarDay} />
                                        <b> Founded: </b>{dateFirstEvent} <br />
                                        <FontAwesomeIcon icon={faFlag} />
                                        <b> Country: </b>{strCountry} <br />
                                        <FontAwesomeIcon icon={faFutbol} />
                                        <b> Sport Type: </b>{strSport}<br />
                                        <FontAwesomeIcon icon={faVenusMars} />
                                        <b> Gender: </b>{strGender}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <p>{strDescriptionEN}</p>
                <br />
                <p>{strDescriptionFR}</p>
            </section>
            
            <div className="social-icons-style">
                <a href={`https://${strTwitter}`} Target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href={`https://${strFacebook}`} Target="_blank"> <FontAwesomeIcon icon={faFacebook} /></a>
                <a href={`https://${strYoutube}`} Target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
        </div>
    );
};

export default LeagueDetails;