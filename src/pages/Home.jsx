import React from 'react'
import '../App.css'



export const Home = () => {
  return (
    <div className='container'> 
      <div className="wrapper">
        <div className="one">
          <div className='title'>
            <h2>Join our community</h2>
          </div>
          <div className='sub-title'>
            <p className='paragraph-1'>30-day, hassle-free money back guarantee</p>
            <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
          </div>
        </div>
        <div className="two">
          <div className='title-2'>
            <h3>Monthly Subscription</h3>
          </div>
          <div className='paragraph-2'>
            <h3>$29 <span>per month</span></h3>
            <p>Full access for less than $1 a day</p> 
          </div>
          <div className='btn'>
            <button>Sign Up</button>  
          </div>
        </div>
        <div className="three">
          <div className='title-3'>
            <h3>Why Us</h3>
          </div>
          <div className='paragraph-3'>
            <p>Tutorials by industry experts
            Peer &amp; expert code review
            Coding exercises
            Access to our GitHub repos
            Community forum
            Flashcard decks
            New videos every week</p>
          </div>
        </div>
      </div>
    </div>
  )
}
