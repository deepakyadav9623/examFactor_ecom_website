import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home/';
import './App.scss';
import Header from './components/Header';
import Hello from './pages/login/Hello';
import WhyExamFactor from './pages/whyExamFactor/whyExamFactor';
import CatalogEach from './pages/exploreCatalouge/CatalogEach';
import CatalogQuickLinks from './pages/exploreCatalouge/CatalogQuickLinks';
import CartPage from './pages/Cart';
import ExploreCatalog from './pages/exploreCatalouge/ExploreCatalog';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SubjectDetails from './pages/exploreCatalouge/SubjectDetails';
import AssessmentList from './pages/exploreCatalouge/AssesmentList';
import ViewDetails from './pages/exploreCatalouge/ViewDetails';
import AllCategories from './pages/exploreCatalouge/AllCategories';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
          <Routes>
          <Route exact path="/" element={<HomePage />} />
            <Route exact path="/ecom" element={<HomePage />} />
            <Route exact path="/hello" element={<Hello />} />
            <Route exact path="/examFactor" element={<WhyExamFactor />} />
            <Route exact path="/contact-us" element={<Hello />} />
            <Route exact path="/about-us" element={<Hello />} />
            <Route exact path="/why-examfactor" element={<Hello />} />
            <Route exact path="/cart" element={<CartPage/>} />
            <Route exact path="/catalog/:id/:userId" element={<CatalogEach/>} />
            <Route exact path="/quicklinks/:id" element={<CatalogQuickLinks/>} />
            <Route exact path="/catalogue/:id" element={<ExploreCatalog/>} />
            <Route exact path="/catalogue/:id/:category" element={<SubjectDetails/>} />
            <Route exact path="/catalogue/:id/:category/:subject" element={<AssessmentList/>} />
            <Route exact path="/catalogue/:id/:category/:subject/:assessment" element={<ViewDetails/>} />
            <Route exact path="/explore-catalogue" element={<AllCategories/>} />

          </Routes>
        </BrowserRouter>
      </Provider>  
    </>
  );
}

export default App;
