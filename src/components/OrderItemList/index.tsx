import React, { HTMLAttributes } from "react";
import * as S from "./style";

type DivType = HTMLAttributes<HTMLDivElement>;

export type OrderItemListProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  list: React.ReactNode;
} & DivType;

const OrderItemList = ({
  header,
  list,
  footer,
  ...props
}: OrderItemListProps) => {
  return (
    <div {...props}>
      {header && <S.OrderItemListTitle> {header} </S.OrderItemListTitle>}

      <S.OrderItemList role="listbox">{list}</S.OrderItemList>

      {footer && <footer> {footer} </footer>}
    </div>
  );
};

export default OrderItemList;
