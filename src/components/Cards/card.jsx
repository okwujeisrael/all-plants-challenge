/* eslint-disable react/prop-types */
import axios from 'axios';
import {
  SCard,
  SImageWrapper,
  SCardImage,
  SCardTitle,
  SCardDescription,
} from './cards.styled';
import { SCardButton } from '../Buttons/buttons.styled';

const Card = ({
  title,
  description,
  imageUrl,
  id,
  handle,
  count,
  incrementCount,
}) => {
  const handleClick = async (e) => {
    await axios.post('https://606c8796c445570017a47531.mockapi.io/basket', { id: e.target.id });
    incrementCount(count + 1);
  };

  return (
    <SCard>
      <SImageWrapper>
        <SCardImage
          src={imageUrl}
          alt={handle}
          className="card-image"
        />
      </SImageWrapper>
      <SCardTitle className="card-title">{title}</SCardTitle>
      <SCardDescription className="card-description">{description}</SCardDescription>
      <SCardButton
        id={id}
        onClick={handleClick}
        className="card-button"
      >
        Add to basket
      </SCardButton>
    </SCard>
  );
};

export default Card;
