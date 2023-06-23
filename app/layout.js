export const metadata = {
  title: "Magnum Opus",
  description: "A site by Magnum Opus for booking flights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
