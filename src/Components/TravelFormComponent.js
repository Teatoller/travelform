import React from "react";

function TravelFormComponent(props) {
  return (
    <div>
      <form>
        <input
          name="firstName"
          value={props.data.firstName}
          onChange={props.handleChange}
          placeholder="First Name"
        />
        <br />

        <input
          name="lastName"
          value={props.data.lastName}
          onChange={props.handleChange}
          placeholder="Last Name"
        />
        <br />

        <input
          name="age"
          value={props.data.age}
          onChange={props.handleChange}
          placeholder="Age"
        />
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />{" "}
          Male
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />{" "}
          Female
        </label>

        <br />

        <select
          value={props.data.destination}
          name="destination"
          onChange={props.handleChange}
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="Nairobi">Nairobi</option>
          <option value="Watamu">Watamu</option>
          <option value="Kisumu">Kisumu</option>
          <option value="Diani">Diani</option>
        </select>

        <br />

        <label>
          <input
            type="checkbox"
            name="isVeg"
            onChange={props.handleChange}
            checked={props.data.isVeg}
          />{" "}
          Vegetarian?
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="isChicken"
            onChange={props.handleChange}
            checked={props.data.isChicken}
          />{" "}
          Chicken?
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            onChange={props.handleChange}
            checked={props.data.isLactoseFree}
          />{" "}
          Lactose Free?
        </label>
        <br />

        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>
        Your name: {props.data.firstName} {props.data.lastName}
      </p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender: {props.data.gender}</p>
      <p>Your destination: {props.data.destination}</p>
      <p>Your dietary restrictions:</p>

      <p>Vegetarian: {props.data.isVeg ? "Yes" : "No"}</p>
      <p>Chicken: {props.data.isChicken ? "Yes" : "No"}</p>
      <p>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p>
    </div>
  );
}

export default TravelFormComponent;
