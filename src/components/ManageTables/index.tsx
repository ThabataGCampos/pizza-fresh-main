import { HTMLAttributes } from "react";
import { ReactComponent as Add } from "assets/icons/add.svg";
import * as S from "./style";
import EditTable from "components/EditTable";

type ManageTablesType = HTMLAttributes<HTMLDivElement>;

type ManageTablesProps = {} & ManageTablesType;

const ManageTables = ({ ...props }: ManageTablesProps) => {
  return (
    <S.ManageTables {...props}>
      <S.ManageTablesTitle>Gerenciar Mesas</S.ManageTablesTitle>
      <S.ManageTablesSub>
        <b>Mesas</b>
      </S.ManageTablesSub>
      <S.ManageTablesContent>
        <S.ManageTablesContentAdd>
          <Add />
          <span>Adicionar mesa</span>
        </S.ManageTablesContentAdd>
        <S.ManageTablesContentAdd>
          <label htmlFor="tableId">Número da Mesa</label>
          <S.EditForm id="tableId" type="number" placeholder="01" />
        </S.ManageTablesContentAdd>
        <EditTable />
      </S.ManageTablesContent>
      <S.ManageTablesActions>
        <S.ManageTablesActionsCancel>Cancelar</S.ManageTablesActionsCancel>
        <S.ManageTablesActionsSave>Salvar Mudanças</S.ManageTablesActionsSave>
      </S.ManageTablesActions>
    </S.ManageTables>
  );
};

export default ManageTables;
