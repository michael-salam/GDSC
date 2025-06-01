interface HeaderProps {
  profilePicture: string;
}

function Header({ profilePicture }: HeaderProps) {
  return (
    <header className="shadow-md bg-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <a href="/" className="font-bold">
          GDSC<span className="text-blue-600">POST</span>
        </a>
        <a href="/profile">
          <img
            src={profilePicture}
            alt="Profile Picture"
            className="size-10 rounded-full border-2 border-blue-600"
          />
        </a>
      </nav>
    </header>
  );
}

export default Header;
