import React from 'react';
import { Lottie } from   '@crello/react-lottie';
import successAnimation from './../animations/success.json';
import errorAnimation from  './../animations/error.json';
import { Button } from '../../commns/Button';
import TextField from '../../forms/TextField';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';


const formStates = {
    DEFAULT: 'DEFAULT',
    LOADING: 'LOADING',
    DONE: 'DONE',
    ERROR: 'ERROR',    
}

function FormContent() {
    const [isFormSubmited, setIsFormSubmited] = React.useState(false);
    const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);
    
    const [userInfo, setUserInfo] = React.useState({
        usuario: 'Allef',
        nome: 'Jose Allef',
    });

    function handleChange(event) {
        const fieldName = event.target.getAttribute('name');
        setUserInfo({
            ...userInfo,
            [fieldName]: event.target.value,
        });
    }

    const isFormInvalid = userInfo.usuario.length === 0 || userInfo.nome.length === 0;

    return (
        <form onSubmit={(event) => {
            event.preventDefault();

            setIsFormSubmited(true);

            console.log("Formulário pronto para cadastrar!");
            const userDTO = {
                username: userInfo.usuario,
                name: userInfo.nome,
            }
            fetch('https://instalura-api.vercel.app/api/users', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(userDTO),
            })
            .then((response) => {
                if(response.ok){
                    return response.json();
                }

                throw new Error('Não foi possivel cadastrar o usuário agora :(')
            })
            .then((respostaPronta) => {
                setSubmissionStatus(formStates.DONE);
                console.log(respostaPronta);
            })
            .catch((error) => {
                setSubmissionStatus(formStates.ERROR);
                console.error(error);
            }) 
            }}
        >
            <Text
                variant="title"
                tag="h1"
                color="tertiary.main"
            >
                Pronto para saber da vida dos outros?
            </Text>
            <Text
                variant="paragraph1"
                tag="p"
                color="tertiary.light"
                marginBottom="32px"
            >
                Você está a um passo de saber tudoo que está
                rolando no bairro, complete seu cadastro agora!
            </Text>
            <div>
                <TextField placeholder="Nome" name="nome" value={userInfo.nome}
                    onChange={handleChange}
                />
            </div>
            <div>
                <TextField placeholder="Usuário" name="usuario" value={userInfo.usuario}
                    onChange={handleChange}
                />
            </div>

            <Button variant="primary.main" type="submit" disabled={isFormInvalid}
                fullWidth
            >
                
                Cadastrar
            </Button>
            {isFormSubmited && submissionStatus === formStates.DONE && (
            <Box
                display="flex"
                justifyContent="center"
            >
                <Lottie
                    width="150px"
                    height="150px"
                    config={{ animationData: successAnimation, loop: true, autoplay: true }}
                />
                {/* https://lottiefiles.com/43920-success-alert-icon */}
            </Box>)}
            {isFormSubmited && submissionStatus === formStates.ERROR && (
                <Box
                    display="flex"
                    justifyContent="center"
                >
                <Lottie
                    width="150px"
                    height="150px"
                    config={{ animationData: errorAnimation, loop: true, autoplay: true }}
                />
                {/* https://lottiefiles.com/43920-success-alert-icon */}
                </Box>
            )}
        </form>
    )
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal }) {
    return (
      <Grid.Row
        marginLeft={0}
        marginRight={0}
        flex={1}
        justifyContent="flex-end"
      >
        <Grid.Col
          display="flex"
          paddingRight={{ md: '0' }}
          flex={1}
          value={{ xs: 12, md: 5, lg: 4 }}
        >
          <Box
            boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            flex={1}
            padding={{
              xs: '16px',
              md: '85px',
            }}
            backgroundColor="white"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...propsDoModal}
          >
            <FormContent />
          </Box>
        </Grid.Col>
      </Grid.Row>
    );
  }