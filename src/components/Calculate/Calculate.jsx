import { useState } from 'react';
import s from './Calculate.module.css';

const Calculate = () => {
  const [form, setForm] = useState({ a: "", b: "", c: "" });
  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const a = parseFloat(form.a);
    const b = parseFloat(form.b);
    const c = parseFloat(form.c);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      alert("Будь ласка, введіть числові значення!");
      return;
    }

    const heatPumpCost = (a * 0.035 * 4392 * b) / 2.8;
    const gasBoilerCost = (a * 0.035 * 4392 * c) / 8.2;

    setResults({
      heatPump: heatPumpCost.toFixed(2),
      gasBoiler: gasBoilerCost.toFixed(2),
    });
  };

  return (
    <div className={s.wrapper}>
      <div className={s.calculate}>
        <h2>Калькулятор</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Площа (м²):
            <input
              type="number"
              name="a"
              value={form.a}
              onChange={handleChange}
              required
              step="any"
            />
          </label>

          <label>
            Тариф електроенергії (грн/кВт·год):
            <input
              type="number"
              name="b"
              value={form.b}
              onChange={handleChange}
              required
              step="any"
            />
          </label>

          <label>
            Тариф газу (грн/м³):
            <input
              type="number"
              name="c"
              value={form.c}
              onChange={handleChange}
              required
              step="any"
            />
          </label>

          <button type="submit">Розрахувати</button>
        </form>

        {results && (
            <div className={s.results}>
                <p>
                    <strong>Вартість використання теплового насосу:</strong>{" "}
                    <span>{results.heatPump} грн</span>
                </p>
                <p>
                    <strong>Вартість використання газового котла:</strong>{" "}
                    <span>{results.gasBoiler} грн</span>
                </p>
            </div>
        )}
      </div>

      <aside className={s.info}>
        <h3>Підказки</h3>
        <ul>
          <li>Тариф газу: <strong>7,99 грн</strong></li>
          <li>Тариф електроенергії: <strong>4,32 грн (вдень)</strong>; <strong>2,16 грн (вночі)</strong></li>
          <li>Розрахунки здійснюються за <strong>183 дні</strong> — опалювальний період</li>
          <li><strong>35 кВт/м²</strong> — норма втрати тепла</li>
        </ul>
      </aside>
    </div>
  );
};

export default Calculate;