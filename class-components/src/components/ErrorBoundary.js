import { Component } from "react";
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  } //can be added to any class based component and make it error boundary, react automatically pass this error

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong</p>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;

//this method will be triggered whenever one of the child components generates throws an error
