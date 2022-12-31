import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import AddForm from './components/AddForm';
import BookContainer from './components/Book/BookContainer';

function App() {
  return (
    <>
    <Header />
      <Container>
        <AddForm />
        <BookContainer />
      </Container>
    </>
  );
}

export default App;
