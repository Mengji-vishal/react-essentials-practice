import img from "./assets/react-core-concepts.png";
const react = ["shaan", "john", "doe"];
function random(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  const name = react[random(react.length - 1)];
  return (
    <header>
      <img src={img} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {name} Fundamental React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}
function App() {
  return (
    <>
      <Header />
      <div>
        <main>
          <h2>Time to get started!</h2>
        </main>
      </div>
    </>
  );
}

export default App;
