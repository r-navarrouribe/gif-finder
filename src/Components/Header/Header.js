import "./header.scss";

export default function Header() {
  return (
    <header className="row app-header text-center mt-3">
      <h1 className="col-12 app-title text-warning">Gif Finder</h1>

      <span className="text-center">Developed by Raúl Navarro</span>
      <span className="text-center">
        Check out the code on{" "}
        <a
          href="https://github.com/r-navarrouribe/gif-finder"
          target="_blank"
          rel="noreferrer"
          className="text-warning"
        >
          Github
        </a>
      </span>
    </header>
  );
}
