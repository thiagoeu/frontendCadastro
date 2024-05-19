
import { Box, Button, Paper, useTheme, Icon, Divider, Skeleton, Typography, useMediaQuery, Theme } from "@mui/material";

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
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
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
            >
                <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    Salvar
                </Typography>
            
            </Button>)}

            {(mostrarBotaoSalvarCarregando && !mostrarBotaoNovoCarregando) && (<Skeleton width={108} height={60}/> )}

            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && (<Button
                onClick={aoClicarEmNovo}
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>save</Icon>}
            >   
                <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                    {textoBotaoNovo}
                </Typography>
                </Button>)}

            {(mostrarBotaoNovoCarregando && smDown) && (<Skeleton width={108} height={60}/> )}
                
            {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (<Button
                onClick={aoClicarEmSalvarEFechar}
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>save</Icon>}
            >
                <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                    Salvar e fechar
                </Typography>
                
                </Button>)}
            
            {(mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (<Skeleton width={180} height={60}/> )}

            {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (<Button
                onClick={aoClicarEmApagar}
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>delete</Icon>}
            >
                <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                    Apagar
                </Typography>
                </Button>)}


            {mostrarBotaoApagarCarregando && (<Skeleton width={180} height={60}/> )}


            {
                (  
                mostrarBotaoVoltar && 
                    (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarEFechar)
                ) && (
                <Divider variant="middle" orientation="vertical"></Divider>
                 )

            }

            {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (<Button
                onClick={aoClicarEmVoltar}
                variant="outlined"
                color="primary"
                disableElevation
                startIcon={<Icon>arrow_back</Icon>}
            >
            
                <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                    Voltar
                </Typography>
            
            
            </Button>)}
            {mostrarBotaoVoltarCarregando && (<Skeleton width={180} height={60}/> )}


        </Box>


    )
}