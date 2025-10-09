export const metadata = {
  title: "Admin Dashboard | SinghTransports",
  description: "Admin dashboard for SinghTransports",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}