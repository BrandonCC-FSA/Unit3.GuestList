import { useState, useEffect } from "react";

export default function App() {
  const [guestList, setGuestList] = useState([]);
  const [guestDetails, setGuestDetails] = useState(null);
  useEffect(() => {
    const getGuestList = async () => {
      const response = await fetch(
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-et-web-ft/guests"
      );
      const respJsonObj = await response.json();
      const allGuests = respJsonObj.data;
      setGuestList(allGuests);
    };
    getGuestList();
  }, []);

  return (
    <>
      {guestDetails ? (
        <>
          <h2>Guest Details</h2>
          <ul className="guest-details">
            <li>Name: {guestDetails.name}</li>
            <li>Email: {guestDetails.email}</li>
            <li>Phone #: {guestDetails.phone}</li>
            <li>Bio: {guestDetails.bio}</li>
            <li>Job: {guestDetails.job}</li>
            <button onClick={() => setGuestDetails(null)}>Back</button>
          </ul>
        </>
      ) : (
        <>
          <h1>Guest List</h1>
          <section>
            <h2>Name</h2>
            <h2>Email</h2>
            <h2>Phone</h2>
          </section>
          <ul className="guest-list">
            {guestList.map((individualGuest) => (
              <li
                key={individualGuest.id}
                onClick={() => setGuestDetails(individualGuest)}
              >
                <div>{individualGuest.name}</div>
                <div>{individualGuest.email}</div>
                <div>{individualGuest.phone}</div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
