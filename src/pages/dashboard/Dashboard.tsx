import { FerramentasDeDetalhe } from "../../shared/components";
import { PageLayoutBase } from "../../shared/layouts";

export const Dashboard = () => {
  return (
    <PageLayoutBase
      titulo="Página Inicial"
      barraDeFerramentas={
        <FerramentasDeDetalhe
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo
          mostrarBotaoVoltar={false}
          mostrarBotaoSalvarEFecharCarregando
        />
      }
    >
      Testando
    </PageLayoutBase>
  );
};
