import './index.css'

const EmojiCard = props => {
  const {item, getEmoji} = props
  return (
    <li className="emoji-card">
      <button
        type="button"
        className="emoji-button"
        onClick={() => getEmoji(item.id)}
      >
        <img src={item.emojiUrl} alt={item.emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
