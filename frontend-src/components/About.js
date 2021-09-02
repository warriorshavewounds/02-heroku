import React, { useEffect } from "react"

function About() {
  useEffect(() => {
    document.title = "About Us | CAG's Amazing App"
  }, [])

  return (
    <div>
      <h2 className="display-4">Learn More About CAG</h2>
      <p className="lead">
        Coding Accountability Group(CAG) is the most popular <strong>codecademy facebook </strong> study group. Formed in AD 2021, January 21 we continue to help each other reach their study goals.
      </p>
      <div className="row">
        <div className="col-sm">
          <p>The aim of this study group is to cheer you on to get some studying done. Please share your daily, weekly or monthly goals here. We love to see those certificates, coding streaks and their accompanying projects!</p>
        </div>
        <div className="col-sm">
          <p>CAG's admin is Itoko Inla who is ably supported by founding members, conversation starters and rising stars. Everyone's path is unique, the destination is what matters. But make sure to enjoy the journey as much.
          To access the motivation tab, username= CAG and password=code</p>
        </div>
      </div>
    </div>
  )
}

export default About
