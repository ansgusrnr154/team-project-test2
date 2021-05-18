import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/navigation/Header';
import NavBar from './components/navigation/NavBar';
import LikeBox from './components/navigation/LikeBox';
import Home from './page/home/Home';
import CategoryPage from './page/category/CategoryPage';
import IndexPage from './page/home/IndexPage';
import DetailPage from './page/detail/DetailPage';
import DonationDetailPage from './page/donationdetail/DonationDetailPage';
import AuctionPage from './page/purchase/AuctionPage';
import SellAuctionPage from './page/purchase/SellAuctionPage';
import PurchasePage from './page/purchase/PurchasePage';
import DonationPage from './page/purchase/DonationPage';
import SearchPage from './page/search/SearchPage';
import EventPage from './page/event/EventPage';
import ChatPage from './page/chat/ChatPage';
import ChatListPage from './page/chat/ChatListPage';
import AddDestinationPage from './page/purchase/AddDestinationPage';
import Signup from './page/signup/Signup';
import Profile from './page/profile/Profile';
import UserProfile from './page/userProfile/UserProfile';
import ProductRegistration from './page/productRegistration/ProductRegistration';
import ItemBuy from './page/itemBuy/ItemBuy';
import { theme } from './styles/theme';
import { useSelector } from 'react-redux';
import { RootState } from './common/store';
import RecentlyBox from './components/navigation/RecentlyBox';

const App = () => {
  const isIndex = useSelector((state: RootState) => state.common.isIndex);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <Header />
        {!isIndex && (
          <>
            <NavBar />
            <LikeBox />
            <RecentlyBox />
          </>
        )}
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/home" component={Home} />
          <Route path="/category/:name" component={CategoryPage} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/userprofile/:id" component={UserProfile} />
          <Route path="/productregistraion" component={ProductRegistration} />
          <Route path="/itemBuy" component={ItemBuy} />
          <Route path="/search" component={SearchPage} />
          <Route path="/event" component={EventPage} />
          <Route path="/detail/:id" component={DetailPage} />
          <Route path="/donation_detail/:id" component={DonationDetailPage} />
          <Route path="/auction/buy/:itemNo" component={AuctionPage} />
          <Route path="/auction/sell/:itemNo" component={SellAuctionPage} />
          <Route path="/donation/:itemNo" component={DonationPage} />
          <Route path="/purchase/:itemNo" component={PurchasePage} />
          <Route path="/add_destination" component={AddDestinationPage} />
          <Route path="/chat/:id/:roomNo" component={ChatPage} />
          <Route path="/chatlist/:id" component={ChatListPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
