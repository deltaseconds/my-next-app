import './globals.css'

export default function Layout({ children }) {
    return (
      <html lang="en">
        <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
          </style>
        </head>

        <body>
          <nav>
            <ul>
              <li><a href="/about">ABOUT</a></li>
              <li><a href="/account/register">REGISTER</a></li>
              <li><a href="/account/login">LOGIN</a></li>
              <li><a href="/account">ACCOUNT</a></li>
              <li><input id="search"></input></li>
            </ul>
          </nav>
          {children}
        </body>
      </html>
    );
  }