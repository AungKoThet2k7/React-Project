import AnalyticsPage from "../features/Analytics/pages/AnalyticsPage";
import AdvanceUIPage from "../features/advance-ui/pages/AdvanceUIPage";
import DashboardPage from "../features/dashboard/Pages/DashboardPage";
import DashboardLayout from "../features/dashboard/components/DashboardLayout";
import EcommercePage from "../features/ecommerce/pages/EcommercePage";
import ProductsPage from "../features/products/Pages/ProductsPage";
import SettingsPage from "../features/settings/pages/settingsPage";
import UserProfilePage from "../features/user-profile/pages/UserProfilePage";
import WidgetPage from "../features/widget/Pages/WidgetPage";

const dashboardRoute = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "ecommerce",
        element: <EcommercePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "advance-ui",
        element: <AdvanceUIPage />,
      },
      {
        path: "widgets",
        element: <WidgetPage />,
      },
      {
        path: "user-profile",
        element: <UserProfilePage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
];

export default dashboardRoute;
