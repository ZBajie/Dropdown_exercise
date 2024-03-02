const About = ({ backstory, company }) => {
  return (
    <article className="company-about">
      <header>
        <h2>{company.name}</h2>
        <p>{company.home_town}</p>
      </header>
      <p>{backstory}</p>
    </article>
  )
}
export default About
