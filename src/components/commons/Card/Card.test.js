import React from 'react';
import { render, screen } from '../../../infra/test/testUtils';
import Card from './index';

const obj = [
  {
    data: {
      createdAt: '2021-06-13T21:13:52.424Z',
      description: 'new image',
      filter: 'normal',
      likes: {
        user: '6050273c332427000974045d',
        _id: '60c7edce11d0bc0008e5969c',
      },
      photoUrl: 'https://cdn.pixabay.com/photo/2015/06/05/15/02/audi-798530_960_720.jpg',
      updatedAt: '2021-06-15T00:01:18.496Z',
      user: '6050273c332427000974045d',
      _id: '60c6751056345e00089148d6',
    },
  },
  {
    data: {
      createdAt: '2021-06-13T21:13:52.424Z',
      description: 'new image',
      filter: 'normal',
      likes: {
        user: '6050273c332427000974045d',
        _id: '60c7edce11d0bc0008e5969c',
      },
      photoUrl: 'https://cdn.pixabay.com/photo/2015/06/05/15/02/audi-798530_960_720.jpg',
      updatedAt: '2021-06-15T00:01:18.496Z',
      user: '6050273c332427000974045d',
      _id: '60c6751056345e00089148d4',
    },
  },
];

const objUser = {
  username: 'Allef',
  _id: 1,
};

describe('<Card />', () => {
  test('renders the component', () => {
    const res = render(
      <Card
        post={obj}
        user={objUser}
      />,
    );

    screen.debug();

    expect(res).toMatchSnapshot();
  });
});
