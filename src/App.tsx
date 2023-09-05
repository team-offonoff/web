import Button from './components/Button/Button';

function App() {
  const handleButtonClick = () => {
    console.log('hello');
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>hello</Button>
    </div>
  );
}

export default App;
