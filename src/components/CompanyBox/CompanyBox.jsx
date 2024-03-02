import bobAdvanced from "./bobAdvanced.json"
import Header from "./Header/Header"
import Dropdown from "./Dropdown/Dropdown"
import About from "./About/About"
import WorkDone from "./WorkDone/WorkDone"
import DropdownWithButton from "./DropdownWithButton/DropdownWithButton"

const CompanyBox = () => {
  return (
    <main>
      <Header companyName={bobAdvanced.construction_company.name} />
      <DropdownWithButton workers={bobAdvanced.construction_workers} />
      <Dropdown workers={bobAdvanced.construction_workers} />
      <WorkDone worksDone={bobAdvanced.past_projects} />
      <About
        backstory={bobAdvanced.backstory}
        company={bobAdvanced.construction_company}
      />
    </main>
  )
}
export default CompanyBox
