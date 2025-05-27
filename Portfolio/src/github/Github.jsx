import React, { useEffect, useState } from 'react';
import './github.css';
import { useLoaderData } from 'react-router-dom';



function Github() {
    const data = useLoaderData();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/rishavrajj3225')
    //         .then((response) => {
    //             if (!response.ok) throw new Error('Network response was not ok');
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setData(data);
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             setError(err.message);
    //             setLoading(false);
    //         });
    // }, []);

    // if (loading) return <div className="github-card github-loading">Loading...</div>;
    // if (error) return <div className="github-card github-error">Error: {error}</div>;

    return (
        <div className="github-card github-glass">
            <img className="github-avatar" src={data.avatar_url} alt="GitHub profile" />
            <h2 className="github-name">{data.name || data.login}</h2>
            <p className="github-username">@{data.login}</p>
            <div className="github-stats">
                <div>
                    <span className="github-label">Followers</span>
                    <span className="github-value">{data.followers}</span>
                </div>
                <div>
                    <span className="github-label">Following</span>
                    <span className="github-value">{data.following}</span>
                </div>
                <div>
                    <span className="github-label">Repos</span>
                    <span className="github-value">{data.public_repos}</span>
                </div>
            </div>
            {data.bio && <p className="github-bio">{data.bio}</p>}
            <a className="github-link" href={data.html_url} target="_blank" rel="noopener noreferrer">
                <span role="img" aria-label="GitHub">🐙</span> View Profile
            </a>
        </div>
    );
}

export default Github;


export const githubInfoLoader=async()=>{
    const response = await fetch("https://api.github.com/users/rishavrajj3225");

    return response.json();// ye ek proimse hai 
}
