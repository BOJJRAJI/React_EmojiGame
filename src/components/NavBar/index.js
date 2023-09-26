import './index.css'

const NavBar = props => {
  const {isGameInProgress, topScore, score} = props

  return (
    <div className="navbar-container">
      <div className="logo-heading-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="icon"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="display-score-container">
          <p className="score-line">Score: {score}</p>
          <p className="score-line">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
