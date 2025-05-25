import { Sale } from "app/models/sales";
import { Layout } from "components/layout";
import { useSaleService } from "app/services";
import { SalesForm } from "./form";
import { Alert } from "app/models/common/message";
import { useState } from "react";

export const Sales: React.FC = () => {
  const service = useSaleService();
  const [messages, setMessages] = useState<Alert[]>([]);
  const [saleCompleted, setSaleCompleted] = useState<boolean>(false);

  const handleSubmit = (sale: Sale) => {
    service
      .saveSale(sale)
      .then(() => {
        setMessages([
          {
            type: "success",
            text: "Sale registered successfully",
          },
        ]);
        setSaleCompleted(true);
      })
      .catch((error) => {
        setMessages([
          {
            type: "error",
            text: "Error registering sale: " + error.message,
          },
        ]);
      });
  };

  const handleNewSale = () => {
    setSaleCompleted(false);
    setMessages([]);
  };

  return (
    <Layout title="Sales" messages={messages}>
      <SalesForm
        onSubmit={handleSubmit}
        saleCompleted={saleCompleted}
        onNewSale={handleNewSale}
      />
    </Layout>
  );
};
