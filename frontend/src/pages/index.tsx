import Head from "next/head";
import { Layout } from "components";
import { Dashboard } from "components/dashboard";
import { useDashboardService } from "app/services";
import { DashboardData } from "app/models/dashboard";

interface HomeProps {
  dashboard: DashboardData;
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <div>
      <Head>
        <title>Sales Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout title="Dashboard">
        <Dashboard
          sales={props.dashboard.sales}
          products={props.dashboard.products}
          customers={props.dashboard.customers}
          salesByMonth={props.dashboard.salesByMonth}
        />
      </Layout>
    </div>
  );
};

export async function getStaticProps() {
  const service = useDashboardService();
  let dashboard: DashboardData = {
    sales: 0,
    products: 0,
    customers: 0,
  };

  try {
    dashboard = await service.get();
  } catch (error) {
    console.error(
      "Oops! Something went wrong while loading the dashboard data: ",
      error
    );
  }

  return {
    props: {
      dashboard,
    },
    revalidate: 30,
  };
}

export default Home;
