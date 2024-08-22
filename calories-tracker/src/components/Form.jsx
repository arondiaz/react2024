import { useState } from "react";
import categories from "../data/categories";

const Form = () => {
  const [form, setForm] = useState({
    category: 1,
    activity: "",
    calories: 0,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value === "" ? "" : isNaN(e.target.value)
        ? e.target.value
        : Number(e.target.value),
    });

    console.log(form);
  };

  return (
    <form action="" className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category">Categoría:</label>
        <select
          name=""
          id="category"
          className="border border-slate-300 p-2 rounded-sm bg-white w-full"
          value={form.category}
          onChange={handleChange}
        >
          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="activity">Actividad:</label>
        <input
          type="text"
          id="activity"
          className="border  border-slate-300 p-2 rounded-sm bg-white w-full"
          placeholder="Ingrese la comida o el ejercicio"
          value={form.activity}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories">Calorías:</label>
        <input
          type="number"
          id="calories"
          className="border  border-slate-300 p-2 rounded-sm bg-white w-full"
          placeholder="Ingrese el número de calorías"
          value={form.calories}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        value="Agregar"
        className="w-full bg-gray-600 cursor-pointer border rounded-lg text-white p-2 uppercase text-lg hover:bg-gray-500 ease-in-out"
      />
    </form>
  );
};

export default Form;
