// conditional rendering = allows you control what gets rendered 
//                         in your application based on certain conditions
//                         (show, hide, or change components)

import UserGreeting from "./UserGreeting.jsx";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="BroCode"/>
    </>
  );
}

export default App;
