import React, { useState } from "react";
import { View } from "react-native";
import { Login } from "./loginScreen";
import { Registration } from "./registrationScreen";

const Auth = (props) => {
  const [showLogin, setShowLogin] = useState(false);

  const authSwitch = () => {
    setShowLogin(!showLogin);
  };

  const whichForm = () => {
    if (!showLogin) {
      return <Registration newJWT={props.newJWT} authSwitch={authSwitch} />;
    } else {
      return <Login newJWT={props.newJWT} authSwitch={authSwitch} />;
    }
  };

  return <View style={styles.container}>{whichForm()}</View>;
};

// export default class Auth extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showLogin: false,
//     };
//     this.whichForm = this.whichForm.bind(this);
//     this.authSwitch = this.authSwitch.bind(this);
//   }

//   authSwitch() {
//     this.setState({
//       showLogin: !this.state.showLogin,
//     });
//   }

//   whichForm() {
//     if (!this.state.showLogin) {
//       return (
//         <Registration newJWT={this.props.newJWT} authSwitch={this.authSwitch} />
//       );
//     } else {
//       return <Login newJWT={this.props.newJWT} authSwitch={this.authSwitch} />;
//     }
//   }

//   render() {
//     return <View style={styles.container}>{this.whichForm()}</View>;
//   }
// }

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Auth;
