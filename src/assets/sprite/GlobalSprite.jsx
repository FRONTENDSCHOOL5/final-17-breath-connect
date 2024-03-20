import SpriteSVG from './spriteSheet.svg';

const GlobalSprite = ({ id, color, size = 24 }) => {
  return (
    <svg fill={color} stroke={3} width={size} height={size}>
      <use href={`${SpriteSVG}#${id}`} />
    </svg>
  );
};

export default GlobalSprite;
