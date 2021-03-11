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

    const {strBanner, strLogo, strLeague, dateFirstEvent, strCountry, strSport, strGender, strDescriptionEN, strDescriptionFR, strTwitter, strFacebook, strYoutube } = league;

    const bannerStyle = { 
        backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${strBanner})`,
        width:'100%', 
        height: '400px',
        backgroundAttachment:' fixed',
        backgroundPosition: "center",
        backgroundRepeat:'no-repeat'
    };

    return (
        <div className="league-details-page">
            <div className="bg-image text-center" style={bannerStyle}>
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
                                    <img src="https://i.ibb.co/VTzGhqj/male.jpg" alt="male" className="w-100 rounded p-3" ></img>
                                    :
                                    <img src="https://i.ibb.co/rykV7jV/female.jpg" alt="female" className="w-100 rounded p-3"></img>
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
                <a href={`https://${strTwitter}`} Target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href={`https://${strFacebook}`} Target="_blank"> <FontAwesomeIcon icon={faFacebook} /></a>
                <a href={`https://${strYoutube}`} Target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
        </div>
    );
};

export default LeagueDetails;