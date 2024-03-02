import bobAdvanced from "./bobAdvanced.json"
import Header from "./Header/Header"
import Dropdown from "./Dropdown/Dropdown"
import About from "./About/About"

const CompanyBox = () => {
  return (
    <main>
      <Header companyName={bobAdvanced.construction_company.name} />
      <About
        backstory={bobAdvanced.backstory}
        company={bobAdvanced.construction_company}
      />
      <Dropdown workers={bobAdvanced.construction_workers} />
    </main>
  )
}
export default CompanyBox
