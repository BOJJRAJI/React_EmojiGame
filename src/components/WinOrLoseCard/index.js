import './index.css'

const WinOrLoseCard = props => {
  const {score, payAgain, isWon} = props
  const text = isWon ? 'You Won' : 'You Lose'
  const para = isWon ? 'Best Score' : 'Score'
  const image = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="result-card-container">
      <div className="text-container">
        <h1 className="text">{text}</h1>
        <p className="para">{para}</p>
        <p className="score">{score}/12</p>
        <button
          className="pay-again-button"
          type="button"
          onClick={() => payAgain()}
        >
          Play Again
        </button>
      </div>
      <img src={image} alt="win or lose" className="result-image" />
    </div>
  )
}

export default WinOrLoseCard
