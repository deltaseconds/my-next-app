export default function Layout({ children }) {
    return (
      <html lang="en">
        <body>
          <nav>Navigation Bar</nav>
          {children}
        </body>
      </html>
    );
  }