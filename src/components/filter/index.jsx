import { useDispatch } from "react-redux";
import { statusOptions, typeOptions, sortOptions } from "../../constants";
import { useRef } from "react";
import {
  claerFilter,
  filterBySearch,
  filterByStatus,
  filtredByType,
  sortJobs,
} from "../../redux/jobSlice";

export default function Filter() {
  const dispatch = useDispatch();

  const searchInpRef = useRef();
  const statusInpRef = useRef();
  const typeInpRef = useRef();
  const sortInpRef = useRef();

  // input her değiştiğinde çalışır
  const handleSearch = (e) => {
    dispatch(filterBySearch(e.target.value));
  };
  // durum selecti değişince çalışır
  const handleStatus = (e) => {
    dispatch(filterByStatus(e.target.value));
  };
  // type selecti değişince çalışır
  const handleType = (e) => {
    dispatch(filtredByType(e.target.value));
  };
  // sırlamayı duzenler
  const handleSort = (e) => {
    dispatch(sortJobs(e.target.value));
  };
  // inputlari temizleme
  const clearAll = () => {
    dispatch(claerFilter());
    searchInpRef.current.value = "";
    statusInpRef.current.value = "Seciniz";
    typeInpRef.current.value = "Seciniz";
    sortInpRef.current.value = "a-z";
  };

  return (
    <section className="filter-sec">
      <h2>Formu Filtreleme</h2>
      <form>
        <div className="field">
          <label>Arama</label>
          <input ref={searchInpRef} onChange={handleSearch} type="text" />
        </div>
        <div className="field">
          <label>Durum</label>
          <select ref={statusInpRef} onChange={handleStatus}>
            <option hidden>Seciniz</option>
            {statusOptions.map((opt, i) => (
              <option key={i}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Tip</label>
          <select ref={typeInpRef} onChange={handleType}>
            <option hidden>Seciniz</option>
            {typeOptions.map((type, i) => (
              <option key={i}>{type.label}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Durum</label>
          <select ref={sortInpRef} onChange={handleSort}>
            {sortOptions.map((sort, i) => (
              <option key={i}>{sort}</option>
            ))}
          </select>
        </div>
        <button type="button" onClick={clearAll}>
          Filtreleri Temizle
        </button>
      </form>
    </section>
  );
}
