import { MY_FIRST_ACTION } from '@redux/actions';
  
export const myFirstAction = (param) => ({
    type: MY_FIRST_ACTION,
    payload: param
})
  