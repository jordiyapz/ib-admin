import "./artikel.css";
import TextField from "@mui/material/TextField";
import { Publish } from "@mui/icons-material/";
import * as React from "react";

export default function Artikel() {
  return (
    <div className="artikel">
      <h1 className="artikelTite">Artikel</h1>
      <div className="artikelContainer">
        <div className="artikelWrapper">
          <h3 className="konten">Judul Artikel</h3>
          <TextField
            id="outlined-multiline-flexible"
            label="Isi Judul"
            multiline
            maxRows={4}
          />
        </div>
        <div className="artikelWrapper">
          <h3 className="konten">Kategori</h3>
          <TextField
            id="outlined-multiline-flexible"
            label="Isi Kategori"
            multiline
            maxRows={4}
          />
        </div>
        <form className="artikelImageUtama">
          <div className="artikelWrapper">
            <div className="artikelImageContainer">
              <h3 className="konten">Image Utama Artikel</h3>
              <img
                className="userUpdateImg"
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <label htmlFor="file">
                <Publish className="userUpdateIcon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
          </div>
        </form>
        <div className="artikelWrapper isiKonten">
          <h3 className="konten">Isi Konten</h3>
          <TextField
            className="textField"
            id="outlined-multiline-static"
            label="Isi konten artikel"
            multiline
            rows={7}
          />
        </div>
      </div>
    </div>
  );
}
