import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ images, handleOnImage }) => {
  return images.map(({ webformatURL, id }) => (
    <li className={s.item} key={id} onClick={() => handleOnImage(id)}>
      <img src={webformatURL} alt="" className={s.itemImage} />
    </li>
  ));
};
