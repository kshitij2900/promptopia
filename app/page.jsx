import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
      Discover & Share
      <br className="max-md"/>
      <span className="orange_gradient text-center">
        AI-Powered Prompts
      </span>
      <p className="desc text-center">
        Promptia is an open source ai prompting tool for mordern world to discover create and share creative prompts 
      </p>
      </h1>
      {/* Feed */}
      <Feed/>
    </section>
  )
}

export default Home
