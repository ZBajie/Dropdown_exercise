import PropTypes from "prop-types"

const Header = ({ companyName }) => {
  return (
    <header className="company-header">
      <h1>{companyName}</h1>
    </header>
  )
}

// perplexity
// Add prop type validation for companyName
// Solve eslint missing in props validation
Header.propTypes = {
  companyName: PropTypes.string.isRequired,
}

export default Header
