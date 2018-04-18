import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import  ExpenseDashboardPage  from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

 const AppRouter = () => (
   <BrowserRouter>
      <div>
         <Header />
         <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditPage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
         </Switch>
      </div>
   </BrowserRouter>
);

export default AppRouter;