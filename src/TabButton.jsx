export default function TabButton(props) {
  function content() {
    alert(`You clicked the ${props.children} tab button!`);
  }
  return (
    <li>
      <button onClick={content}>{props.children}</button>
    </li>
  );
}
