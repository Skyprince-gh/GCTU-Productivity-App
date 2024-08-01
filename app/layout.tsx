import "./globals.css";

export const metadata = {
  title: "GCTU Productivity App",
  description: "GCTU Productivity app for scheduling tasks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
