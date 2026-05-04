export const metadata = {
  title: "Summit Training & Nutrition",
  description: "Perform at your best",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
