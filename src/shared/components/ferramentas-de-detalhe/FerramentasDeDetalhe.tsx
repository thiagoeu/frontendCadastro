
import { Box, Button, Paper, useTheme, Icon, Divider, Skeleton } from "@mui/material";

interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;
    mostrarBotaoSalvar?: boolean;

    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;
    mostrarBotaoApagarCarregando?: boolean;
    mostrarBotaoSalvarEFecharCarregando?: boolean;
    mostrarBotaoSalvarCarregando?: boolean;

    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmSalvarEFechar?: () => void;
    aoClicarEmSalvar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
    textoBotaoNovo = "Novo",
    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvarEFechar = false,
    mostrarBotaoSalvar = true,

    mostrarBotaoNovoCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarEFecharCarregando = false,
    mostrarBotaoSalvarCarregando = false,

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvarEFechar,
    aoClicarEmSalvar,
}) => {
    const theme = useTheme();

    return (
        <Box
            height={theme.spacing(5)}
            marginX={1}
            padding={1}
            paddingX={2}
            display='flex'
            gap={1}
            alignItems='center'
            component={Paper}>


           {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (<Button
                onClick={aoClicarEmSalvar}
                variant="contained"
                color="primary"
                disableElevation
                startIcon={<Icon>save</Icon>}
            >Salvar</Button>)}

            {(mostrarBotaoSalvarCarregando && !mostrarBotaoNovoCarregando) && (<Skeleton width={108} height={60}/> )}

            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando) && (<Button
                onClick={aoClicarEmNovo}
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>save</Icon>}
            >{textoBotaoNovo}</Button>)}

            {mostrarBotaoNovoCarregando && (<Skeleton width={108} height={60}/> )}
                
            {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando) && (<Button
                onClick={aoClicarEmSalvarEFechar}
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>save</Icon>}
            >Salvar e Voltar</Button>)}
            
            {mostrarBotaoSalvarEFecharCarregando && (<Skeleton width={180} height={60}/> )}

            {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (<Button
                onClick={aoClicarEmApagar}
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>delete</Icon>}
            >Apagar</Button>)}


            {mostrarBotaoApagarCarregando && (<Skeleton width={180} height={60}/> )}


            <Divider variant="middle" orientation="vertical"></Divider>

            {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (<Button
                onClick={aoClicarEmVoltar}
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>arrow_back</Icon>}
            >Voltar</Button>)}
            {mostrarBotaoVoltarCarregando && (<Skeleton width={180} height={60}/> )}


        </Box>


    )
}