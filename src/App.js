import './App.css';

function App() {
  const handleUser = () => {
    window.FB.api('/me', function (res) {
      console.log("TOKEN =>>", window.FB.getAccessToken());
      console.log('Good to see you, ' + res.name + '.');
    });
  }

  const onClickFB = () => {
    window.FB.getLoginStatus(function (response) {
      console.log(response)
      if (response.status === "connected") {
        handleUser()
      } else {
        window.FB.login(function (response) {
          handleUser()
        });
      }
    });
  }

  return (
    <div className="App">
      <button onClick={onClickFB}>LOGIN LOGIN</button>
    </div>
  );
}

export default App;
