import React from "react";
import "./Mapsection.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const Mapsection = () => {
  return (
    <>
      <section className="Mapsection">
        <div className="container">
          <div className="mapsectionwrapper">
            <div className="map">
              <iframe
              className="ppp"
                src="https://yandex.uz/map-widget/v1/?ll=37.655154%2C55.838033&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgc4MDYyNjkxEjfQoNC-0YHRgdC40Y8sINCc0L7RgdC60LLQsCwg0YPQu9C40YbQsCDQlNC-0LrRg9C60LjQvdCwIgoNc5wWQhUSW19C&sctx=ZAAAAAgAEAAaKAoSCcueBDbnUVFAERGPxMvTp0RAEhIJ%2BWcG8YEd1z8RT1yOVyB6xD8iBgABAgMEBSgKOABA31BIAWoCdXqdAc3MzD2gAQCoAQC9Ab1ml%2F%2FCAQQAAAAAggIPVWxpdHNhIERva3VraW5higIAkgIAmgIMZGVza3RvcC1tYXBz&sll=37.719638%2C55.840195&sspn=0.150263%2C0.078223&text=Ulitsa%20Dokukina&z=17.68"
                allowFullScreen
                title="Yandex Map"
              />
            </div>
            <div className="mapinfo">
              <h1>Остались вопросы?</h1>
              <p>
                Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте
                свои координаты и наш менеджер перезвонит вам через 10 минут
              </p>
              <Box className="form" component="form" noValidate autoComplete="off">
                <TextField
                  id="standard-basic"
                  label="Ваше имя"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="Ваш телефон"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="Ваш email"
                  variant="standard"
                />
              
                <TextField
                  id="standard-multiline-static"
                  label="Ваш вопрос"
                  multiline
                  rows={4}
                  variant="standard"
                />
                <button>Отправить</button>
              </Box>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mapsection;
