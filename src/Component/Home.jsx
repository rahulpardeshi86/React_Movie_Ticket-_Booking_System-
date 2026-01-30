import { useState } from "react";
import movies from "../api/movies.json";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Home.css";
import "./BookingModal.css"
export const Home = () => {
  const [show, setShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  
  const showTimes = ["10:00", "13:30", "17:00", "21:00"];

  const [name, setName] = useState("");
  const [seats, setSeats] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");


  const [nameError, setNameError] = useState("");
  const [seatError, setSeatError] = useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleClose = () => {
    setShow(false);
    setSelectedMovie(null);
    setName("");
    setSeats("");
    setDate("");
    setTime("");
    setNameError("");
    setSeatError("");
    setDateError("");
    setTimeError("");
  };

  const handleShow = (movie) => {
    setSelectedMovie(movie);
    setShow(true);
  };


  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);

    if (value.trim().length < 2) {
      setNameError("Name must be at least 2 letters");
    } else {
      setNameError("");
    }
  };


  const handleSeatChange = (e) => {
    const value = e.target.value;
    setSeats(value);

    if (value < 1) {
      setSeatError("Minimum 1 seat required");
    } else {
      setSeatError("");
    }
  };


  const handleConfirm = () => {
    let valid = true;
    if (!name || name.trim().length < 2) {
      setNameError("Name must be at least 2 letters");
      valid = false;
    }
    if (!seats || seats < 1) {
      setSeatError("Minimum 1 seat required");
      valid = false;
    }
    if (!date) {
      setDateError("Please select a date");
      valid = false;
    } else {
      setDateError("");
    }
    if (!time) {
      setTimeError("Please select a time");
      valid = false;
    } else {
      setTimeError("");
    }
    if (!valid) return;
    alert(
      ` Movie: ${selectedMovie.title}
  Name: ${name}
  Seats: ${seats}
  Date: ${date}
  Time: ${time}
  Total: ₹${seats * selectedMovie.price}`
    );

    handleClose();
  };

  return (

    <div className="container mt-4">
      <div className="movie-type">
        <h2>Recommended Movies</h2>
      </div>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <div className="card h-100 shadow">
              <img
                src={movie.image}
                className="card-img-top"
                alt={movie.title}
                style={{ height: "350px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5>{movie.title}</h5>
                <p> ⭐ Rating:  {movie.rating}/10</p>
                <h4>  Price: ₹ {movie.price}</h4>

                <div className="card-footer  border-0">
                  <Button className="w-100" onClick={() => handleShow(movie)}>
                    Book Ticket
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal show={show} onHide={handleClose} centered className="red-modal">
        <Modal.Header closeButton>
          <Modal.Title className="booktikit">Book Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMovie && (
            <>
              <h5 className="movietitle">Movie:- {selectedMovie.title}</h5>
              <p> Price per seat: ₹ {selectedMovie.price}</p>


              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className={`form-control ${nameError ? "is-invalid" : ""}`}
                  value={name}
                  onChange={handleNameChange}
                />
                {nameError && (
                  <div className="invalid-feedback">{nameError}</div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Seats</label>
                <input
                  type="number"
                  min="1"
                  className={`form-control ${seatError ? "is-invalid" : ""}`}
                  value={seats}
                  onChange={handleSeatChange}
                />
                {seatError && (
                  <div className="invalid-feedback">{seatError}</div>
                )}
              </div>


              <div className="mb-3">
                <label className="form-label">Select Date</label>
                <input
                  type="date"
                  min={today}
                  className={`form-control ${dateError ? "is-invalid" : ""}`}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                {dateError && (
                  <div className="invalid-feedback">{dateError}</div>
                )}
              </div>


              <div className="mb-3">
                <label className="form-label">Select Time</label>
                <select
                  className={`form-control ${timeError ? "is-invalid" : ""}`}
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option value="">-- Select Time --</option>
                  {showTimes.map((t, index) => (
                    <option key={index} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {timeError && (
                  <div className="invalid-feedback">{timeError}</div>
                )}
              </div>


              {seats >= 1 && (
                <p>
                  <strong>Total:</strong> ₹{seats * selectedMovie.price}
                </p>
              )}
            </>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleConfirm}>
            Confirm Booking
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
