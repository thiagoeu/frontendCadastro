import { BarraDeFerramentas } from "../../shared/components";
import { PageLayoutBase } from "../../shared/layouts";


export const Dashboard = () =>{
    return (
        <PageLayoutBase titulo="Página Inicial" barraDeFerramentas={(<BarraDeFerramentas mostrarInputBusca  textoBotaoNovo="nova"/>)}> 
            Testando 
        </PageLayoutBase>
    );
};