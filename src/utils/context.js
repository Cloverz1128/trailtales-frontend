import PropTypes from "prop-types";
import {
  createContext,
  useContext,
  useMemo,
  useState
} from "react";

const defaultStore = {
  closeHeaderHandler: null,
};

export const AppContext = createContext();

export const CxtProvider = ({
  children
}) => {
  const [store, setStore] = useState(defaultStore);

  const value = useMemo(() => ({
    store, setStore,
  }), [store])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
};

CxtProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useAppContext = () => {
  const cxt = useContext(AppContext);
  return [cxt.store, cxt.setStore];
}