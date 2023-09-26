import {Component} from 'react'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {isGameInProgress: true, topScore: 0, clickedImagesIds: []}

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  getEmoji = id => {
    const {clickedImagesIds, topScore} = this.state
    const {emojisList} = this.props
    const isIncludes = clickedImagesIds.includes(id)
    const dataLength = clickedImagesIds.length

    if (isIncludes) {
      this.finishGameAndSetTopScore(dataLength)
    } else if (emojisList.length - 1 === dataLength) {
      this.finishGameAndSetTopScore(emojisList.length)
    }
    this.setState(prevState => ({
      clickedImagesIds: [...prevState.clickedImagesIds, id],
    }))
  }

  payAgain = () => {
    const {topScore, clickedImagesIds} = this.state
    if (clickedImagesIds.length > topScore) {
      this.setState({
        isGameInProgress: true,
        topScore: clickedImagesIds.length,
        clickedImagesIds: [],
      })
    }
    this.setState({clickedImagesIds: [], isGameInProgress: true})
  }

  startGameAgain = () => {
    this.setState({clickedImagesIds: [], isGameInProgress: true})
  }

  renderGameView = () => {
    const {emojisList} = this.props
    const stuffleEmojiLists = emojisList.sort(() => Math.random() - 0.5)
    return (
      <div className="game-bg-container">
        <ul className="images-list-container">
          {stuffleEmojiLists.map(item => (
            <EmojiCard item={item} key={item.id} getEmoji={this.getEmoji} />
          ))}
        </ul>
      </div>
    )
  }

  renderResultView = () => {
    const {clickedImagesIds} = this.state
    const {emojisList} = this.props
    const isWon = clickedImagesIds.length === emojisList.length
    return (
      <div className="result-bg-container">
        <WinOrLoseCard
          isWon={isWon}
          score={clickedImagesIds.length}
          payAgain={this.startGameAgain}
        />
      </div>
    )
  }

  render() {
    const {isGameInProgress, topScore, clickedImagesIds} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <NavBar
            isGameInProgress={isGameInProgress}
            topScore={topScore}
            score={clickedImagesIds.length}
          />
          {isGameInProgress ? this.renderGameView() : this.renderResultView()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
