import { useTranslation } from "react-i18next";

const OrderNumber = (props) => {
  const { t } = useTranslation();

    return(
        <div className="border-section order-number">
            <span>{t("core.order_number")} :</span>
            <p>{props.order_number}</p>
        </div>
    )
}

export default OrderNumber;