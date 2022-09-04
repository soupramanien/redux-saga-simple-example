import "./styles.css";
import { getUser, selectUser } from "./store";
import { useEffect } from "react";
import { connect } from "react-redux";

function App({ getUser, user }) {
  const showUser = (user) => {
    return (
      <ul>
        <li>id : {user.id}</li>
        <li>name : {user.name}</li>
        <li>email : {user.email}</li>
      </ul>
    );
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="App">{user === undefined ? "Loading" : showUser(user)}</div>
  );
}
const mapStateToProps = (state) => ({
  user: selectUser(state)
});
const mapDispatchToProps = {
  getUser
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
