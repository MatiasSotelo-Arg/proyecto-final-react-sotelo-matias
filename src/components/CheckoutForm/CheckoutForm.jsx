import { useState } from "react";


export default function CheckoutForm({ onConfirm }) {
  const [userData, setUserData] = useState({
    nombre: "",
    phone: "",
    email: "",
  });

  function onInputChange(evt) {
    const prop = evt.target.name;
    const value = evt.target.value;

    const newData = { ...userData };
    newData[prop] = value;
    setUserData(newData);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    console.log(userData);
    onConfirm(userData);
  }

  function handleReset(evt) {
    evt.preventDefault();
    setUserData({
      nombre: "",
      phone: "",
      email: "",
    });
  }

  return (
    <form className="checkout-container" onSubmit={onSubmit}>
      <h1>Ingresa tus datos para completar la compra 🛍</h1>
      <div >
        <label>Nombre</label>
        <input
          value={userData.nombre}
          name="nombre"
          type="text"
          onChange={onInputChange}
        />
      </div>
      <div>
        <label>Teléfono</label>
        <input
          value={userData.phone}
          name="phone"
          type="text"
          onChange={onInputChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          value={userData.email}
          name="email"
          type="text"
          onChange={onInputChange}
        />
      </div>
      <button>Crear orden</button>
      <button onClick={handleReset}>Vaciar</button>
    </form>
  );
}