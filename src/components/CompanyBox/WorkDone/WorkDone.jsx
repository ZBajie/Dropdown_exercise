/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
const WorkDone = (worksDone) => {
  console.log(worksDone)
  return (
    <section className="work-done">
      <h2>Past Projects</h2>
      {worksDone.worksDone.map((item, i) => {
        return (
          <div key={i}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        )
      })}
    </section>
  )
}
export default WorkDone
