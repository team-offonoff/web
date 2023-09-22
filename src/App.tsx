import Button from './components/Button/Button';

const App = () => {
  const handleButtonClick = () => {
    console.log('hello');
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>hello</Button>
    </div>
  );
};

export default App;
