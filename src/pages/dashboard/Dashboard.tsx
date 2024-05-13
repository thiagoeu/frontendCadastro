import { FerramentasDaListagem } from "../../shared/components";
import { PageLayoutBase } from "../../shared/layouts";


export const Dashboard = () =>{
    return (
        <PageLayoutBase titulo="Página Inicial" barraDeFerramentas={(<FerramentasDaListagem mostrarInputBusca  textoBotaoNovo="nova"/>)}> 
            Testando 
        </PageLayoutBase>
    );
};