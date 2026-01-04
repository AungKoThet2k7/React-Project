import AnalyticsPage from "../features/Analytics/pages/AnalyticsPage";
import AdvanceUIPage from "../features/advance-ui/pages/AdvanceUIPage";
import DashboardPage from "../features/dashboard/Pages/DashboardPage";
import DashboardLayout from "../features/dashboard/components/DashboardLayout";
import EcommercePage from "../features/ecommerce/pages/EcommercePage";
import HolidaysPage from "../features/holidays/pages/HolidaysPage";
import ProductsPage from "../features/products/Pages/ProductsPage";
import SettingsPage from "../features/settings/pages/settingsPage";
import UserProfilePage from "../features/user-profile/pages/UserProfilePage";
import WidgetPage from "../features/widget/Pages/WidgetPage";
import blogRoute from "./blogRoute";

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
      ...blogRoute,
      {
        path: "holidays",
        element: <HolidaysPage />,
      },
    ],
  },
];

export default dashboardRoute;
