
import Title from "./components/Title";
import "./globals.css";

export const metadata = {
  title: "AnimeCom",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
      <link rel="shortcut icon" href="./logo.png" type="image/x-icon" />  
        
      </head>
      <body>
      <><Title />{children}</>
      </body>
      </html>
  );
}
