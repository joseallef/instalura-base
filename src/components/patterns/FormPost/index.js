import React from 'react';
import styled from 'styled-components';
import { Button } from '../../commons/Button';
import { Section, WrapperForm } from '../../commons/ModalPost/StyleWrapperPost';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';
import SelectionPost, { MyContext } from '../selectionPost';
import { ImageModal } from '../../commons/Image/ImageModal';

const WrapperInteration = styled.div`
  padding: 20px;
`;

// eslint-disable-next-line react/prop-types
export default function FormPost({ propsDoModal, onClose }) {
  const [urlInfo, setUrlInfo] = React.useState({
    url: '',
  });

  const [scrImg, setSrcImg] = React.useState({
    url: '/images/notExist.svg',
  });

  const [tones, setTone] = React.useState({});

  const contentPost = {
    INITIAL: 'INITIAL',
    POST: 'POST',
  };

  const [content, setContent] = React.useState(contentPost.INITIAL);

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUrlInfo({
      ...urlInfo, [fieldName]: event.target.value,
    });
    setSrcImg({
      url: event.target.value,
    });
  }

  function clearDate() {
    setContent(contentPost.INITIAL);
    setSrcImg({ url: '/images/notExist.svg' });
    setUrlInfo({
      ...urlInfo, url: '',
    });
    setTone({});
    onClose();
  }

  const isFormValid = urlInfo.url.length < 15;

  return (
    <MyContext.Provider value={{
      clearDate, tones, setTone,
    }}
    >
      <WrapperForm
      // eslint-disable-next-line react/jsx-props-no-spreading
        {...propsDoModal}
        id="formModal"
      >
        <Section
          onClick={() => {
            clearDate();
          }}
        >
          <img alt="close" src="/images/x.svg" />
        </Section>
        <ImageModal url={scrImg.url} tones={tones} />

        {content === contentPost.INITIAL && (
        <WrapperInteration>
          <TextField
            name="url"
            placeholder="URL da imagem"
            marginTop="30px"
            value={urlInfo.url}
            onChange={handleChange}
          />
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            textAlign={{
              xs: 'center',
            }}
          >
            Formatos suportados: jpg, png, svg e xpto.
          </Text>
          <Button
            variant="primary.main"
            disabled={isFormValid}
            style={{
              width: '100%',
            }}
            onClick={() => {
              setContent(contentPost.POST);
            }}
          >
            Avançar
          </Button>
        </WrapperInteration>
        )}
        {content === contentPost.POST && (
        <SelectionPost url={urlInfo.url} />
        )}
      </WrapperForm>
    </MyContext.Provider>
  );
}
