
import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material"
import React from "react"


interface IBarraDeFerramentasProps {
    textoDaBusca? : string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;

    textoBotaoNovo? : string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;
}


export const BarraDeFerramentas: React.FC<IBarraDeFerramentasProps> = ({ 
    textoDaBusca ='', 
    mostrarInputBusca = false, 
    aoMudarTextoDeBusca ,

    aoClicarEmNovo,
    textoBotaoNovo='novo',
    mostrarBotaoNovo = true,

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

            { mostrarInputBusca && (<TextField 
                size="small"
                placeholder="Pesquisar"
                value={textoDaBusca}
                onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}

            />)}    
            

            {mostrarBotaoNovo && (
                <Box flex={1} display='flex' justifyContent='end'> 
                <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={aoClicarEmNovo}
                    endIcon={<Icon>add</Icon>}
                >{textoBotaoNovo}</Button>
            </Box>
            )}    
            
        </Box>
    )
}