import { categories } from "../data/categories";

// aca se aniadira la categoria a la que pertenece un gastotambien la cantidad la fecha en la quese isoy el nombre del gasto
export default function ExpenseForm() {
  return (
    <form className="space-y-5">
      <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
        Nuevo Gasto
      </legend>
      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">
          Nombre Gasto:
        </label>
        <input
          type="text"
          name="expenseName"
          id="expenseName"
          placeholder="Anade el nombre del gasto"
          className="bg-slate-100 p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amounut" className="text-xl">
          Cantidad:
        </label>
        <input
          type="number"
          id="amount"
          placeholder="anade la cantidad de gasto ej. 300"
          className="bg-slate-100 p-2"
          name="amount"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">
          Categoria:
        </label>
        <select
          id="category"
          placeholder="anade la cantidad"
          className="bg-slate-100 p-2"
          name="category"
        >
          <option value="">--- Seleccione ---</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <input
        type="submit"
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={"Registrar Gasto"}
      />
    </form>
  );
}
