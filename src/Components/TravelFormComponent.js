import React from 'react'

function TravelFormComponent() {
    return (
        <form>
            <div>
                <input type="text" name="" placeholder="FirstName" value="" /><br />
                <input type="text" name="" placeholder="LastName" value="" /><br />
                <input type="text" name="" placeholder="Age" value="" /><br />
            </div>
            <div>
                <label>
                    <input  type="Radio" name="" placeholder="" />Male
                </label><br />
                <label>
                    <input  type="Radio" name="" placeholder="" />Male
                </label>
            </div>

            <div>
                <select>
                    <option value="">Please select a destination</option>
                    <option value="Nairobi">Nairobi</option>
                    <option value="Kisumu">Kisumu</option>
                    <option value="Diani">Diani</option>
                    <option value="Watamu">Watamu</option>
                    <option value="Mombasa">Mombasa</option>
                </select>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default TravelFormComponent;
