import React from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    return (
        <>
        <section className='App'>
            <TwitterFollowCard isFollowing={true} userName='midudev' Name='Miguel Angel Duran'  />
            <TwitterFollowCard isFollowing={true} userName='pheralb' Name='Miguel Angel Duran'  />
            <TwitterFollowCard userName='elonmusk' Name='Miguel Angel Duran'  />
        </section>
        </>
    )
}