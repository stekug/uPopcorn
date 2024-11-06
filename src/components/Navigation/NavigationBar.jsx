import Logo from './Logo';

export default function NavigationBar({ children }) {
  return (
    <nav className="navbar">
      <Logo />
      {children}
    </nav>
  );
}
