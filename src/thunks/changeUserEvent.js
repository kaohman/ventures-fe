import { setLoading, setError } from '../actions';
import { getUserEvents } from './getUserEvents';
import { fetchData } from '../utils/api';

export const changeUserEvent = (eventId, method, status = '') => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const path = status.length ? `?status=${status}` : status;
      await fetchData(`/users/1/events/${eventId}` + path, method);
      await getUserEvents('1');
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false))
  }
}