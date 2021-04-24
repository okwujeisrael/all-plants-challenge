/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Card from './card';

describe('<Card />', () => {
  const cardDetails = {
    title: 'some title',
    description: 'some description',
    imageUrl: 'some url',
    id: 4,
    handle: 'some handle',
  };

  test('Card renders correct content', () => {
    const component = render(
      <Card
        title={cardDetails.title}
        id={cardDetails.id}
        imageUrl={cardDetails.imageUrl}
        description={cardDetails.description}
        handle={cardDetails.handle}
      />,
    );
    const title = component.container.querySelector('.card-title');
    const description = component.container.querySelector('.card-description');
    const image = component.container.querySelector('.card-image');
    const button = component.container.querySelector('.card-button');

    expect(title).toHaveTextContent(cardDetails.title);
    expect(description).toHaveTextContent(cardDetails.description);
    expect(image).toHaveProperty('alt', cardDetails.handle);
    expect(button).toHaveTextContent('Add to basket');
  });
});
