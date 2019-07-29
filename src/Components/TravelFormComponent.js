import React from "react";
import "../../src/App.css";

function TravelFormComponent(props) {
  return (
    <div id="outer-border">
      <form>
        <div className="bio-data">
          <input
            type="text"
            name="firstName"
            value={props.data.firstName}
            onChange={props.handleChange}
            placeholder="First Name"
          />
          <br />

          <input
            type="text"
            name="lastName"
            value={props.data.lastName}
            onChange={props.handleChange}
            placeholder="Last Name"
          />
          <br />

          <input
            type="text"
            name="age"
            value={props.data.age}
            onChange={props.handleChange}
            placeholder="Age"
          />
        </div>

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />{" "}
          <b>Male</b>
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
          <b>Female</b>
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
          <b>Vegetarian?</b>
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="isChicken"
            onChange={props.handleChange}
            checked={props.data.isChicken}
          />{" "}
          <b>Chicken?</b>
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            onChange={props.handleChange}
            checked={props.data.isLactoseFree}
          />{" "}
          <b>Lactose Free?</b>
        </label>
        <br />

        <button className="form-btn">Submit</button>
      </form>
      <hr />
      <div id="output-data">
        <h2>Entered information:</h2>
        <p>
          <b>Your name:</b> {props.data.firstName} {props.data.lastName}
        </p>
        <p>
          <b>Your age:</b> {props.data.age}
        </p>
        <p>
          <b>Your gender:</b> {props.data.gender}
        </p>
        <p>
          <b>Your destination:</b> {props.data.destination}
        </p>
        <p>
          <b>Your dietary restrictions:</b>
        </p>

        <p>
          <b>Vegetarian:</b> {props.data.isVeg ? "Yes" : "No"}
        </p>
        <p>
          <b>Chicken:</b> {props.data.isChicken ? "Yes" : "No"}
        </p>
        <p>
          <b>Lactose Free:</b> {props.data.isLactoseFree ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
}

export default TravelFormComponent;
