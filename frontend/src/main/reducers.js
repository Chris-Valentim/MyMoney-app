import { combineReducers } from 'redux'
import { reducer as fromReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import dashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  form: fromReducer,
  toastr: toastrReducer
})

export default rootReducer
