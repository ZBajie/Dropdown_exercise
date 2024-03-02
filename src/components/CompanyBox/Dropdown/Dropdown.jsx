import { useState } from "react"

const Dropdown = (workers) => {
  const [workerInfo, setWorkerInfo] = useState()
  const handleChange = (e) => {
    setWorkerInfo(workers.workers[e.target.value])
  }
  return (
    <section className="company-dropdown">
      <select name="workers" id="workers" onChange={handleChange}>
        <option>Select worker</option>
        {workers.workers.map((worker, i) => {
          return (
            <option value={i} key={i}>
              {worker.firstname} {worker.lastname}
            </option>
          )
        })}
      </select>

      {workerInfo && (
        <article>
          <ul>
            <li>
              <span className="listSpan">Pants color:</span>{" "}
              {workerInfo.pant_color}
            </li>
            <li>
              <span className="listSpan">Favorite food:</span>{" "}
              {workerInfo.favorite_food.join(", ")}
            </li>
            <li>
              <span className="listSpan">Favorite tool:</span>
              {workerInfo.favorite_tool}{" "}
            </li>
            <li>
              <span className="listSpan">Pet:</span>
              {workerInfo.pet.join(", ")}
            </li>
            <li>
              <span className="listSpan">Hobby:</span>
              {workerInfo.hobby.join(", ")}
            </li>
          </ul>
        </article>
      )}
    </section>
  )
}

export default Dropdown
