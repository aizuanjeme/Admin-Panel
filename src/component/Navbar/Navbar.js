import React from "react";

const Navbar = () => {
  return (
    <div class="col-lg-4 col-md-5 col-12 align-self-center">
      <div className="card mr-4">
        <div className="card-body">
          <form>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Name of Event
              </label>
              <input
                className="input--style-5"
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Address
              </label>
              <input
                className="input--style-5"
                type="text"
                name="address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Start Date
              </label>
              <input
                type="date"
                id="p_startDate"
                className="form-control"
                name="startDate"
                placeholder="Poll startDate"
                onChange={(e) => setStartDate(e.target.value)}
                value={startDate}
                // ref={register({ required: true })}
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Start Time
              </label>
              <input
                type="time"
                id="p_startTime"
                name="startTime"
                className="form-control"
                placeholder="Poll start time"
                onChange={(e) => setStartTime(e.target.value)}
                value={startTime}
                // ref={register({ required: true })}
              />
            </div>

            <button
              className="btn btn--radius-2 btn--red"
              type="submit"
              onClick={addEvent}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
