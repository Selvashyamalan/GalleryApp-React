// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {details, updatedSelectedId, isActive} = props
  const {id, thumbnailAltText, thumbnailUrl} = details
  const selectedThumbnail = isActive ? 'selected-thumbnail' : ''
  const onClickImage = () => {
    updatedSelectedId(id)
  }
  return (
    <li className="thumbnail-item">
      <button type="button" onClick={onClickImage} className="thumbnail-button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${selectedThumbnail}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
