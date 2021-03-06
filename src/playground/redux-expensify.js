import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD Expense
const addExpense = (
   {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
   } = {}
) => ({
   type: 'ADD_EXPENSE',
   expense: {
      id: uuid(),
      description,
      note, 
      amount,
      createdAt
   }
});

//remove expense
const removeExpense = (
   {id}
) => ({
   type: 'REMOVE_EXPENSE',
   id
});

//EDIT expense
const editExpense = (id, updates) => ( {
      type: 'EDIT_EXPENSE',
      id,
      updates
   });

//expense reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
   switch (action.type) {
      case 'ADD_EXPENSE':
         //return state.concat(action.expense);
         return [...state, action.expense];
      case 'REMOVE_EXPENSE':
         return state.filter(expense => expense.id !== action.id);
      case 'EDIT_EXPENSE':
         return state.map((expense) => {
            if(expense.id === action.id) {
               return {
                  ...expense,
                  ...action.updates
               }
            } else {
               return expense;
            }
         } )
      default:
         return state;
   }
}
// set text filter
const setTextFilter = (text = '') => ({
   type: 'SET_TEXT_FILTER',
   text
});

//sort by amount
const sortByAmount = () => ({
   type: 'SORT_BY_AMOUNT'
});

//sort by date
const sortByDate = () => ({
   type: 'SORT_BY_DATE'
});

//set start date
const setStartDate = (startDate = undefined) => ({
   type: 'SET_START_DATE',
   startDate
});

//set end date
const setEndDate = (endDate = undefined) => ({
   type: 'SET_END_DATE',
   endDate
})

//filter reducer
const filtersReducerDefaultState = {
   text: '',
   sortBy: 'date',
   startDate: undefined,
   endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
   switch (action.type) {
      case 'SET_TEXT_FILTER':
         return {
            ...state, 
            text: action.text};
      case 'SORT_BY_AMOUNT':
         return {
            ...state,
            sortBy: 'amount'
         }
      case 'SORT_BY_DATE':
         return {
            ...state,
            sortBy: 'date'
         }
      case 'SET_START_DATE':
         return {
            ...state, 
            startDate: action.startDate
         }  
      case 'SET_END_DATE':
         return {
            ...state, 
            endDate: action.endDate
         }  
      default:
         return state;
   }
}
//get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
   return expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
   }).sort((a,b) => {
         if(sortBy === 'date') {
               return a.createdAt - b.createdAt;
         }
         if(sortBy === 'amount') {
               return a.amount - b.amount ;
         }
   });
}
//store creation
const store = createStore(
   combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
   })
);
store.subscribe(() => {
   const state = store.getState();
   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
   console.log(visibleExpenses);
});

// const expenseOne = store.dispatch(addExpense({description: 'Rent',amount: 1000, createdAt: 1000}));
// const expenseTwo = store.dispatch(addExpense({description: 'Coffee',amount: 300, createdAt: -100}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

 //store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
 store.dispatch(sortByAmount());
 store.dispatch(sortByDate());
 //store.dispatch(setStartDate(1250));
// store.dispatch(setEndDate(1250));
// store.dispatch(setStartDate());
const demoStore = {
   expenses: [ {
      id: 'fjadkjflkadjf',
      description: 'January Rent',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 0
   }],
   filters: {
      text: 'rent',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined
   }
};

const user = {
   name: 'Lei',
   age: 35
};
//console.log({...user});