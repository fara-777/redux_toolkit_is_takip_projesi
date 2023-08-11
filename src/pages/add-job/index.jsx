import { v4 } from "uuid";
import { statusOptions } from "../../constants";
import { typeOptions } from "../../constants";
import { addJob } from "../../redux/jobSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddJobPages() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // formun son halini vererek bir form verisi olusturma
    const formData = new FormData(e.target);

    // form verilerinden bir obje olusturma
    const dataObj = Object.fromEntries(formData);

    // objeye id ekleme
    dataObj.id = v4();

    // ekelem tarihi olusturma
    dataObj.date = new Date().toLocaleDateString();

    axios.post("http://localhost:3030/jobs", dataObj).then(() => {
      // store' u  guncelleme
      dispatch(addJob(dataObj));
      // anasayfaya yonlendirme
      navigate("/");
      toast.success("Basariyla Eklendi", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });
    });
  };
  return (
    <>
      <div className="add-sec">
        <h2>Yeni Is Ekle</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Position</label>
            <input name="position" type="text" />
          </div>
          <div className="field">
            <label>Sirket </label>
            <input name="sirket" type="text" />
          </div>
          <div className="field">
            <label>Lokasyon</label>
            <input name="lokasyon" type="text" />
          </div>
          <div className="field">
            <label>Durum</label>
            <select name="status">
              {statusOptions.map((opt, i) => (
                <option key={i}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>Tur</label>
            <select name="type">
              {typeOptions.map((opt, i) => (
                <option key={i}>{opt.label}</option>
              ))}
            </select>
          </div>
          <button>Ekle</button>
        </form>
      </div>
    </>
  );
}
