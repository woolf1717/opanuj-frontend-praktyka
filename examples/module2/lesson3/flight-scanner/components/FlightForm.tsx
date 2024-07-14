import { FlightFormFields, flightFormSchema } from '../Flight';

import { useForm } from '../hooks/useForm';

const FlightForm = () => {
  const { formData, handleChange, handleValidation, errors } =
    useForm<FlightFormFields>(flightFormSchema, {
      origin: 'Kraków',
      destination: 'Miami',
      startDate: '',
      tripType: 'oneWay',
      returnDate: '',
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    handleValidation().then(
      ({ origin, destination, startDate, tripType, returnDate }) => {
        return console.log(
          origin,
          destination,
          startDate,
          tripType,
          returnDate
        );
      }
    );
  };

  return (
    <form id="flight-form" onSubmit={handleSubmit} className="space-y-4 mt-4">
      <label htmlFor="origin" className="flex flex-col">
        Origin
        <input
          id="origin"
          name="origin"
          type="text"
          value={formData.origin}
          onChange={handleChange}
          placeholder="Cracow, Poland"
          className="border border-gray-200 rounded-md p-2"
        />
      </label>
      <label htmlFor="destination" className="flex flex-col">
        Destination
        <input
          id="destination"
          name="destination"
          type="text"
          value={formData.destination}
          onChange={handleChange}
          placeholder="Boston, USA"
          className="border border-gray-200 rounded-md p-2"
        />
      </label>
      <div className="flex flex-col">
        <label htmlFor="one-way">
          <input
            type="radio"
            id="one-way"
            name="tripType"
            checked={formData.tripType === 'oneWay'}
            value="oneWay"
            onChange={handleChange}
          />
          &nbsp;One way
        </label>
        <label htmlFor="round-trip">
          <input
            type="radio"
            id="round-trip"
            name="tripType"
            checked={formData.tripType === 'roundTrip'}
            value="roundTrip"
            onChange={handleChange}
          />
          &nbsp;Round trip
        </label>
      </div>
      <div className="grid grid-cols-2 space-x-2">
        <label htmlFor="startDate" className="flex flex-col">
          Start at
          <input
            id="startDate"
            name="startDate"
            type="date"
            onChange={handleChange}
            className="border border-gray-200 rounded-md p-2"
          />
        </label>
        <label htmlFor="returnDate" className="flex flex-col">
          Return at
          <input
            id="returnDate"
            name="returnDate"
            type="date"
            onChange={handleChange}
            className="border border-gray-2000 rounded-md p-2"
          />
        </label>
      </div>
      <button className="bg-blue-500 text-white rounded-md p-2 w-full">
        Search
      </button>
      {errors.map((error, index) => (
        <li key={index} className="text-red-500">
          {error}
        </li>
      ))}
    </form>
  );
};

export default FlightForm;
