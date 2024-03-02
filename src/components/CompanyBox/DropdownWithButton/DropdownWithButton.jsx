import { useState } from "react"

const DropdownWithButton = (workers) => {
  const [menu, setMenu] = useState(false)
  const [workerInfo, setWorkerInfo] = useState()

  const handleClick = () => {
    if (menu) {
      setMenu(false)
    } else {
      setMenu(true)
    }
  }
  const handleSelectWorker = (e) => {
    setWorkerInfo(workers.workers[e.currentTarget.dataset.value])
    setMenu(false)
  }
  return (
    <section className="dropdown-menu-button">
      {workerInfo && (
        <article>
          <h3>
            {workerInfo.firstname} {workerInfo.lastname}
          </h3>

          <ul>
            <li>
              <span className="listSpan">Pants color:</span>{" "}
              {workerInfo.pant_color}
            </li>
            <li>
              <span className="listSpan">Favorite tool:</span>
              {workerInfo.favorite_tool}{" "}
            </li>
            <li>
              <span className="listSpan">Favorite food:</span>{" "}
              {workerInfo.favorite_food.join(", ")}
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
      <div>
        {menu && (
          <ul className="menu">
            {workers.workers.map((item, i) => {
              return (
                <li key={i} data-value={i} onClick={handleSelectWorker}>
                  {item.firstname} {item.lastname}
                </li>
              )
            })}
          </ul>
        )}
        <button onClick={handleClick}>Select worker</button>
      </div>
    </section>
  )
}

export default DropdownWithButton
