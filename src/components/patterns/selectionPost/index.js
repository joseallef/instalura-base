import React from 'react';
import PropTypes from 'prop-types';
import {
  WrapperPreviewImg, PreviewImg, Img,
} from '../../commons/ModalPost/StyleWrapperPost';
import { Button } from '../../commons/Button';
import Text from '../../foundation/Text';
import { Box } from '../../foundation/layout/Box';
import { MyContext } from '../../wrappers/WebsitePageLogged/context';
import { userService } from '../../../services/user/userService';

export { MyContext } from '../../wrappers/WebsitePageLogged/context';

export default function SelectionPost({ url }) {
  const { clearDate, tones, setTone } = React.useContext(MyContext);

  const effects = [
    {
      tones: 'normal',
      id: 1,
    },
    {
      tones: 'gracyscale',
      id: 2,
    },
    {
      tones: 'brightness',
      id: 3,
    },
    {
      tones: 'contrast',
      id: 4,
    },
  ];

  return (
    <>
      <WrapperPreviewImg>
        {effects.map((effect) => (
          <PreviewImg
            key={effect.tones}
            onClick={() => {
              setTone(effect.tones);
            }}
          >
            <Img src={url} alt="Image preview" variant={effect.tones} />
            <Text
              variant="paragraph1"
              tag="label"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
              }}
            >
              {effect.tones}
            </Text>
          </PreviewImg>
        ))}
      </WrapperPreviewImg>
      <Box
        display="flex"
        justifyContent="center"
      >
        <Button
          variant="primary.main"
          disabled={false}
          style={{
            width: '90%',
          }}
          onClick={() => {
            if (Object.values(tones).length === 0) {
              userService.post(url, 'normal');
              clearDate();
            } else {
              userService.post(url, tones);
              clearDate();
            }
            document.location.reload();
          }}
        >
          Postar
        </Button>
      </Box>
    </>
  );
}

SelectionPost.propTypes = {
  url: PropTypes.string.isRequired,
};
