import { Chart } from "primereact/chart";
import { Card } from "primereact/card";
import { SalesByMonth } from "app/models/dashboard";
import { useState, useEffect } from "react";
import { Month } from "app/util/formatMonth";

interface DashboardProps {
  sales?: number;
  products?: number;
  customers?: number;
  salesByMonth?: SalesByMonth[];
}

export const Dashboard: React.FC<DashboardProps> = ({
  sales,
  products,
  customers,
  salesByMonth,
}) => {
  const [chartData, setChartData] = useState({});

  const loadChartData = () => {
    const labels: string[] =
      salesByMonth?.map((sm) =>
        sm.month !== undefined ? Month[sm.month - 1] : ""
      ) || [];
    const values = salesByMonth?.map((sm) => sm.total);

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Sales by Month",
          backgroundColor: "#42A5F5",
          data: values,
        },
      ],
    };

    setChartData(data);
  };

  useEffect(loadChartData, []);

  const cardStyle = (type) => {
    const backgroundColors = {
      products: "#48C774",
      customers: "#3498DB",
      sales: "#F1C40F",
      color: "#FFFFFF",
    };

    return {
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      margin: "10px",
      backgroundColor: backgroundColors[type],
    };
  };

  return (
    <div className="p-fluid">
      <div className="grid">
        <div className="col">
          <Card title="Sales" style={cardStyle("sales")}>
            <p className="p-m-0">{sales}</p>
          </Card>
        </div>

        <div className="col">
          <Card title="Products" style={cardStyle("products")}>
            <p className="p-m-0">{products}</p>
          </Card>
        </div>
        <div className="col">
          <Card title="Customers" style={cardStyle("customers")}>
            <p className="p-m-0">{customers}</p>
          </Card>
        </div>
      </div>
      <br />
      <div className="grid">
        <div className="col">
          <Chart
            type="bar"
            data={chartData}
            style={{ position: "relative", width: "100%" }}
          ></Chart>
        </div>
      </div>
    </div>
  );
};
