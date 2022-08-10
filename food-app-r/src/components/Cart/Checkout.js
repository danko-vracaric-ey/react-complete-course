import InputOrdem from "../UI/InputOrdem";
import classes from "./Checkout.module.css";
import useInput from "../hooks/use-input";
import useFetch from "../hooks/use-fetch";

const Checkout = (props) => {
  const { erorr, isLoading, sendRequest: fetchData } = useFetch();

  const nameInputLogic = useInput((val) => {
    return val.length !== 0;
  });

  const nameRef = nameInputLogic.ref;

  const onSubmit = (event) => {
    event.preventDefault();
    fetchData({
      url: "https://react-http-664f9-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      method: "POST",
      body: JSON.stringify({ name: nameRef.current.value }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    props.setIsCheckout(false);
    props.onClose(false);
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <InputOrdem
        type="text"
        input={{ label: "Name", id: "ime", inputlogic: nameInputLogic }}
        ref={nameRef}
      />
      {/* <input type="text" /> */}

      {/* <InputOrdem /> */}
      {/* <InputOrdem /> */}
      <button type="submit">Confirm</button>
    </form>
  );
};

export default Checkout;
