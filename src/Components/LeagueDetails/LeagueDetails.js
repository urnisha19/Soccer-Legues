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

    const { strLogo, strLeague, dateFirstEvent, strCountry, strSport, strGender, strDescriptionEN, strDescriptionFR, strTwitter, strFacebook, strYoutube } = league;

    return (
        <div className="league-details-page">
            <div className="top-banner" >
                <img src={strLogo} alt="" />
            </div>

            <div className="container">
                <div className="container-fluid card border-info m-5 league-details-card">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <div className="card-body">
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
                        <div className="col-md-6">
                            {
                                strGender === 'Male' ?
                                    <img src="https://i.ibb.co/Hhwvgs7/male.jpg" alt="male" className="w-100 rounded pt-3"></img>
                                    :
                                    <img src="https://i.ibb.co/yFM7sFs/female.jpg" alt="female" className="w-100 rounded pt-3"></img>
                            }
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <p>{strDescriptionEN}</p>
                    <br />
                    <p>{strDescriptionFR}</p>
                    <br />
                </div>
            </div>
            <div className="social-icons-style">
                <a href={strTwitter}><FontAwesomeIcon icon={faTwitter} /></a>
                <a href={strFacebook}> <FontAwesomeIcon icon={faFacebook} /></a>
                <a href={strYoutube}><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
        </div>
    );
};

export default LeagueDetails;