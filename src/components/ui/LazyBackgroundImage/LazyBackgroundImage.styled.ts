import styled from 'styled-components';
import { ILazyBackgroundImage } from './LazyBackgroundImage.types';

type StyledLazyBackgroundProps = Pick<ILazyBackgroundImage, 'position' | 'size'> & {
  $imageUrl?: string;
  $placeholder?: string;
};

export const StyledLazyBackground = styled.div<StyledLazyBackgroundProps>`
  background-image: url(${props => props.$placeholder});
  background-position: ${props => props.position || 'center'};
  background-repeat: no-repeat;
  background-size: ${props => props.size || 'cover'};
  transition: background-image 0.3s ease-in;

  &.image-loaded {
    background-image: url(${props => props.$imageUrl});
  }
`;
