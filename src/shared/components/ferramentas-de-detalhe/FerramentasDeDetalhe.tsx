
import { Box, Button, Paper, useTheme, Icon, Divider } from "@mui/material";

interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;
    mostrarBotaoSalvar?: boolean;

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

            {mostrarBotaoNovo && (<Button
                onClick={aoClicarEmNovo}
                variant="contained"
                color="primary"
                disableElevation
                startIcon={<Icon>save</Icon>}
            >{textoBotaoNovo}</Button>)}

            {mostrarBotaoSalvar && (<Button
                onClick={aoClicarEmSalvar}
                variant="contained"
                color="primary"
                disableElevation
                startIcon={<Icon>save</Icon>}
            >Salvar</Button>)}

            {mostrarBotaoSalvarEFechar && (<Button
                onClick={aoClicarEmSalvarEFechar}
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>save</Icon>}
            >Salvar e Voltar</Button>)}

            {mostrarBotaoApagar && (<Button
                onClick={aoClicarEmApagar}
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>delete</Icon>}
            >Apagar</Button>)}



            <Divider variant="middle" orientation="vertical"></Divider>

            {mostrarBotaoVoltar && (<Button
                onClick={aoClicarEmVoltar}
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>arrow_back</Icon>}
            >Voltar</Button>)}


        </Box>


    )
}