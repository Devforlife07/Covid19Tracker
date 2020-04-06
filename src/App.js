import React, {
  Component,
  Fragment
} from "react";
import {
  Cards,
  Charts,
  Countrypicker
} from "./components/index";
import {
  fetchData
} from "./api";
import Spinner from "./components/spinner/spinner";
import Image from "./images/image.png";
import Footer from "./components/footer/footer"

import styles from "./App.module.css";

class App extends Component {
  state = {
    loading: false,
    data: {},
    country: "",
  };
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country: country,
    });
  };
  async componentDidMount() {
    this.setState({
      loading: true,
    });
    const fetchedData = await fetchData();
    this.setState({
      loading: false,
      data: fetchedData,
    });
  }
  render() {
    const {
      data,
      country
    } = this.state;
    console.log(data);
    return ( < Fragment > {
        this.state.loading ? ( < center > < Spinner / >
          <
          /center > ) : ( < div className = {
          styles.container
        } >
        <
        img className = {
          styles.image
        }
        alt = "No Image Found"
        src = {
          Image
        }
        />  <
        Cards data = {
          data
        }
        /> <
        Countrypicker handleCountryChange = {
          this.handleCountryChange
        }
        /> <
        Charts data = {
          data
        }
        country = {
          country
        }
        />  <
        Footer / >
        <
        /div >

      )
    } < /Fragment>
  );
}
}

export default App;